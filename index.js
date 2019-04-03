function button () {
    alert('Hey I am button and I just got clicked')
}

function play () {
    let audio = new Audio ('./sounds/tom-1.mp3')
    audio.play()
}

// document.querySelectorAll('button')[0].addEventListener('click', buttonW)

//same as above but anonymous function
// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     alert('button a ')
// })

// selecting all buttons
let buttons = document.querySelectorAll('button')

// giving event listener for all buttons by looping
for (let i = 0; i < buttons.length; i++ ) {
    document.querySelectorAll('button')[i].addEventListener('click', function (){
        
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)
        

    })
}

/* this basically shows what keyboard button we press down
    document.addEventListener('keydown', function(event){
    console.log(event)
    })
*/

document.addEventListener('keydown', function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})



function makeSound (key) {
    switch (key) {
        case 'w':
            let audioButtonW = new Audio('./sounds/tom-1.mp3')
            audioButtonW.play()
        break;

        case 'a':
            let audioButtonA = new Audio('./sounds/tom-2.mp3')
            audioButtonA.play()
        break;

        case 's':
            let audioButtonS = new Audio('./sounds/tom-3.mp3')
            audioButtonS.play()
        break;

        case 'd':
            let audioButtonD = new Audio('./sounds/tom-4.mp3')
            audioButtonD.play()
        break;
        
        case 'j':
            let audioButtonJ = new Audio('./sounds/snare.mp3')
            audioButtonJ.play()
        break;

        case 'k':
            let audioButtonK = new Audio('./sounds/kick-bass.mp3')
            audioButtonK.play()
        break;
        
        case 'l':
            let audioButtonL = new Audio('./sounds/crash.mp3')
            audioButtonL.play()
        break;

        default: console.log(key)
                
    }
}

function buttonAnimation(currentKey) {
   let activeButton = document.querySelector(`.${currentKey}`)
   activeButton.classList.add('pressed')
   
   setTimeout(function(){
       activeButton.classList.remove('pressed')
   }, 300)

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

//     // console.log(calculator(3, 4, multiply))

//    console.log(multiply(4, 5))
//    console.log(calculator(4, 5, multiply));
   