/* eslint-disable */
import styles from './LogoutModal.scss';
import React, {PropTypes} from 'react';

const LogoutModal = (props) => {
    const subscribe = props.auth.user.participate === 1;
    let modalContainerHeaderClassName = 'modal__container__header ';
    modalContainerHeaderClassName += subscribe ? 'subscribe' : 'unsubscribe';
    let modalBtnClassName = subscribe ? 'subscribe-btn' : 'unsubscribe-btn';

    return (
        <div className="modal">
            <div className="modal__container">
                <div className={modalContainerHeaderClassName}>
                    <span>Do you really want to logout?</span>
                </div>
                <div className='modal__container__body'>
                    <button className={modalBtnClassName} onClick={props.onLogout}>Ok</button>
                    <button className={modalBtnClassName} onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

LogoutModal.propTypes = {
    auth: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default LogoutModal;