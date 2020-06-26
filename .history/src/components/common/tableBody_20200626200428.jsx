import React, { Component } from 'react'


class TableBody extends Component {
    

    render() { 
            const {data} = this.props

        return (
            <tbody>
            {data.map()}
            <tr>
                <td></td>
            </tr>
        </tbody>
    )}
}
 
export default TableBody;