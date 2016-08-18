import React from 'react';
import SubscribeButton from './../containers/SubscribeButton.jsx';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SubscribeButton className='sub-btn'/>
            </div>
        )
    }
}

module.exports = Home;