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
let strarr = userInput[0].split(" ")

for(let index=0;index<strarr.length;index++){
    if(index%2===0){
        strarr[index] = strarr[index].slice().toUpperCase()
    }else{
        strarr[index] = strarr[index].slice().toLowerCase()
    }
}

console.log(strarr.join(" "))
  //end-here
});