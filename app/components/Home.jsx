import React from 'react';
import SubscriptionButton from './SubscriptionButton';
import NextDrawDate from './NextDrawDate';
import SubscriptionStatusLabel from './SubscriptionStatusLabel';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <SubscriptionButton subscribe={true} alwaysSubscribe={true}/>
                <NextDrawDate date='28-13-2016'/>
                <SubscriptionStatusLabel/>
            </div>
        )
    }
}

export default Home;