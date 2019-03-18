import React from 'react';
import { EcomPureComponent } from '../EcomPureComponent';
import { connect } from 'react-redux';
import { handleAuthModal } from '../../actions/authAction';

class AuthMenuHeader extends EcomPureComponent {

    handleAuthClick = (e) => {
        this.props.handleAuthModal(true)
    }

    render() {
        return (
            <div className="bg-auth-header sub-header"> Hi!, <div id="sign" onClick={this.handleAuthClick} className="highlight-header"> Sign </div> or <div id="register" onClick={this.handleAuthClick} className="highlight-header"> Register </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) }
    }
}

export default connect(null, mapDispatchToProps)(AuthMenuHeader);