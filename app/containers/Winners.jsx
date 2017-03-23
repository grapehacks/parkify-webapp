import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DateUtils from '../common/DateUtils';
import {fetchLastDraw} from '../redux/actions/historyActions';
import WinnersTable from '../components/WinnersTable';

class Winners extends React.Component {
    componentWillMount() {
        this.props.fetchWinners();
    }

    renderFetchError() {
        return (
            <div className="alert alert-danger">Failed to fetch winners from server</div>
        );
    }

    makeDrawRange(drawDateStr) {
        const drawDate = new Date(drawDateStr);
        const dateStartStr = DateUtils.getDateString(drawDate);
        const dateEndStr = DateUtils.getDateString(DateUtils.incrementByDays(drawDate, 14));
        return dateStartStr + ' - ' + dateEndStr;
    }

    render() {
        return (
            <div className="content">
                {this.props.error && this.renderFetchError()}
                <WinnersTable winners={this.props.winners} drawRange={this.makeDrawRange(this.props.drawDate)} />
            </div>
        );
    }
}

Winners.propTypes = {
    fetchWinners: PropTypes.func.isRequired,
    winners: PropTypes.array,
    drawDate: PropTypes.string,
    error: PropTypes.string.isRequired
};


const mapStateToProps = (state) => {
    const props = {
        winners: state.history.lastDraw.winners,
        error: state.history.error,
        drawDate: state.history.lastDraw.date
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWinners: () => {
            dispatch(fetchLastDraw());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Winners);