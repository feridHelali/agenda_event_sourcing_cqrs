

import { Customer } from "../customer/customer.model";
import {Dress} from "../dress/dress.model";
import { AGEvent } from "../Events/AGEvent";
import ListContrats from "./ListContrats";




export const findOrCreateNewContratHandler = async (event:AGEvent) => {
    let payload=event.payload;
    if(event.action === 'CONTRACT_ADDED'){
        let listContratFixedDress = await ListContrats.find({
            dateContrat:payload.dateContrat,
            'dress._id':payload.dressId
        }).countDocuments();

        console.log(listContratFixedDress)

       if(listContratFixedDress === 0){
           let lcp=new ListContrats({
               dateContrat:payload.dateContrat,
               customer:await Customer.find({_id:payload.customerId}),
               dress:await Dress.findOne({_id:payload.dressId}),
           })

           let result = await lcp.save();
           console.log('result ',result)
           return result; 
        }
        
    }

}

export const getAllPendingContractHandler = async () => {
    const listContratProjection = await ListContrats.find({status:'En cours'});
    return listContratProjection;
}

export const processContractHandler = async (id:string, event:AGEvent) => {
    if(event.action === 'DONE_CONTRACT'){
        await ListContrats.findByIdAndUpdate(id, {status:'Terminé'});
        
    }
}

export const getFindDresses = async ()=>{
  const listContratFixedDress = await ListContrats.find({status:'vérifier'});
   return listContratFixedDress;
}

