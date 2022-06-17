import {Dress} from './dress.model'

export const addDress = async (req,res)=>{
    let dress = req.body;
    let result = await Dress.create(dress);
    return res.json({message:'New Dress Added',pyload:result})

}


