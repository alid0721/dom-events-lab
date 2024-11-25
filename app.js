/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const displayElement=document.querySelector(".display")
/*-------------------------------- Variables --------------------------------*/
let currentnumber=""
let operator=""
let previousnumber=""
let result=0
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        //console.log(event.target.innerText);
        // Future logic to capture the button's value would go here...
        if (event.target.classList.contains("button")){
            if (event.target.classList.contains("number")){
                if (currentnumber!==""){
                    previousnumber=currentnumber
                    currentnumber=event.target.innerText
                    displayElement.textContent=event.target.innerText
                }else{
                    currentnumber=event.target.innerText
                    displayElement.textContent=event.target.innerText
                    
                }
                console.log(currentnumber)
                console.log(previousnumber)
            }
            else if(event.target.classList.contains("operator")){
                if (event.target.innerText==="C"){
                    currentnumber=""
                    operator=""
                    previousnumber=""
                    result=0
                    displayElement.textContent=""
                }else{
                operator=event.target.innerText
                displayElement.textContent=event.target.innerText
                }
            }
            else if (event.target.classList.contains("equals")){
                result=calculate(Number(previousnumber),Number(currentnumber),operator)
                console.log(result)
                displayElement.textContent=result
            }
            
        }

    });
  });
  
/*-------------------------------- Functions --------------------------------*/
function calculate(num1,num2,operator){
    if (operator==="+"){
        return num1+num2
    }
    else if (operator==="-"){
        return num1-num2
    }
    else if (operator==="*"){
        return num1*num2
    }
    else if (operator==="/" && num2!==0){
        return num1/num2
    }else {
        return ""
    }
}