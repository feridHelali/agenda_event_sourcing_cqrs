import * as mongoose from 'mongoose';

const DressRentContractSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    dresses: Array,
    
    beautyServices: Array,

    scheduleRentDate: {
        type: Date,
    },
    scheduleReturnDate: {
        type: Date,
    },
    rentPrice: {
        type: Number,
        required: true
    },
    customer: String,
    status: {
        type: String,
        required: true
    },
    observations: {
        type: String,
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('DressRentContract', DressRentContractSchema);