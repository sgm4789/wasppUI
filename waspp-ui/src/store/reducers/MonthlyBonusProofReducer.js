import {updateObject} from "../../shared/utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    rows:[{
        AS400ID: '000',
        TerritoryDescription: '000',
        EmployeeID: '000',
        FileNumber: '000',
        TerritoryID: '000',
        BASE: '000',
        CommissionsAdvance: '000',
        Subsidy: '000',
        Comm: '000',
        BonusFloor: '000',
        Buyouts: '000',
        CalculatedPay: '000',
        Floor: '000',
        BonusMatrixAmount: '000',
        FloorPayments: '000',
        NetBonus: '000',
        AfterFloorAdjustment: '000',
        CheckTotal: '000',
        CommissionDate: '000',
    }]
};

const fetchAdjustmentsSuccess = (state, action) => {
    console.log(action.mbProofList);
    return updateObject( state, {
        rows: action.data
    })
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_MONTHLY_BONUS_PROOFS_SUCCESS: return fetchAdjustmentsSuccess(state, action);
        default: return state;
    }
}

export default reducer;