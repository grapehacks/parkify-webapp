/* eslint-disable */
import styles from './SearchSelect.scss';
import React, {PropTypes} from 'react';

class SearchSelect extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.renderValues = this.renderValues.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onDropDownClick = this.onDropDownClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getInitialState() {
        return {
            search: '',
            isOpenDropDown: true
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    onClearClick() {
        // fake clear event
        this.props.onTextChange({target: {name: 'search', value: ''}});
        this.setState(this.getInitialState())
    }

    onDropDownClick() {
        this.setState(Object.assign({}, this.state, {isOpenDropDown: !this.state.isOpenDropDown}));
    }

    onItemClick(item) {
        const value = item[this.props.valueField];
        return (event) => {
            this.props.onSelected(item[this.props.keyField]);
            this.setState({isOpenDropDown: !this.state.isOpenDropDown})
        };
    }

    onChange(event) {
        this.props.onTextChange(event);
        var field = event.target.name;
        var value = event.target.value;
        const temp = Object.assign({}, this.state);
        temp[field] = value;
        this.setState(temp);
    }

    render() {
        return (
            <div className="select-editable">
                <div className="select-editable__field">
                    <input type="text" name="search" placeholder="Search" onChange={this.onChange} value={this.state.search}/>
                    {!!(this.props.items && this.props.items.length) && <span className="clear-btn" onClick={this.onClearClick}>x</span>}
                    {!!(this.props.items && this.props.items.length) && <div className="drop-down-btn" onClick={this.onDropDownClick}><span className={this.state.isOpenDropDown ? 'up' : 'down'}></span></div>}
                </div>
                {!!(this.props.items && this.props.items.length) &&
                    <div className={'select-editable__drop-down ' + (this.state.isOpenDropDown ? 'show-drop-down' : 'hide-drop-down')}>
                        <ul>
                            {this.renderValues(this.props.items)}
                        </ul>
                    </div>
                }
            </div>
        );
    }

    renderValues(items) {
        return items.map((item, index) => {
            if(this.props.limit && this.props.limit > index) {
                return;
            }
            return <li key={item[this.props.keyField]} onClick={this.onItemClick(item)}>{item[this.props.valueField]}</li>;
        });
    }
}

SearchSelect.propTypes = {
    items: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    onSelected: PropTypes.func,
    onTextChange: PropTypes.func.isRequired,
    limit: PropTypes.number
};

export default SearchSelect;