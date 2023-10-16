import express, {Request, Response} from "express";
import * as countryService from '../services/country-service'

const router = express.Router();
const bodyParser = require("body-parser")

var cors = require("cors")
router.use(cors())

router.use(bodyParser.json());

router.get('/countries', (req: Request, res: Response) => {
    countryService.getCountries().then(
        (countries) => {
            res.send(countries);
        }).catch((error)=> {
            res.send(error.message)
    })
});

router.get('/countries/:id', (req: Request, res: Response) => {
    countryService.getCountryById(parseInt(req.params.id)).then(
        (country) => {
            res.send(country);
        }
    );
});

router.post('/countries', (req: Request, res: Response) => {
    countryService.saveCountry(req.body).then(
        () => {
            res.status(200).json({
                message: "Country was Inserted"
            });
        }
    ).catch((error)=>{
        console.log(error.message);
        res.json({
            message: "Error occured" + error.message
        })
    });
});

router.put('/countries/:id', (req: Request, res: Response) => {
    countryService.updateCountry(parseInt(req.params.id), req.body).then(
        () => {
            res.status(200).json({
                message: "Country was successfully updated!"
            });
        }
    ).catch((error)=>{
        res.status(303).json({
            message: "Error occured" + error.message
        })
    });
});

router.delete('/countries/:id', (req: Request, res: Response) => {
    countryService.deleteCountry(parseInt(req.params.id)).then(
        (country) => {
            res.send(country);
        }).catch((error) => res.send(error.message))
    ;
});

export  default router
