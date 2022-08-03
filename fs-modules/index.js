const fs = require('fs');

/* 
*this function is used to created a file in the system
 */
// fs.writeFile('demo.txt', 'demo is writting 2', (err) => {
//     if (err) {
//         console.log('err', err);
//     }
//     else {
//         console.log('file created');
//     }
// })

/* 
*this function is used to append a line in the existing file in the system
 */
// fs.appendFile('demo.txt', 'demo is writting 3', (err) => {
//     if (err) {
//         console.log('err', err);
//     }
//     else {
//         console.log('file updated');
//     }
// })

/* 
***This function is used to read a file 
*/
fs.readFile('demo.txt', ('utf-8'), (err, data) => {
    if (err) {
        console.log('err', err);
    }
    else {
        console.log('file read', data);
    }
})

/*
=>fs is called file system module 
=>Rename for rename a file
=>Unlink for delete a file
*/