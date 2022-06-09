import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import EventController from './api/Events/EventController';
import UserController from './api/Users/UserController';

const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/events', EventController);
app.use('/api/users', UserController);

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
