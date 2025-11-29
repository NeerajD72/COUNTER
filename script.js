const zor = document.querySelector('.add')
const sub = document.querySelector('.minus')
const countt = document.querySelector('.count')
const reset = document.querySelector('.restart')
const inputt = document.querySelector('.input')
let clicked = false


zor.addEventListener('click',()=>{
   if(inputt.value === ''){
    alert(`please enter number first
    Tap Reset Button for continue`)
   }
  const nee= parseInt(inputt.value)
  countt.innerText = parseInt(countt.innerText) +nee
})

sub.addEventListener('click', ()=>{
  if(inputt.value === ''){
    alert(`please enter number first
    Tap Reset Button for continue`)
   }
   const nee= parseInt(inputt.value)
  countt.innerText = parseInt(countt.innerText)-nee
})

reset.addEventListener('click', ()=>{
  countt.innerText='0'
  inputt.value=""
})







