import React from 'react';
import ParkifySubscribeButton from '../containers/ParkifySubscribeButton'
import NextDrawDate from '../containers/NextDrawDate';
import ParkifySubscribeStatusLabel from '../containers/ParkifySubscribeStatusLabel';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <ParkifySubscribeButton/>
                <NextDrawDate />
                <ParkifySubscribeStatusLabel/>
            </div>
        )
    }
}

export default Home;