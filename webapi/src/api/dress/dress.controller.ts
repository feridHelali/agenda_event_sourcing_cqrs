import * as express from 'express';
import { addDress } from './dress.service';


const router=express.Router();

router.post('/add',addDress)

export default router;