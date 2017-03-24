/* eslint-disable */
import styles from './ParkifyTable.scss';
import React, {PropTypes} from 'react';

class ParkifyTable extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 0
        };
        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.renderTableFooter = this.renderTableFooter.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    render() {
        let items = [], tableHeader, tableFooter, tableWidth;
        if (this.props.items) {
            const startFromIndex = this.props.limit ? this.state.currentPage * this.props.limit : this.state.currentPage;
            const endFromIndex = this.props.limit ? startFromIndex + this.props.limit : this.props.items.length;

            for (let i = startFromIndex, len = endFromIndex; i < len; i++) {
                items.push(this.renderRow(this.props.items[i], i));
            }
        }
        if (this.props.tableHeader) {
            tableHeader = this.renderTableHeader(this.props.tableHeader);
        }
        if (this.props.columnWidth) {
            tableWidth = this.props.columnWidth.reduce((prev, next) => {
                return prev + next;
            }, 0);
        }
        if(this.props.limit && this.props.items) {
            if (this.props.limit < this.props.items.length) {
                tableFooter = this.renderTableFooter(this.props.limit, this.props.items.length, tableWidth);
            }
        }

        return (
            <div className="parkify-table">
                {this.props.header && <p className="hidden-print">{this.props.header}</p>}
                {this.props.printHeader && <p className="parkify-period visible-print">{this.props.printHeader}</p>}
                <table style={{width: tableWidth ? tableWidth + '%' : 'auto', margin: 'auto'}}>
                    <thead>
                    {tableHeader}
                    </thead>
                    <tbody>
                    {items}
                    </tbody>
                </table>
                {tableFooter}
            </div>
        );
    }

    changePage(pageNumber) {
        const self = this;
        return () => {
            self.setState({currentPage: pageNumber});
        }
    }

    renderTableHeader(items) {
        const keys = [];
        for (let i = 0, len = items.length; i < len; i++) {
            keys.push(<th key={'headerCol' + items[i]} style={{width: this.props.columnWidth[i] + '%'}}>{items[i]}</th>)
        }
        return (
            <tr>
                {keys}
            </tr>
        );
    }

    renderTableFooter(limit, itemsLength, tableWidth) {
        const keys = [];
        const pages = itemsLength / limit;
        for (let i = 0, len = pages; i < len; i++) {
            keys.push(<li key={'footerPage' + (i + 1)} onClick={this.changePage(i)}>{i + 1}</li>)
        }
        return (
            <ul style={{width: tableWidth ? tableWidth + '%' : 'auto'}}>
                {keys}
            </ul>
        );
    }

    onClick(item) {
        const self = this;
        return () => {
            if(self.props.onClick) {
                self.props.onClick(item);
            }
        }
    }

    renderRow(item, index) {
        const keys = [];
        let i = 0;
        for (let key in item) {
            if(this.props.skipFields && this.props.skipFields.indexOf(key) === 0) {
                continue;
            }
            if (item.hasOwnProperty(key)) {
                keys.push(<td key={item[this.props.id] + item[key]} style={{width: this.props.columnWidth[i] + '%'}}>{item[key]}</td>)
                i++;
            }
        }
        return (
            <tr key={index} onClick={this.onClick(item)}>
                {keys}
            </tr>
        );
    }
}

ParkifyTable.propTypes = {
    items: PropTypes.array,
    skipFields: PropTypes.array,
    columnWidth: PropTypes.array,
    header: PropTypes.string,
    printHeader: PropTypes.string,
    tableHeader: PropTypes.array,
    limit: PropTypes.number,
    onClick: PropTypes.func,
    id: PropTypes.string
};

export default ParkifyTable;