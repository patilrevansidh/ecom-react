import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard {this.props.tempReducer.isWorking}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        demoAction: dispatchEvent(() => { dispatchEvent({ type: 'DEMO' }) })
    }
}

const mapStateToProps = (state) => {
    return {
        tempReducer: state.tempReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);