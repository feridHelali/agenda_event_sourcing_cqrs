

import { AGEvent } from "../Events/AGEvent";
import ListContratProjection from "./listContrat-projection";




export const findOrCreateNewContratHandler = async (event:AGEvent) => {
    let payload=event.payload;
    if(event.action === 'CREATE_CONTRACT'){
        let listContratFixedDress = await ListContratProjection.find({
            dateContrat:payload.dateContrat,
            dressId:payload.robes
        });

       if(listContratFixedDress.length ===0 ){
           let lcp=new ListContratProjection({
               dateContrat:payload.dateContrat,
              // customer:await Customer.find{_id:payload.customerId}
           })
           let result = await lcp.save();
           return result; 
        }
        
    }

}

export const getAllPendingContractHandler = async () => {
    const listContratProjection = await ListContratProjection.find({status:'En cours'});
    return listContratProjection;
}

export const processContractHandler = async (id:string, event:AGEvent) => {
    if(event.action === 'DONE_CONTRACT'){
        await ListContratProjection.findByIdAndUpdate(id, {status:'Terminé'});
        
    }
}

export const getFindDresses = async ()=>{
  const listContratFixedDress = await ListContratProjection.find({status:'vérifier'});
   return listContratFixedDress;
}

