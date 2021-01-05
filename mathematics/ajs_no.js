// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let [a,b] = userInput[0].split("").map(val=>+val)

let str = String(userInput[0])

if(str.search(String(a+b))!=-1){
    console.log(1)
}else{
    console.log(0)
}

  //end-here
});