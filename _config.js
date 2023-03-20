require('dotenv').config(); 
var config = {}


// Update to have your correct username and password
config.mongoURI = {
    production: process.env.mongodbprod,
    development: process.env.mongodbdev,
    test: process.env.mongodbtest,
}
module.exports = config;

