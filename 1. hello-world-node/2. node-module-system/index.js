//module.exports
//require

const firstModule = require("./first-module")

console.log(firstModule.add(10, 20));

try{
  console.log('trying to divide by zero');
  let result = firstModule.divide(100,100);
  console.log(result);
  
}catch(error){
  console.log('caught an error', error.message);
  
}