// var h1=document.querySelector("h1"); // Selects only first h1
var allH1=document.querySelectorAll("h1"); // Selects all h1
console.log(allH1);
allH1.forEach(()=>{
     console.log(`Hello ${allH1}`);
})