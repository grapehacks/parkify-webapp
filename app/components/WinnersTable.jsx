/* eslint-disable */
import styles from './WinnersTable.scss';
import React, {PropTypes} from 'react';

const WinnersTable = (props) => {
    let winners = [];
    if(props.winners) {
        winners = props.winners.map((winner, index) => {
            return renderWinnerRow(winner, index);
        });
    }

    return (
        <div className="winners-table">
            <p className="hidden-print">Winners</p>
            <p className="winners-period visible-print">{'Winners for period: ' + props.drawRange}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Licence number</th>
                        <th>Card</th>
                    </tr>
                </thead>
                <tbody>
                    {winners}
                </tbody>
            </table>
        </div>
    );

    function renderWinnerRow(winner, index) {
        return (
            <tr key={index}>
                <td>{winner.user.name}</td>
                <td>{winner.user.email}</td>
                <td>{winner.user.licenceNumber}</td>
                <td>{winner.card.name}</td>
            </tr>
        );
    }

};

WinnersTable.propTypes = {
    winners: PropTypes.array,
    drawRange: PropTypes.string
};

export default WinnersTable;