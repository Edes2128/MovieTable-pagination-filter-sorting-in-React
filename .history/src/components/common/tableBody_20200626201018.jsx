import React, { Component } from 'react'
import _ from 'lodash';

class TableBody extends Component {
    

    render() { 
            const {data,columns} = this.props

        return (
            <tbody>
            {data.map(item => 
                <tr>
                    {columns.map(column => <td>{_get}</td>)}
                </tr>
            )}
           
        </tbody>
    )}
}
 
export default TableBody;
