import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const editEmployeeForm = (props) =>{
    return(
        <div>
            <form>
                <h1 style={{textAlign: 'center'}}>Edit Employee</h1>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.ADID} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>File Number</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.FileNumber} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>AS-400 ID</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control']} placeholder={props.user.AS400ID} />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Weekly Base</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.Base} readOnly/>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Flight</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control']}/>
                    </div>
                </div>
            </form>
            <div className={bootStrapClasses['col-sm-12']}>
                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                <button onClick={props.close} className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')}
                style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
            </div>
        </div>
    )
}

export default editEmployeeForm;