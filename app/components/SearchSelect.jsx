/* eslint-disable */
import styles from './SearchSelect.scss';
import React, {PropTypes} from 'react';

class SearchSelect extends React.Component {
    constructor() {
        super();
        this.renderUserNames = this.renderUserNames.bind(this);
        this.onSelected = this.onSelected.bind(this);
    }

    componentDidUpdate() {
    }

    onSelected(event) {
        if(this.props.onSelected) {
            this.props.onSelected(event.target.value);
        }
    }

    render() {
        return (
            <div className="select-editable">
                <select id="search-select" onChange={this.onSelected}> {/*this.nextElementSibling.value=this.value*/}
                    <option value=""></option>
                    {this.props.showItems && this.props.items && this.renderUserNames(this.props.items)}
                </select>
                <input type="text" name="search" placeholder="Search" onChange={this.props.onTextChange} value={this.props.search}/>
            </div>
        );
    }
    
    renderUserNames(items) {
        return items.map((item, index) => {
            if(this.props.limit && this.props.limit > index) {
                return;
            }
            return <option key={item[this.props.keyField]} value={item[this.props.keyField]}>{item[this.props.valueField]}</option>;
        });
    }
}

SearchSelect.propTypes = {
    items: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    onSelected: PropTypes.func,
    onTextChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    limit: PropTypes.number,
    showItems: PropTypes.bool
};

export default SearchSelect;