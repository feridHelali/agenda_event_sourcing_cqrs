import * as express from 'express';
import { AGEvent } from '../Events/AGEvent';
import { createContractHandler, getAllPendingContractHandler, processContractHandler } from './ContractHandlers';

const router = express.Router();

router.post('/add', (req: express.Request, res: express.Response) => {
    let event:AGEvent = req.body;
    createContractHandler(event);
    res.json({message:'contrat ajouter'})

});

router.put('/process/:id', (req: express.Request, res: express.Response) => {  
    let event:AGEvent = req.body;
    processContractHandler(req.params.id,event);
    res.json({message:'contrat terminé'})
});


router.get('/all',async  (req: express.Request, res: express.Response) => {
    res.json({"contracts":await getAllPendingContractHandler()});
});


export  default router;