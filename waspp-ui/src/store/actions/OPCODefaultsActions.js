import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

export const editGroupName = groupName => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_GROUP_NAME,
        groupName: groupName
    }
}

export const editCommissionModel = commissionModel => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_COMMISSION_MODEL,
        commissionModel: commissionModel
    }
}

export const editFloor = floor => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_FLOOR,
        floor: floor
    }
}

export const editSeasonalFloor = seasonalFloor => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_SEASONAL_FLOOR,
        seasonalFloor: seasonalFloor
    }
}

export const editGuaranteePercentage = guaranteePercentage => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_GUARANTEE_PERCENTAGE,
        guaranteePercentage: guaranteePercentage
    }
}

export const editBonusModels = bonusModels => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_BONUS_MODELS,
        bonusModels: bonusModels
    }
}

export const editOrgLevel = orgLevel => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_ORG_LEVEL,
        orgLevel: orgLevel
    }
}

export const editLocation = location => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_LOCATION,
        location: location
    }
}

export const editEmail = email => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_EMAIL,
        email: email
    }
}

export const toggleGuaranteeBonus = guaranteeBonus => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_GUARANTEE_BONUS,
        guaranteeBonus: guaranteeBonus
    }
}

export const toggleLow = low => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_LOW,
        low: low
    }
}

export const toggleMedium = medium => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_MEDIUM,
        medium: medium
    }
}

export const toggleHigh = high => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_HIGH,
        high: high
    }
}

export const toggleDefaultFlights = (flight, letter) => {
    switch(letter){
        case 'A':
            return{
                type: actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_A,
                flightA: flight
            }
        case 'B':
            return{
                type: actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_B,
                flightB: flight
            }
        case 'C':
            return{
                type: actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_C,
                flightC: flight
            }
        case 'D':
            return{
                type: actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_D,
                flightD: flight
            }
        case 'E':
            return{
                type: actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_E,
                flightE: flight
            }
        default: return {type: 'NONE'}
    }
}

export const toggleTRS = trs => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_TRS,
        trs: trs
    }
}

export const toggleTRP = trp => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_TRP,
        trp: trp
    }
}

export const toggleLLC = llc => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_LLC,
        llc: llc
    }
}

export const toggleCMU = cmu => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_CMU,
        cmu: cmu
    }
}

export const toggleOTH = oth => {
    return{
        type: actionTypes.TOGGLE_OPCODEFAULT_OTH,
        oth: oth
    }
}

export const selectMAServe = maServe => {
    return{
        type: actionTypes.SELECT_MA_SERVE,
        maServe: maServe
    }
}

export const selectBonusField = bonusField => {
    return{
        type: actionTypes.SELECT_BONUS_FIELDS,
        bonusField: bonusField
    }
}

export const selectColumnAxis = columnAxis => {
    return{
        type: actionTypes.SELECT_COLUMN_AXIS,
        columnAxis: columnAxis
    }
}

export const selectOPCO = (opco, opcoInfo) =>{
    return{
        type: actionTypes.SELECT_OPCO,
        opco: opco,
        opcoInfo: opcoInfo 
    }
}

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch the OPCODefaults from the database
export const fetchOPCODefaults = () =>{
    return dispatch =>{
        axios.get(links.OPCODEFAULTS + '.json')
        .then(response =>{
            const responseData = [];
            const opcoNumbers = [];
            for(let OPCODefaults in response.data){
                responseData.push({
                    ...response.data[OPCODefaults],
                    id: OPCODefaults
                });
            }
            for(let opcoNums in responseData){
                opcoNumbers.push(
                    responseData[opcoNums].OPCONumber
                );
            }
            dispatch(fetchOPCODefaultsSuccess(responseData, opcoNumbers));
        });
    }
};

const fetchOPCODefaultsSuccess = (opcoDefaultsList, opcoNumbers) =>{
    return{
        type: actionTypes.FETCH_OPCODEFAULTS_SUCCESS,
        opcoData: opcoDefaultsList,
        opcoNumbers: opcoNumbers
    }
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will update OPCODefault in database

export const putOPCODefault = (opcoInfo) => {
    return dispatch => {
        axios.put(links.OPCODEFAULTS +'/'+ opcoInfo.id + '.json', opcoInfo);
    };
}