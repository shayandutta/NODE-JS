console.log('in wrapper-explorer.js file');

//we are trying to print the parametes stored by wrapper module functions 
console.log('__filename in wrapper-explorer', __filename)
console.log('__dirname in wrapper-explorer', __dirname)


module.exports.greet = function(name){
    console.log(`hello ${name}`);
};
//basically we created this geet function here only along with module.exports, nothing superficial