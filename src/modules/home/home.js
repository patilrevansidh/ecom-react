import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HTTPService } from '../../common/services/HttpService';

class Home extends Component {

    componentWillMount() {
        HTTPService.get('departments')
            .then(response => console.log('Response', response))
            .catch(err => console.log('Error', err))
    }

    render() {
        return (
            <div>
                Home {this.props.tempReducer.isWorking}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempReducer: state.tempReducer
    }
}

export default connect(mapStateToProps)(Home);