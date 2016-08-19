import React from 'react';

class BadgedIcon extends React.Component {
    render() {
        const counter = this.props.counter;
        const counterClass = this.props.counter ?  'notification  on' : 'notification on hide';

        return (
            <i className="fa fa-commenting" aria-hidden="true">
                <div className={counterClass}>{counter}</div>
            </i>
        )
    }
}

BadgedIcon.propTypes = {
    counter: React.PropTypes.number
};

export default BadgedIcon;