import * as mongoose from 'mongoose'

const DressSchema=new mongoose.Schema({
    code:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    designation:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    prix:{
        type:String,
    },
    dressType:{
        type:String,
        default:'voilé'
    },

})




export const Dress = mongoose.model('Dress',DressSchema)