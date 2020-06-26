import React, { Component } from 'react'
class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        }else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }
    renderSortIcon = column => {
        if(column.path !== this.props.sortColumn.path) return null;

        if(this.props.sortColumn.order === 'asc') return i.fa

    }

    render() { 
        return <thead>
            <tr>
                {this.props.columns.map(column => <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label}{this.renderSortIcon()}</th> )}
            </tr>
        </thead>;
    }
}
export default TableHeader;
