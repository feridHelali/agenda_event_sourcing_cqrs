import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import ContratController from './api/contract/contrat-router';

import UserController from './api/Users/UserController';
import customerController from './api/customer/customer.controller';
import dressController from './api/dress/dress.controller';

const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/contrat', ContratController);
app.use('/api/users', UserController);
app.use('/api/customer',customerController);
app.use('/api/dress',dressController);

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/cqrsDb';

mongoose.connect(MONGO_URL)
    .then(result=> app.listen(PORT, () =>{
        console.log(`Server started at port ${PORT}`);
    }))
    .catch(err => console.log(err));

app.get('/', (req:express.Request, res:express.Response) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World');
});
