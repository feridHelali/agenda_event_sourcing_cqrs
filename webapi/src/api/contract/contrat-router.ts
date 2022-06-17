import * as express from 'express';
import { AGEvent } from '../Events/AGEvent';
import {  getAllPendingContractHandler, processContractHandler, findOrCreateNewContratHandler, getFindDresses } from './ContractHandlers';

const router = express.Router();

router.post('/add', async (req: express.Request, res: express.Response) => {
    let payload=req.body;
       
    let event:AGEvent = {
        action:'CONTRACT_ADDED',
        payload:payload
    }
    
    let result = await findOrCreateNewContratHandler(event);
    res.json({message:result})

});

router.put('/process/:id', (req: express.Request, res: express.Response) => {  
    let event:AGEvent = req.body;
    processContractHandler(req.params.id,event);
    res.json({message:'contrat terminé'})
});


router.get('/all',async  (req: express.Request, res: express.Response) => {
    res.json({"contracts":await getAllPendingContractHandler()});
});

router.get('/finddress',async (req: express.Request, res: express.Response) =>{
    res.json({"dress":await getFindDresses()});
})


export  default router;