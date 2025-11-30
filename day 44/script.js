let btn=document.querySelector('#btn')
let main=document.querySelector('main')
btn.addEventListener('click',()=>{
     
     var div=document.createElement('div')
     div.style.height='50px'
     div.style.width='50px'
     div.style.backgroundColor='blue'
     div.style.position='absolute'
     main.appendChild(div)
})