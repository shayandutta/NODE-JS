const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data"); //adding the new folder(data) to the directory //data-> folder name and storing it in dataFolder variable for now


//these are the SYNCHRONOUS methods to perform the operations
//creating a folder inside this folder(subdirectory)
if (!fs.existsSync(dataFolder)) {
  //this will check weather the dataFolder (ie, folder named data(inside the dataFolder variable) exists or not) by checking in the fs(file system), the module that we imported
  fs.mkdirSync(dataFolder); //create the folder if such a folder doesnt exists
  console.log("dataFolder created"); //the data folder will be created and this message will be printed
}



//to create a file inside the data folder
const file = path.join(dataFolder, 'example.txt') //creating a file named example.txt inside the data folder(stored inside the dataFolder variable) and storing it inside a variable named file
//the new file takes the directory of the data folder which is stored inside dataFolder and adds itself to the same directory
fs.writeFileSync(file, 'hello from node.js'); //add the text "hello from node.js" into our new file to be created which is currently stored inside the variable `file`
console.log("file created successfully"); // on executing it the file will be created with the above text inside the data folder and this message will be logged in the console

//reading content from the file(example.txt)
const readContentFromFile = fs.readFileSync(file, 'utf-8')//readContentFromFile will store the contents of `example.txt` using the readFileSync method using the utf-8 encoding
console.log('file content: ', readContentFromFile); //will log the content into the screen

//add(append) another line inside the file created`example.txt`
fs.appendFileSync(file, '\nThis is a new line added to that file') //appendFileSync adds the new content we want to add
console.log('new file content added')



//these are the ASYNCHRONOUS way to perform the operations
//creating a file async way
const asyncFile= path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFile, 'hello, async node js', (err)=>{ //since its a async function so it will take a callback, we are giving err as a callback
    if(err) throw err;
    console.log('async file is created successfully');

    //reading from file async way
    fs.readFile(asyncFile, "utf-8", (err, data)=> { //again since its a async function so it will take a callback and the error will be over data, so the content will be stored inside the data variable
        if(err) throw err;
        console.log("async file content: ", data);

        fs.appendFile(asyncFile, '\nThis is another line added', (err)=>{
            if(err) throw err;
            console.log('new line added to async file');

            fs.readFile(asyncFile, 'utf-8', (err, updatedData)=>{ //to again read the contents, sice it has taken some new line from the previous command
                if(err) throw err;
                console.log("updated file content: \n", updatedData);

            })
        })
    })
})