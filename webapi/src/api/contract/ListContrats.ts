import * as mongoose from 'mongoose';


const ListContrats= new mongoose.Schema({
    dateContrat: {
        type: Date,
        required: true
    },
    customer: Object,
    dress: Object,
    service:Array,
    status: {
        type: String,
        required: true,
        default: 'En cours'
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('ListContrat', ListContrats);
