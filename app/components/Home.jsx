import React from 'react';
import ParkifySubscribeButton from '../containers/ParkifySubscribeButton'
import NextDrawDate from './NextDrawDate';
import ParkifySubscribeStatusLabel from '../containers/ParkifySubscribeStatusLabel';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <ParkifySubscribeButton/>
                <NextDrawDate date='28-13-2016'/>
                <ParkifySubscribeStatusLabel/>
            </div>
        )
    }
}

export default Home;