const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let num = +userInput[0]
if (num%7 === 0){
    console.log("yes")
}else{
    console.log("no")
}


//end-here
});
