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
let n = +userInput[0]
let nums = userInput[1].split(" ").map(val=>+val).sort((a,b)=>a-b)
let diff = []

for(let i=0;i<nums.length-1;i++){
    diff.push(Math.abs(nums[i]-nums[i+1]))
}
console.log(Math.min(...diff))

  //end-here
});