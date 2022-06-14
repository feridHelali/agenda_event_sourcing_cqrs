import * as Mongoose from "mongoose";

const CustomerSchema = new Mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phones:Array
},
);

export default Mongoose.model('Customer', CustomerSchema);