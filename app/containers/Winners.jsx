import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DateUtils from '../common/DateUtils';
import {fetchLastDraw} from '../redux/actions/historyActions';
import ParkifyTable from './ParkifyTable';

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
        const tableHeader = ['Name', 'Email', 'Licence number', 'Card'];
        const columnWidth = [40, 30, 20, 10];
        const limit = 10;
        const winners = [];
        if(this.props.winners) {
            this.props.winners.map((item) => {
                winners.push({
                    _id: item.user._id,
                    name: item.user.name,
                    email: item.user.email,
                    licenceNumber: item.user.licenceNumber,
                    card: item.card.name
                });
            });
        }
        return (
            <div className="content">
                {this.props.error && this.renderFetchError()}
                <ParkifyTable
                    items={winners}
                    columnWidth={columnWidth}
                    header={'Winners'}
                    printHeader={'Winners for period: ' + this.makeDrawRange(this.props.drawDate)}
                    tableHeader={tableHeader}
                    limit={limit}
                    skipFields={['_id']}
                    id={'_id'}/>
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