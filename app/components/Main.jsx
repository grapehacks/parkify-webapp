import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        return (
            <div className="gp-main container">
                <Header />
                <div className="container gp-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object,
    handleMount: React.PropTypes.func
};

export default Main;