// módulos criados
const {printName, lastName} = require('./printName');
printName(`John ${lastName}`);

// módulos nativos
const os = require('os');
console.log(os.type());