import * as mongoose from 'mongoose';

const ContratEvent = new mongoose.Schema({
    action:'Create_Contrat',
    userId: {
        type: String,
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

    payload: {
        dateContrat: Date,
        customerId: String,
        robesId: String

    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('ContratEvent', ContratEvent);