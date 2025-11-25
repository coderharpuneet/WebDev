var btn=document.querySelector('button')
var box=document.querySelector('#box')
btn.addEventListener('click',()=>{
     var c1=Math.floor(Math.random()*256)
     console.log(c1)
     var c2=Math.floor(Math.random()*256)
     console.log(c2)
     var c3=Math.floor(Math.random()*256)
     console.log(c3)
     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`

})