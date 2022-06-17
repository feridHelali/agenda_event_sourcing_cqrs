import {Customer} from "./customer.model"


export const addCustomer = async (req,res)=>{
    let customer = req.body;
    let result = await Customer.create(customer);
    return res.json({message:'New Customer Added',pyload:result})

}


