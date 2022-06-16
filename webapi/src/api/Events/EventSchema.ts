import * as mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    payload: {
        type: Object,
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('EventSchema', EventSchema);