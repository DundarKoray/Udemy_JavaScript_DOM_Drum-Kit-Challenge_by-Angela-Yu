function buttonW () {
    alert('Hey I am button W and I just got clicked')
}

document.querySelectorAll('button')[0].addEventListener('click', buttonW)

//same as above but anonymous function
document.querySelectorAll('button')[1].addEventListener('click', function(){
    alert('button a ')
})