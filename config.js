const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'gtRUgQhB#PLMsTTUlj2YAioYxpdkEnBNnmDwPo0qaQXev3LsuA8wftrc', //add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};
