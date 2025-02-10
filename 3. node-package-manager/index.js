const lodash = require('lodash'); //importing the lodash module from node_modules

const names = ['shayan', 'john', 'terry', 'alex', 'mia'];
const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
