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
let [a,b,c] = userInput[0].split(" ").map(val=>+val)

if(a+b>c&&a+c>b){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});