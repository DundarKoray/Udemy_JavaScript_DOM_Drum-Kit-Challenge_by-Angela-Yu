function button () {
    alert('Hey I am button and I just got clicked')
}

// document.querySelectorAll('button')[0].addEventListener('click', buttonW)

//same as above but anonymous function
// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     alert('button a ')
// })


let buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++ ) {
    document.querySelectorAll('button')[i].addEventListener('click', button)
}


// //High order functions - Mini calculator challenge
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

//     console.log(calculator(3, 4, multiply))