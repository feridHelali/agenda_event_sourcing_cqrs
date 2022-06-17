import * as express from 'express';
import { addCustomer } from './customer.service';

const router=express.Router();

router.post('/add',addCustomer)

export default router;