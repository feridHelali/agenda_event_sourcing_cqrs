import * as express from 'express';
import EventServices from './EventServices';


const router = express.Router();

router.route('/')
    .post(EventServices.postEvents)
    .get(EventServices.getEvents);

export default router;