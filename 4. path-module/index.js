const path = require('path'); //getting the path module here

console.log('Directory name', path.dirname(__filename)); // to get directory name

console.log('File name', path.basename(__filename)); // to get file name

console.log('file extension', path.extname(__filename)) // to get extension name

const joinPath = path.join('./user', 'document', 'node', 'projects'); // to join paths given as input
console.log("joined path" , joinPath); //printing the joined path

const resolvePath = path.resolve('./user', 'document', 'node', 'projects') //resolves the actual path including the mentioned directories
console.log("resolved path", resolvePath); //printing the resolvePath

const normalisePath = path.normalize('./user/.documents/../node/projects') //gives the simplified path
console.log("normalised path", normalisePath)

