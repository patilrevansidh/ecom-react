import React from 'react';
import { EcomPureComponent } from '../EcomPureComponent';
import { connect } from 'react-redux';
import { handleAuthModal } from '../../actions/authAction';

class AuthMenuHeader extends EcomPureComponent {

    handleAuthClick = (e) => {
        const showAuthModal = true;
        const isSignInForm = e.target.id === 'sign'
        this.props.handleAuthModal({ isSignInForm, showAuthModal })
    }

    render() {
        return (
            <div className="bg-auth-header sub-header">
                Hi!,
                {this.props.profile.isLoggedIn
                    && this.props.profile.user && <div className="highlight-header"> {this.props.profile.user.name} </div>
                    || <React.Fragment>
                        <div id="sign" onClick={this.handleAuthClick} className="highlight-header"> Sign </div>
                        or
                        <div id="register" onClick={this.handleAuthClick} className="highlight-header"> Register </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleAuthModal: (payload) => { dispatchEvent(handleAuthModal(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenuHeader);