/* 
=>os methods means operating system methods
*/

/* const os = require('os');
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.platform()); */

// console.log(__dirname);
// console.log(__filename);

const path = require('path');
// console.log(path);
const extensionName = path.extname('index.html');
console.log(extensionName);

const joinName = path.join(__dirname, '../../index.html');
console.log(joinName);

