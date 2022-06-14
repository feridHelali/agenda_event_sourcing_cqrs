import * as express from 'express';
import {buildDressRentContractTimer} from '../DressRentContract/DressRentContractController';
import EventSchema from './EventSchema';

export default {
    postEvents: async (req:express.Request, res:express.Response) => {
        let event = req.body;
        await EventSchema.create(event);

        buildDressRentContractTimer();
        res.json({ message: 'Post events' });
    },
    getEvents: (req:express.Request, res:express.Response) => {
        res.json({ message: 'Get events' });
    }
}