import mongoose from 'mongoose';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => await mongoose.connect('mongodb://localhost:27017/eventDb').then(conn => {
    console.log('connected to mongodb');
}).catch(error => console.error(error)))();


app.listen(3000, () => console.log('listening on port 3000'));