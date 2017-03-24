/* eslint-disable */
import styles from './ManageUsers.scss';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ParkifyTable from './ParkifyTable';
import SearchSelect from '../components/SearchSelect';
import {searchUsers, fetchUsers, deleteUser, createUser, updateUser, clearMessages} from '../redux/actions/manageUsersActions';

class ManageUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: '',
            name: '',
            email: '',
            licenceNumber: '',
            removed: false,
            search: ''
        };
        this.onTableItemClick = this.onTableItemClick.bind(this);
        this.onUserSelected = this.onUserSelected.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.timeout = null;
    }

    componentWillMount() {
        this.props.handleGetUsers();
    }

    onChange(event) {
        var field = event.target.name;
        var value = event.target.value;
        const temp = Object.assign({}, this.state);
        temp[field] = value;

        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onSearchChange(value) {
        // todo remove
        console.log(value);

        const temp = Object.assign({}, this.state);
        temp['search'] = value;
        this.props.handleSearch();
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onUserSelected(userId) {
        const user = this.props.users.filter((user) => user._id === userId);
        if(user) {
            this.onTableItemClick(user);
        }
    }

    onTableItemClick(item) {
        const temp = Object.assign({}, this.state);
        temp._id = item._id;
        temp.name = item.name;
        temp.email = item.email;
        temp.licenceNumber = item.licenceNumber;
        temp.removed = item.removed;
        this.props.handleClearMessages();
        return this.setState(temp);
    }

    onDeleteClick() {
        this.props.handleDelete(this.state._id);
    }

    onSaveClick() {
        this.props.handleSave(this.state);
    }

    onClearClick() {
        const temp = Object.assign({}, this.state, {
            _id: '',
            name: '',
            email: '',
            licenceNumber: '',
            search: ''
        });
        return this.setState(temp);
    }

    onCheckboxChange(event) {
        const temp = Object.assign({}, this.state);
        temp.removed = !this.state.removed;
        return this.setState(temp);
    }

    render() {
        const tableHeader = ['Name', 'Email', 'Licence number', 'Removed'];
        const columnWidth = [30, 20, 25, 10];
        const skipFields = ['_id'];
        const limit = 10;
        const users = [];
        const showItems = false; // todo
        if(this.props.users) {
            this.props.users.map((item) => {
                users.push({
                    _id: item._id,
                    name: item.name,
                    email: item.email,
                    licenceNumber: item.licenceNumber,
                    removed: item.removed ? 'Yes' : 'No'
                });
            });
        }
        if(this.props.success || this.props.error) {
            this.state = {
                _id: '',
                name: '',
                email: '',
                licenceNumber: '',
                search: '',
                removed: this.state.removed
            };
        }

        return (
            <div className="content">
                <div className="manage-users">
                    <p className="manage-users-title">Manage Users</p>

                    <div className="manage-users__form">
                        <span>Search user:</span>
                        <SearchSelect
                            items={users}
                            keyField={'_id'}
                            valueField={'name'}
                            showItems={showItems}
                            onSelected={this.onUserSelected}
                            textChange={this.onSearchChange}
                            timeout={2000}/>

                        <span>User name:</span>
                        <input type="text" name="name" placeholder="Enter user name" onChange={this.onChange} value={this.state.name}/>
                        <span>Email:</span>
                        <input type="text" name="email" placeholder="Enter email address" onChange={this.onChange} value={this.state.email}/>
                        <span>Licence number:</span>
                        <input type="text" name="licenceNumber" placeholder="Enter licence number" onChange={this.onChange} value={this.state.licenceNumber}/>
                        <div style={{display: 'flex', margin: '5px 0'}}>
                            <span style={{marginRight: '10px'}}>Removed:</span>
                            <div className="checkbox">
                                <input type="checkbox" id="cb" name="removed"/>
                                <label htmlFor="cb" onClick={this.onCheckboxChange}></label>
                            </div>
                        </div>
                        <div style={{display: 'flex', margin: '5px 0', width: '100%', justifyContent: 'space-between'}}>
                            <button className="subscribe-btn" onClick={this.onSaveClick} >Save</button>
                            {this.state._id && <button className="subscribe-btn" onClick={this.onDeleteClick} >Delete</button>}
                        </div>
                        <button className="subscribe-btn" onClick={this.onClearClick}>Clear</button>
                        <div style={{display: 'flex', margin: '5px 0', width: '100%', justifyContent: 'space-between'}}>
                            {this.props.success && <span style={{color: '#7dca84'}}>{this.props.success}</span>}
                            {this.props.error && <span style={{color: '#a94442'}}>{this.props.error}</span>}
                        </div>
                    </div>
                    <div className="manage-users__table">
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
        handleDelete: (_id) => {
            dispatch(deleteUser({_id}));
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