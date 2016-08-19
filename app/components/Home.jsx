import React from 'react';
import SubscriptionButton from './SubscriptionButton';
import NextDrawDate from './NextDrawDate';
import SubscriptionStatusLabel from './SubscriptionStatusLabel';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <SubscriptionButton/>
                <NextDrawDate/>
                <SubscriptionStatusLabel/>
            </div>
        )
    }
}

export default Home;