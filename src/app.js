
const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//funcion agnostica autoconvocada
//aaGNOSTICA PORQUE NO TIENE NOMBRE
//AUTOCONVOCADA POR QUE  LA EEJECUTAMOS  con los ultimos  parentesis 
( async () => {
    main()
})()