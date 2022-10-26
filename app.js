

let counter = document.getElementsByTagName('h2')
counter[0].style.color ='red'

// const btn = document.querySelector('.btn')
// const Counter = document.querySelector('h2')
// // Counter.innerText = 'Simi'
// function changeCounter(){
//     let hasClass = Counter.classList.contains(Counter.innerText = 'Simi')
//     if(hasClass){
//         Counter.classList.remove(Counter.innerText = 'Simi')
//     }else{
//         Counter.classList.add(Counter.innerText = 'Simi')
//     }
// }
// btn.addEventListener('click', changeCounter)

// let btn = document.querySelector('.inc')
// function coloured(){
//     let body = document.body
//     body.style.backgroundColor = 'brown'
// }
// btn.addEventListener('click', coloured)

let heading = document.querySelector('h1')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

// DECREASE
function DECREASE(){
    heading.innerText--
}
dec.addEventListener('click', DECREASE)

// RESET
function RESET(){
    heading.innerText = 0
}
res.addEventListener('click', RESET)

// INCREASE
function INCREASE(){
    heading.innerText++
}
inc.addEventListener('click', INCREASE)
