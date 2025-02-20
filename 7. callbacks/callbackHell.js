//multiple nested callbacks -> callback hell

const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data)=> {
    if(err){
        console.error('error reading file', err)
        return;
    }
    const modifyFileData = data.toUpperCase();
    fs.writeFile('output.txt', modifyFileData, (err)=>{
        if(err){
            console.log("error writing file", err)
            return;
        }
        else{
            console.log('data written to the new file')
        }
        fs.readFile('output.txt', 'utf-8', (err, data)=>{
            if(err){
                console.log('error reading file', err)
                return;
            }
            else{
                console.log(data);
            }
        })
    })
})