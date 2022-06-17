import * as mongoose from 'mongoose';


const ListContrat= new mongoose.Schema({
    userId: {
        type: String,
    },
    dateContrat: {
        type: Date,
        required: true
    },
    customer: {
        fullName: {
            type: String
        },
        address: {
            type: String
        },
        phone: {
            type: String
        }
    },
    
    robes:Array,
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

export default mongoose.model('ListContrat', ListContrat);
