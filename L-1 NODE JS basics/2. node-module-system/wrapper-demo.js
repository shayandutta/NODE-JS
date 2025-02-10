const wrapperExplorer = require('./wrapper-explorer');

//we are trying to print the parametes stored by wrapper module functions 
console.log(`in wrapper-demo.js file`);
console.log('__filename in wrapper-demo', __filename)
console.log('__dirname in wrapper-demo', __dirname)

wrapperExplorer.greet("shayan dutta")
//taking this function just to check if the module has been imported successfully