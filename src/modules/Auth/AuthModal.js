import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Form } from 'react-bootstrap';
import { SignInForm, SignUpForm } from './AuthForms';
import { connect } from 'react-redux';
import { handleAuthModal, handleCustomerSignIn, handleCustomerSignUp } from '../../common/actions/authAction';
import { ValidationHelper } from '../../common/services/helper/validation';
import { VALIDATION_ERRORS } from '../../common/constants/stringConstants';
import './auth.scss';

class AuthModal extends EcomPureComponent {
    state = this.getInitialState();

    getInitialState() {
        return {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
            error: null,
            isLoading: false
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
            this.setState({ error: { email, password } });
            return false;
        }
        const name = ValidationHelper.isEmptyString(this.state.name) && VALIDATION_ERRORS.EMPTY || null;
        const matchError = !ValidationHelper.isEmptyString(this.state.confirmPassword) && this.state.password === this.state.confirmPassword ? null : VALIDATION_ERRORS.PASSWORD_MATCH;
        const error = { email, password, name, matchError }
        if (!email && !password && !name && !matchError) { this.setState({ error: null }); return true };
        this.setState({ error });

    }

    handleSignIn = () => {
        const { email, password } = this.state;
        this.props.handleCustomerSignIn({ email, password })
    }

    handleSignUp = () => {
        const { name, email, password } = this.state;
        this.props.handleCustomerSignUp({ name, email, password })
    }

    handleSubmit = (e, data) => {
        if (this.isValidForm()) {
            if (this.props.profile.isSignInForm) {
                this.handleSignIn();
                return;
            }
            this.handleSignUp()
        }
    }

    render() {
        return (
            <div className="auth-container">
                <Modal size='lg'  show={this.props.profile.showAuthModal} onHide={this.handleClose} >
                    <Modal.Header onHide={this.handleClose} closeButton>
                        <Modal.Title>{this.props.profile.isSignInForm && "Sign In" || "Sign Up"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="shopmate-auth-form" onSubmit={this.handleSubmit}>
                            {this.props.profile.isSignInForm
                                && <SignInForm
                                    isLoading={this.state.isLoading}
                                    error={this.state.error}
                                    handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

                                || <SignUpForm
                                    isLoading={this.state.isLoading}
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
    return {
        handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) },
        handleCustomerSignIn: (formData) => { dispatchEvent(handleCustomerSignIn(formData)) },
        handleCustomerSignUp: (formData) => { dispatchEvent(handleCustomerSignUp(formData)) }
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);