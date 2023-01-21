let numbers = document.querySelectorAll('.numbers');
let result = document.querySelector ('.result p');
let AC = document.querySelector ('.ac');
let equal = document.querySelector ('.equal');
let signs = document.querySelectorAll ('.signs');
let negative = document.querySelector ('.negative');
let percent = document.querySelector ('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener ('click', (e) => {
        let variable = e.target.getAttribute('value');
        if(isFirstValue === false) {
            myFunction (variable);
        }
        if(isSecondValue === false) {
            myFunction2 (variable);
        }
    })
} 



function myFunction(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
    console.log (firstValue);
}

function myFunction2(el) {
    if(firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSigns () {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSigns();

equal.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    } else if(sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "x") {
        resultValue = firstValue * secondValue;
    } else if(sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    // console.log (sign);
})

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;   
})
 percent.addEventListener ('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue / 100;   
 })

AC.addEventListener ('click', () => {
    result.innerHTML = 0;
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;

})



// Наше родное) 
//     let result = document.getElementById ('result');
//     variable = element.textContent;
//     console.log (variable); 


  
//     if(variable == '='){
//             // result.textContent = "0";
//             console.log("Calculating...");
//     }   else if(variable == "+"){
//             result.textContent = variable + variable;
//     } 
//         else {
//             stringBefore += variable;
//             result.textContent = stringBefore;   
//     }
   
//     switch (op) {
//         case 'AC': 
//         result.textContent = '0';
//         break;
//     }
    
    

    










