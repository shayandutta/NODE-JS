//callbacks are used everywhere for example handling asynchronous operations




function person(name, callbackFn){
    console.log(`hello ${name}`)
    callbackFn();
}

function address(){
    console.log("india")
}

person('shayan', address)


const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.error('error reading file', err);
        return
    }
    else{
        console.log(data);
        
    }
})