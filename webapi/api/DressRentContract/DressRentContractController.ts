import EventSchema from '../Events/EventSchema';
import DressRentContractSchema from './DressRentContractSchema';

export const buildDressRentContractTimer = async () => {

    let dressRentContracts = await EventSchema.find({ action: 'ADD_DRESS_CONTRACT', status: 'PENDING' });
    if (dressRentContracts.length > 0) {
        dressRentContracts.forEach(async (e) => {   
            let dressRentContract = await EventSchema.findById(e._id);
            let dressRentContractPayload = dressRentContract.payload;
            let dressRentContractScheduleRentDate = dressRentContractPayload.scheduleRentDate;
            let dressRentContractScheduleReturnDate = dressRentContractPayload.scheduleReturnDate;
            let dressRentContractRentPrice = dressRentContractPayload.rentPrice;
            let dressRentContractCustomerId = dressRentContractPayload.customerId;
            let dressRentContractUserId = dressRentContractPayload.userId;
            let dressRentContractDresses = dressRentContractPayload.dresses;
            let dressRentContractBeautyServices = dressRentContractPayload.beautyServices;
            let dressRentContractObservations = dressRentContractPayload.observations;
            let dressRentContractStatus = dressRentContractPayload.status;
            let dressRentContractId = dressRentContractPayload._id;
            await DressRentContractSchema.create({
                userId: dressRentContractUserId,
                customerId: dressRentContractCustomerId,
                dresses: dressRentContractDresses,
                beautyServices: dressRentContractBeautyServices,
                scheduleRentDate: dressRentContractScheduleRentDate,
                scheduleReturnDate: dressRentContractScheduleReturnDate,
                rentPrice: dressRentContractRentPrice,
                observations: dressRentContractObservations,
                status: dressRentContractStatus,
                _id: dressRentContractId
            });
        });



        setTimeout(() => {
            buildDressRentContractTimer();
        }, 10000);
    }

}
