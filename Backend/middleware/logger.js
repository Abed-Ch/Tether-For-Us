const { format } = require('date-fns');
const { v4:uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvents = async (msg,logFile)=>{
    const dateTime = `${format(new Date(),'dd-MM-yyyy\tHH:mm:ss')}`;
    const logItems = `${dateTime}\t${uuid()}\t${msg}\n`;
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'));
        };
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logFile),logItems);
    }catch(err){
        
    }
};
module.exports = { logEvents}