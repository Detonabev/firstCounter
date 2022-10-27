

let counter = document.getElementsByTagName('h2')
counter[0].style.color ='blue'

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
    // let decrease  = document.body
    // decrease.style.backgroundColor ='yellow'
    if(heading.innerText < 0){
        document.body.style.backgroundColor ='red'
    }
}
dec.addEventListener('click', DECREASE)

// RESET
function RESET(){
    heading.innerText = 0
    // let reset  = document.body
    // reset.style.backgroundColor ='red'
    if(Number(heading.innerText)  === 0){
        document.body.style.backgroundColor = 'yellow'
    }
}
res.addEventListener('click', RESET)

// INCREASE
function INCREASE(){
    heading.innerText++
    // let increase  = document.body
    // increase.style.backgroundColor ='green'
    if(heading.innerText > 0){
        document.body.style.backgroundColor = 'green'
    }
}
inc.addEventListener('click', INCREASE)
