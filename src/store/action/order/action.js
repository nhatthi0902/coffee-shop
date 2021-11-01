import { ACT_UPDATE_SHIPMENT_INFO, ACT_RESET_SHIPMENT_INFO, ACT_CHECK_VALID_INFO, ACT_UPDATE_AMOUNT } from "./action.type";

export function actUpdateSipmentInfo(info){
    return{
        type:ACT_UPDATE_SHIPMENT_INFO,
        payload:info
    }
}

export function actResetSipmentInfo(){
    return{
        type:ACT_RESET_SHIPMENT_INFO,
        payload:""
    }
}

export function actCheckValidSipmentInfo(){
    return{
        type:ACT_CHECK_VALID_INFO,
        payload:""
    }
}