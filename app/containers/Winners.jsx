import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
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

    render() {
        return (
            <div className="content">
                {this.props.error && this.renderFetchError()}
                <WinnersTable winners={this.props.winners}/>
            </div>
        );
    }
}

Winners.propTypes = {
    fetchWinners: PropTypes.func.isRequired,
    winners: PropTypes.array,
    error: PropTypes.string.isRequired
};


const mapStateToProps = (state) => {
    const props = {
        winners: state.history.lastDraw.winners,
        error: state.history.error
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