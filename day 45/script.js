let box=document.querySelector('#box');
let downloadbar=document.querySelector('#downloadbar');
let bar=document.querySelector('#bar');
let status=document.querySelector('#status');
let per=document.querySelector('#per');
let btn=document.querySelector('#btn');
let percentage=0;
let widthPer=0;
btn.addEventListener('click',()=>{
     let time=Math.floor(Math.random()*11)
     console.log(time);
     let interval=setInterval(()=>{
          if(percentage===101){
               clearInterval(interval)
               btn.textContent="Download Complete!"
               btn.style.color="crimson"
               btn.style.backgroundColor="white";
               return;
          }
          per.textContent=`${percentage}%`;
          bar.style.width=`${percentage}%`;
          percentage++;
     },(time*1000)/100);
})
