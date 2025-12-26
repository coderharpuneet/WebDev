const fs=require("fs");
const http=require("http");
// fs.writeFile("hello.txt","Hey hello kaise ho",(err)=>{
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.appendFile("hello.txt","\nNode JS intro",(err)=>{
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.rename("hello.txt","hey.txt",(err)=>{
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.copyFile("hey.txt","./copy/chacha.txt",(err)=>{
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.unlink("./copy/chacha.txt",(err)=>{
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.rmdir("./copy",(err)=>{ // rmdir is used to empty remove directory
//      if(err) console.log(err);
//      else console.log("Done");
// })
// fs.rmdir("./copy",{recursive:true},(err)=>{ // recursive is used to remove directory with files
//      if(err) console.log(err);
//      else console.log("Done");
// })

const server=http.createServer((req,res)=>{
     res.end("Hello World")

})
server.listen(8000,()=>{
     console.log("Server is running on port 8000")
})