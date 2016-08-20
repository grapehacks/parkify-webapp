import React from 'react';

class ModalUnsubscribe extends React.Component {
    render() {
        const modalClass = this.props.visible ? 'confirmation modalDecline' : 'confirmation modalDecline dn';

        return (
            <div className={modalClass}>
                <div className="container">
                    <div className="menu">
                        <div className="logo pull-left"></div>
                    </div>
                    <p>Are you sure you want tu unsubscribe from the parking card lottery list?</p>
                    <div className="buttons">
                        <div onClick={(e) => {e.stopPropagation(); this.props.onClose()}} className="button pull-left">No</div>
                        <div onClick={(e) => {e.stopPropagation(); this.props.onConfirm()}} className="button yes pull-right">Yes</div>
                    </div>
                </div>
            </div>
        )
    }
}

ModalUnsubscribe.propTypes = {
    visible: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    onConfirm: React.PropTypes.func
};

export default ModalUnsubscribe;