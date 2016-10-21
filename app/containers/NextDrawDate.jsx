import { connect } from 'react-redux'
import DrawDate from '../components/DrawDate.jsx'

const mapStateToProps = (state) => {
    let date = state.auth.date ? new Date(state.auth.date).toLocaleDateString() : 'Unknown';
    let time = state.auth.date ? new Date(state.auth.date).toLocaleTimeString() : '-';
    return {
        date: date,
        time: time
    }
};

const mapDispatchToProps = () => {
    return {
    }
};

const NextDrawDate = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawDate);


export default NextDrawDate;