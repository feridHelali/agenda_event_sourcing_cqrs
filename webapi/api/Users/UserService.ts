import * as express from 'express';
import UserSchema from './UserSchema';

export default {
    register: async (req:express.Request, res:express.Response) => {
        const user = new UserSchema(req.body);
        try {
            let result = await user.save();
            if(result){
                return res.status(200).json(result);
            }
        } catch (error) {
            return  res.status(500).json(error);
        }
       
    },

    login: async (req:express.Request, res:express.Response) => {
       let user = await UserSchema.findOne({email: req.body.email});
         if(user){
            return res.status(200).json(user);
         }else{
            return res.status(404).json({message: 'User not found'});
         }
    }
}