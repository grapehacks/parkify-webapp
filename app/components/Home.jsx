import React from 'react';
import ParkifySubscribeButton from '../containers/ParkifySubscribeButton'
import NextDrawDate from '../containers/NextDrawDate';
import RemovalWarning from '../containers/RemovalWarning';
import ParkifySubscribeStatusLabel from '../containers/ParkifySubscribeStatusLabel';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <RemovalWarning />
                <ParkifySubscribeButton/>
                <NextDrawDate />
                <ParkifySubscribeStatusLabel/>
            </div>
        )
    }
}

export default Home;