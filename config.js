const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NKE1AaYZ#4hdRqH603kdBykmZ-JjLRypbE9fUwlvJfAognz_NGcI",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
