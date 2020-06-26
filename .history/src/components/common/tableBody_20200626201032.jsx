import React, { Component } from 'react'
import _ from 'lodash';

class TableBody extends Component {
    

    render() { 
            const {data,columns} = this.props

        return (
            <tbody>
            {data.map(item => 
                <tr>
                    {columns.map(column => <td>{_.get(item,)}</td>)}
                </tr>
            )}
           
        </tbody>
    )}
}
 
export default TableBody;
