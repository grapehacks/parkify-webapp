import Main from './../components/Main';
import {ping} from './../redux/actions/authActions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () =>{
            dispatch(ping());
        }
    }
};

const RefreshableMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);


export default RefreshableMain;