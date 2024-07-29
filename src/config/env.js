//dotnev con .config hace que las variables de entorno se seteen  en objeto process y esten dispoonibles
require('dotenv').config();
const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


//para extraerlas en app.js
module.exports = {
    envs
}