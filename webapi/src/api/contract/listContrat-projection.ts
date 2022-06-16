import * as mongoose from 'mongoose';


const ListContrat= new mongoose.Schema({
    dateContrat: {
        type: Date,
        required: true
    },
    cunstomer: {
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
