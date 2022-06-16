import { AGEvent } from "../Events/AGEvent";
import ListContratProjection from "./listContrat-projection";


export const createContractHandler = async (event:AGEvent) => {
    
    if(event.action === 'CREATE_CONTRACT'){
        const listContratProjection = new ListContratProjection();
        listContratProjection.dateContrat = event.payload.dateContrat;
        listContratProjection.cunstomer = event.payload.customer;
        listContratProjection.robes = event.payload.dresses;
        listContratProjection.service = event.payload.bcservices;
        listContratProjection.status = 'En cours';
        await listContratProjection.save();
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

