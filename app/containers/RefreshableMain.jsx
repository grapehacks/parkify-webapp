import Main from './../components/Main';
import { connect } from 'react-redux'

const mapStateToProps = () => {
    return {

    };
};

const mapDispatchToProps = () => {
    return {
        handleMount: () =>{
        }
    }
};

const RefreshableMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);


export default RefreshableMain;