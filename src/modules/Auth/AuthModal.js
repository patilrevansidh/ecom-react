import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Form } from 'react-bootstrap';
import { SignInForm, SignUpForm } from './AuthForms';
import { connect } from 'react-redux';
import { handleAuthModal } from '../../common/actions/authAction';
import { ValidationHelper } from '../../common/services/helper/validation';
import './auth.scss'
import { VALIDATION_ERRORS } from '../../common/constants/stringConstants';

class AuthModal extends EcomPureComponent {
    state = this.getInitialState();

    getInitialState() {
        return {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
            error: null
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClose = () => {
        this.props.handleAuthModal({ showAuthModal: false })
    }

    isValidForm() {
        const email = ValidationHelper.isValidEmail(this.state.email) ? null : VALIDATION_ERRORS.EMAIL;
        const password = ValidationHelper.isEmptyString(this.state.password) ? VALIDATION_ERRORS.PASSWORD : null;

        if (this.props.profile.isSignInForm) {
            if (!email && !password) { this.setState({ error: null }); return true };;
            const error = { email, password };
            console.log("Error", error)
            this.setState({ error: { email, password } });
            return false;
        }
        const name = ValidationHelper.isEmptyString(this.state.name) && VALIDATION_ERRORS.EMPTY || null;
        const matchError = !ValidationHelper.isEmptyString(this.state.confirmPassword) && this.state.password === this.state.confirmPassword ? null : VALIDATION_ERRORS.PASSWORD_MATCH;
        const error = { email, password, name, matchError }
        if (!email && !password && !name && !matchError) { this.setState({ error: null }); return true };
        this.setState({ error });

    }

    handleSubmit = () => {
        if (this.isValidForm()) {
            console.log('Valid')
        }
    }

    render() {
        return (
            <div className="auth-container">
                <Modal show={this.props.profile.showAuthModal} onHide={this.handleClose} >
                    <Modal.Header onHide={this.handleClose} closeButton>
                        <Modal.Title>{this.props.profile.isSignInForm && "Sign In" || "Sign Up"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="shopmate-auth-form">
                            {this.props.profile.isSignInForm
                                && <SignInForm
                                    error={this.state.error}
                                    handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

                                || <SignUpForm
                                    error={this.state.error}
                                    handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            }
                        </Form>
                    </Modal.Body>
                </Modal >
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