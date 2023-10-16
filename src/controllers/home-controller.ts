import express, {Request, Response} from 'express';
import * as service from '../services/home-service'

const router = express.Router();

router.get('/home', (req: Request, res: Response) => {
    return res.status(200).json({
        message: service.goHome()
    });
});



export default router
