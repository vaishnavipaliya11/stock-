var inputs = document.querySelectorAll(".input");
var output = document.querySelector(".output");
var container = document.querySelector(".container");
const form = document.forms[0];

form.addEventListener("submit", checkBtnHandler);

function checkBtnHandler(e){
    e.preventDefault();

    let CP = inputs[0].value;
    let Qty = inputs[1].value;
    let SP = inputs[2].value;
    if( !isNaN(CP) && !isNaN(Qty) && !isNaN(SP)){
        CP = Number(CP);
        Qty = Number(Qty);
        SP = Number(SP);
        if(CP>0 && Qty>0 && SP>0){

            if(CP>SP){
                const loss = ((CP-SP)*Qty).toFixed(2);
                const lossInPer=(((CP-SP)*100)/CP).toFixed(2) ;
                // output.innerHTML= "You lost" +lossInPer+ "% Your total loss is " +loss+ "."
                output.innerHTML =`you lost ${lossInPer}% and your total loss is ${loss}.`

                if(lossInPer>50){

                container.classList.add("sadTheme");
                }

            }

            else{
                const profit = ((SP-CP)*Qty).toFixed(2)
                const profitInPer=(((SP-CP)*100)/CP).toFixed(2) ;

                output.innerHTML =`you gained ${profitInPer} and your total profit is ${profitInPer}.`

                if(profitInPer>50){

                container.classList.add("happyTheme");
                }
            }
        }else{

            output.innerText="Please enter values greater than 0 (only numbers are allowed in above fields)"
        }
    }else{

        output.innerText="Please enter values greater than 0 (only numbers are allowed in above fields)"
    }
}
