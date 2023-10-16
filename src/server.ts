import http from 'http'
import express, {Express} from 'express'

import  * as countryController from './controllers/country-controller'
import * as homeController from './controllers/home-controller'

const router: Express = express();


router.use('',
    homeController.default,
    countryController.default
)

const httpServer = http.createServer(router)

httpServer.listen(8880, ()=>{
    console.log(`Server is running at port 8880`);
})
