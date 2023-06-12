const os = require('os');
// info about current user
const user = os.userInfo();

// method returns the system uptime inseconds
console.log(`The sysytem is uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMan:os.freemem()
}
console.log(currentOs)