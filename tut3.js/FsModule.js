const {readFileSync,writeFileSync,readFile,writeFile, read} = require('fs');

//This is the sync method :-
// const first = readFileSync('../content/First.txt','utf-8')
// // console.log(first);
// const second = readFileSync('../content/Second.txt','utf-8')
// writeFileSync(
//     '../content/result-sync.txt',
//     `Here is the result : ${first} + ${second} `,
//     {flag: 'a'}
// )


// This is the async method :-
readFile('../content/First.txt','utf8',(err,result) => {
    if(err){
        console.log(`The error is \n ${err}`);
        return;
    }
    const first = result;
    readFile('../content/Second.txt','utf8',(err,result) => {
        if(err){
            console/log(err)
        }
        const second = result;
        writeFile(
            '../content/result-sync.txt',
            `Here is the result : ${first}  , ${second}`,{flag:'a'},
            (err,result) => {
                if(err){
                    console.log(err)
                }
                console.log(result);
        })
    })
})
