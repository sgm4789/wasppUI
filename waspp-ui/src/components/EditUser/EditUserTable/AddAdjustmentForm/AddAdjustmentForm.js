import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './AddAdjustmentForm.css'
import DateInput from '../../../UI/DateInput/DateInput';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';

const adjustmentForm = (props) => {

    const addAdjustmentHandler = (event) => {
        event.preventDefault();
        props.onAddAdjustment({
            user: props.user,
            weekEndDate: props.adjustment.date._d.toLocaleDateString(),
            comment: props.adjustment.comment,
            amount: props.adjustment.amount
        });
        props.close();
    }

    const addAfterFloorAdjustmentHandler = (event) => {
        event.preventDefault();
        props.onAddAfterFloorAdjustment({
            user: props.user,
            weekEndDate: props.afterFloorAdjustment.date._d.toLocaleDateString(),
            comment: props.afterFloorAdjustment.comment,
            amount: props.afterFloorAdjustment.amount
        });
        props.close();
    }

    return(
        <div>
            <form onSubmit={props.isAfter ? (event) => addAfterFloorAdjustmentHandler(event) : (event) => addAdjustmentHandler(event)}>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')} value={props.user.PayrollNumber} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Active Directory Name</label>
                    <div>
                        <input type='text' className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')}  value={props.user.TerrDescription} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Amount</label>
                    <div>
                        <input pattern='\d+(\.\d{2})?'
                               required
                               onChange={props.isAfter ?((event) => props.onEditAfterFloorAmount(event.target.value)) : ((event) => props.onEditAmount(event.target.value))}
                               value={props.isAfter ? props.afterFloorAdjustment.amount : props.adjustment.amount}
                               title='Currency format: 00.00'/>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Week End</label>
                    <div>
                        <DateInput
                            date={props.isAfter ? props.afterFloorAdjustment.date : props.adjustment.date}
                            changeDate={props.isAfter ? ((date) => props.onEditAfterFloorDate(date)) : ((date) => props.onEditDate(date))}/>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-3'], bootStrapClasses['col-form-label']].join(' ')}>Comment</label>
                    <div>
                        <textarea className={[bootStrapClasses['form-control']]}
                                  style={{width: '300px', height: '100px'}}
                                  value={props.isAfter ? props.afterFloorAdjustment.comment : props.adjustment.comment}
                                  onChange={props.isAfter ? ((event) => props.onEditAfterFloorComment(event.target.value)) : ((event) => props.onEditComment(event.target.value))}
                        />
                    </div>
                </div>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                    <button onClick={(props.close)} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.editAdjustments.loading,
        adjustment: state.editAdjustments.currentAdjustment,
        user: state.editUsers.currentUser,
        afterFloorAdjustment: state.editAfterFloorAdjustments.currentAdjustment,
        confirming: state.editAdjustments.confirming
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddAdjustment: (adjustment) => dispatch(actions.addAdjustment(adjustment)),
        onEditComment: (comment) => dispatch(actions.editAdjustmentComment(comment)),
        onEditAmount: (amount) =>dispatch(actions.editAdjustmentAmount(amount)),
        onEditDate: (date) => dispatch(actions.editAdjustmentDate(date)),
        onAddAfterFloorAdjustment: (adjustment) => dispatch(actions.addAfterFloorAdjustment(adjustment)),
        onEditAfterFloorComment: (comment) => dispatch(actions.editAfterFloorAdjustmentComment(comment)),
        onEditAfterFloorAmount: (amount) => dispatch(actions.editAfterFloorAdjustmentAmount(amount)),
        onEditAfterFloorDate: (date) => dispatch(actions.editAfterFloorAdjustmentDate(date)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(adjustmentForm);