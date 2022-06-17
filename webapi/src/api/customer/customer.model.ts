import * as mongoose from 'mongoose'

const CustomerSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:String
    }

})




export const Customer = mongoose.model('Customer',CustomerSchema)