import Main from './../components/Main';
import {ping} from './../redux/actions/authActions';
import { connect } from 'react-redux'

const mapStateToProps = () => {
    return {

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