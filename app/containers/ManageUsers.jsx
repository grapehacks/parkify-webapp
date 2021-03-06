/* eslint-disable */
import styles from './Manage.scss';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ParkifyTable from './ParkifyTable';
import SearchSelect from '../components/SearchSelect';
import {searchUsers, fetchUsers, deleteUser, createUser, updateUser, clearMessages} from '../redux/actions/manageUsersActions';

class ManageUsers extends React.Component {
    constructor() {
        super();
        this.getClearState = this.getClearState.bind(this);
        this.state = this.getClearState();
        this.onTableItemClick = this.onTableItemClick.bind(this);
        this.onUserSelected = this.onUserSelected.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.getUsersArray = this.getUsersArray.bind(this);
        this.timeout = null;
    }

    getClearState() {
        return {
            _id: '',
            name: '',
            email: '',
            licenceNumber: '',
            search: '',
            removed: false
        };
    }

    componentWillMount() {
        this.props.handleGetUsers();
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
                    this.props.handleGetUsers();
                }
            }, 1500); // 1.5 sec
        }

        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onSearchChange(value) {
        const temp = Object.assign({}, this.state);
        temp['search'] = value;
        this.props.handleSearch(value);
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onUserSelected(userId) {
        const user = this.props.searchUsers.filter((user) => user._id === userId)[0];
        if(user) {
            this.onTableItemClick(user);
        }
    }

    onTableItemClick(item) {
        const temp = Object.assign({}, this.state);
        const usersArray = this.getUsersArray();
        const user = usersArray.filter((user) => user._id === item._id)[0];
        temp._id = user._id;
        temp.name = user.name;
        temp.email = user.email;
        temp.licenceNumber = user.licenceNumber;
        temp.removed = user.removed;
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onSaveClick() {
        this.props.handleSave(this.state);
    }

    onClearClick() {
        this.props.handleGetUsers();
        const temp = Object.assign({}, this.state, this.getClearState());
        return this.setState(temp);
    }

    onCheckboxChange(event) {
        const temp = Object.assign({}, this.state);
        temp.removed = !this.state.removed;
        return this.setState(temp);
    }

    getUsersArray() {
        return this.props.users && this.props.users.length ? this.props.users : this.props.searchUsers;
    }

    render() {
        const tableHeader = ['Name', 'Email', 'Licence number', 'Active'];
        const columnWidth = [30, 20, 25, 10];
        const skipFields = ['_id'];
        const limit = 10;
        const users = [];
        const searchUsers = [];
        const usersArray = this.getUsersArray();
        if(usersArray) {
            usersArray.map((item) => {
                users.push({
                    _id: item._id,
                    name: item.name,
                    email: item.email,
                    licenceNumber: item.licenceNumber,
                    removed: !item.removed ? 'Yes' : 'No'
                });
            });
        }
        if(this.props.searchUsers && this.props.searchUsers.length) {
            this.props.searchUsers.map((item) => {
                searchUsers.push({
                    _id: item._id,
                    name: item.name,
                    email: item.email,
                    licenceNumber: item.licenceNumber,
                    removed: !item.removed ? 'Yes' : 'No'
                });
            });
        }

        if(this.props.success || this.props.error) {
            this.state = this.getClearState();
        }

        return (
            <div className="content">
                <div className="manage">
                    <p className="manage-title">Manage Users</p>

                    <div className="manage__form">
                        <span>Search user:</span>
                        <SearchSelect
                            items={searchUsers}
                            keyField={'_id'}
                            valueField={'name'}
                            onSelected={this.onUserSelected}
                            onTextChange={this.onChange} />

                        <span>User name:</span>
                        <input type="text" name="name" placeholder="Enter user name" onChange={this.onChange} value={this.state.name}/>
                        <span>Email:</span>
                        <input type="text" name="email" placeholder="Enter email address" onChange={this.onChange} value={this.state.email}/>
                        <span>Licence number:</span>
                        <input type="text" name="licenceNumber" placeholder="Enter licence number" onChange={this.onChange} value={this.state.licenceNumber}/>
                        <div style={{display: 'flex', margin: '5px 0'}}>
                            <span style={{marginRight: '10px'}}>Active:</span>
                            <div className="checkbox">
                                <input type="checkbox" id="cb" name="removed" checked={!this.state.removed}/>
                                <label htmlFor="cb" onClick={this.onCheckboxChange}></label>
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
                    <div className="manage__table" style={{width: '70%'}}>
                        <ParkifyTable
                            items={users}
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

ManageUsers.propTypes = {
    users: PropTypes.array,
    error: PropTypes.string
};

const mapStateToProps = (state) => {
    const props = {
        users: state.manageUsers.users,
        searchUsers: state.manageUsers.searchUsers,
        error: state.manageUsers.error,
        success: state.manageUsers.success
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (name) => {
            dispatch(searchUsers({name}));
        },
        handleSave: (user) => {
            if(user._id) {
                dispatch(updateUser({user}));
            } else {
                dispatch(createUser({user}));
            }
        },
        handleGetUsers: () => {
            dispatch(fetchUsers());
        },
        handleClearMessages: () => {
            dispatch(clearMessages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);