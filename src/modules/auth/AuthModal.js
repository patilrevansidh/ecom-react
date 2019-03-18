import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAuthModal } from '../../common/actions/authAction';
import { SignInForm, SignUpForm } from './AuthForms';
import './auth.scss'

class AuthModal extends EcomPureComponent {
    state = this.getInitialState();

    getInitialState() {
        return {
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClose = () => {
        this.props.handleAuthModal({ showAuthModal: false })
    }

    handleSubmit = () => {
        if (this.props.profile.isSignInForm) console.log("SignIn Press"); return;
        console.log("Sign Up Press"); return;
    }

    render() {
        return (
            <div className="auth-container">
                < Modal.Dialog >
                    <Modal.Header onHide={this.handleClose} closeButton>
                        <Modal.Title>{this.props.profile.isSignInForm && "Sign In" || "Sign Up"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.profile.isSignInForm
                            && <Form >
                                <SignInForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            </Form>
                            || <Form>
                                <SignUpForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            </Form>
                        }
                    </Modal.Body>
                </Modal.Dialog >
            </div>
        );
    }
}
function mapDispatchToProps(dispatchEvent) {
    return { handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) } }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);