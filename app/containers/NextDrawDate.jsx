import { connect } from 'react-redux'
import DrawDate from '../components/DrawDate.jsx'

const mapStateToProps = (state) => {
    let date = state.auth.date ? new Date(state.auth.date).toLocaleDateString() : 'Unknown';
    return {
        date: date
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