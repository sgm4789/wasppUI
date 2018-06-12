import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Table.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const table = (props) =>{

    return(

        <Aux>
            <h3 className={classes.TableTitle}>{props.title}</h3>
            <table className={[bootStrapClasses.table, classes.Table].join(' ')}>
                <thead style={{backgroundColor: '#4285F4'}}>
                    <tr>
                        <th>HR EmployeeID</th>
                        <th>File Number</th>
                        <th>AS400 ID</th>
                        <th>Weekly Base</th>
                        <th>Bonus Flight</th>
                    </tr>
                </thead>
                <tbody>
                    {/* dummy data */}
                    <tr>
                        <td>000000000</td>
                        <td>000000000</td>
                        <td>000000000</td>
                        <td>1000</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>000000001</td>
                        <td>000000001</td>
                        <td>000000001</td>
                        <td>1000</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </Aux>
    );
};

export default table;