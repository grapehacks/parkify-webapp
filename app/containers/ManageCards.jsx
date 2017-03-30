/* eslint-disable */
import styles from './Manage.scss';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ParkifyTable from './ParkifyTable';
import SearchSelect from '../components/SearchSelect';
import {searchCards, fetchCards, deleteCard, createCard, updateCard, clearMessages} from '../redux/actions/manageCardsActions';

class ManageCards extends React.Component {
    constructor() {
        super();
        this.getClearState = this.getClearState.bind(this);
        this.state = this.getClearState();
        this.onTableItemClick = this.onTableItemClick.bind(this);
        this.onCardSelected = this.onCardSelected.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.getCardsArray = this.getCardsArray.bind(this);
        this.onActiveChange = this.onActiveChange.bind(this);
        this.onRemovedChange = this.onRemovedChange.bind(this);
        this.timeout = null;
    }

    getClearState() {
        return {
            _id: '',
            name: '',
            type: '',
            removed: false,
            active: false
        };
    }

    componentWillMount() {
        this.props.handleGetCards();
    }

    onChange(event) {
        var field = event.target.name;
        var value = event.target.value;
        const temp = Object.assign({}, this.state);
        temp[field] = value;

        if(field === 'search') {
            // debounce for search
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if(value) {
                    this.props.handleSearch(value)
                } else {
                    this.props.handleGetCards();
                }
            }, 1500); // 1.5 sec
        }

        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onActiveChange() {
        const temp = Object.assign({}, this.state);
        temp.active = !this.state.active;
        return this.setState(temp);
    }

    onRemovedChange() {
        const temp = Object.assign({}, this.state);
        temp.removed = !this.state.removed;
        return this.setState(temp);
    }

    onSearchChange(value) {
        const temp = Object.assign({}, this.state);
        temp['search'] = value;
        this.props.handleSearch(value);
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onCardSelected(cardId) {
        const card = this.props.searchCards.filter((card) => card._id === cardId)[0];
        if(card) {
            this.onTableItemClick(card);
        }
    }

    onTableItemClick(item) {
        const temp = Object.assign({}, this.state);
        const cardsArray = this.getCardsArray();
        const card = cardsArray.filter((card) => card._id === item._id)[0];
        temp._id = card._id;
        temp.name = card.name;
        temp.type = card.type;
        temp.removed = card.removed;
        temp.active = card.active;
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onSaveClick() {
        this.props.handleSave(this.state);
    }

    onClearClick() {
        this.props.handleGetCards();
        const temp = Object.assign({}, this.state, this.getClearState());
        return this.setState(temp);
    }

    getCardsArray() {
        return this.props.cards && this.props.cards.length ? this.props.cards : this.props.searchCards;
    }

    render() {
        const tableHeader = ['Name', 'Type', 'Active', 'Removed'];
        const columnWidth = [30, 20, 10, 10];
        const skipFields = ['_id'];
        const limit = 10;
        const cards = [];
        const searchCards = [];
        const cardsArray = this.getCardsArray();
        if(cardsArray) {
            cardsArray.map((card) => {
                cards.push({
                    _id: card._id,
                    name: card.name,
                    type: card.type,
                    active: card.active ? 'Yes' : 'No',
                    removed: card.removed ? 'Yes' : 'No'
                });
            });
        }
        if(this.props.searchCards && this.props.searchCards.length) {
            this.props.searchCards.map((card) => {
                searchCards.push({
                    _id: card._id,
                    name: card.name,
                    type: card.type,
                    active: card.active ? 'Yes' : 'No',
                    removed: card.removed ? 'Yes' : 'No'
                });
            });
        }

        if(this.props.success || this.props.error) {
            this.state = this.getClearState();
        }

        return (
            <div className="content">
                <div className="manage">
                    <p className="manage-title">Manage Cards</p>

                    <div className="manage__form">
                        <span>Search card:</span>
                        <SearchSelect
                            items={searchCards}
                            keyField={'_id'}
                            valueField={'name'}
                            onSelected={this.onCardSelected}
                            onTextChange={this.onChange} />

                        <span>Card name:</span>
                        <input type="text" name="name" placeholder="Enter card name" onChange={this.onChange} value={this.state.name}/>
                        <span>Type:</span>
                        <input type="text" name="type" placeholder="Enter card type" onChange={this.onChange} value={this.state.type}/>
                        <div style={{display: 'flex', margin: '5px 0'}}>
                            <span style={{marginRight: '10px'}}>Active:</span>
                            <div className="checkbox">
                                <input type="checkbox" id="cbActive" name="active" checked={this.state.active}/>
                                <label htmlFor="cbActive" onClick={this.onActiveChange}></label>
                            </div>
                        </div>
                        <div style={{display: 'flex', margin: '5px 0'}}>
                            <span style={{marginRight: '10px'}}>Removed from draw:</span>
                            <div className="checkbox">
                                <input type="checkbox" id="cbRemoved" name="removed" checked={this.state.removed}/>
                                <label htmlFor="cbRemoved" onClick={this.onRemovedChange}></label>
                            </div>
                        </div>
                        <div style={{display: 'flex', margin: '5px 0', width: '100%', justifyContent: 'space-between'}}>
                            <button className="ui-btn" onClick={this.onSaveClick}>{this.state._id ? 'Update': 'Create'}</button>
                        </div>
                        <button className="ui-btn" onClick={this.onClearClick}>Clear</button>
                        <div style={{display: 'flex', margin: '5px 0', width: '100%', justifyContent: 'space-between'}}>
                            {this.props.success && <span style={{color: '#7dca84'}}>{this.props.success}</span>}
                            {this.props.error && <span style={{color: '#a94442'}}>{this.props.error}</span>}
                        </div>
                    </div>
                    <div className="manage__table">
                        <ParkifyTable
                            items={cards}
                            skipFields={skipFields}
                            columnWidth={columnWidth}
                            tableHeader={tableHeader}
                            onClick={this.onTableItemClick}
                            limit={limit}
                            id={'_id'}/>
                    </div>
                </div>
            </div>
        );
    }
}

ManageCards.propTypes = {
    cards: PropTypes.array,
    error: PropTypes.string
};

const mapStateToProps = (state) => {
    const props = {
        cards: state.manageCards.cards,
        searchCards: state.manageCards.searchCards,
        error: state.manageCards.error,
        success: state.manageCards.success
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (name) => {
            dispatch(searchCards({name}));
        },
        handleSave: (card) => {
            if(card._id) {
                dispatch(updateCard({card}));
            } else {
                dispatch(createCard({card}));
            }
        },
        handleGetCards: () => {
            dispatch(fetchCards());
        },
        handleClearMessages: () => {
            dispatch(clearMessages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCards);