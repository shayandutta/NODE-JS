//module.exports
//require

const firstModule = require("./first-module");

console.log(firstModule.add(10, 20));

try {
  console.log("trying to divide by zero");
  let result = firstModule.divide(0, 0); //this is what we are trying to do that might get an error
  console.log(result);
} catch (error) {
  console.log(error.message); // if this catch block catches the error then sends the error message and lets the thread go to the next script otherwise with this try & catch block, the compilation would have stopped here itself and the next lines would not have been compiled
}//this is the message we gave to the error constructor in first-module.js if b===0; 

console.log(firstModule.add(10, 20));



//module wrapper
// (
//     function(exports, require, module, __filename, __dirname){
        //your code goes here
//     }
// )