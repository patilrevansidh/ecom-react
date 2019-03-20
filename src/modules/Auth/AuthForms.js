import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { LABELS } from '../../common/constants/stringConstants';


export class SignInForm extends EcomPureComponent {
    render() {
        const { error, isLoading, handleChange, handleSubmit } = this.props
        return (
            <React.Fragment>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="email" className="text-box"
                        placeholder="Email" onChange={handleChange} className={error && error.email && 'has-error' || ''}
                    />
                    {error && error.email && <div className="invalid-feedback">{error.email}</div>}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="password" className="text-box"
                        placeholder="Password" onChange={handleChange} className={error && error.password && 'has-error' || ''}
                    />
                    {error && error.password && <div className="invalid-feedback">{error.password}</div>}
                </Form.Group>
                <Form.Group as={Col} className="submit-container" >
                    <Button disabled={isLoading} variant="none" onClick={handleSubmit} className="submit-button" >
                        {!isLoading && LABELS.BUTTON.SIGN_IN || LABELS.BUTTON.LOADING}
                    </Button>
                </Form.Group>
            </React.Fragment>
        );
    }
}

export class SignUpForm extends EcomPureComponent {
    render() {
        const { error, isLoading, handleChange, handleSubmit } = this.props
        return (
            <React.Fragment>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="name" className="text-box"
                        className={error && error.name && 'has-error' || ''}
                        placeholder="Name" onChange={handleChange}
                    />
                    {error && error.name && <div className="invalid-feedback">{error.name}</div>}
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="email" className="text-box"
                        className={error && error.email && 'has-error' || ''}
                        placeholder="Email" onChange={handleChange}
                    />
                    {error && error.email && <div className="invalid-feedback">{error.email}</div>}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="password" className="text-box"
                        className={error && error.password && 'has-error' || ''}
                        placeholder="Password" onChange={handleChange}
                    />
                    {error && error.password && <div className="invalid-feedback">{error.password}</div>}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="confirmPassword" className="text-box"
                        className={error && error.matchError && 'has-error' || ''}
                        placeholder="Confirm Password" onChange={handleChange}
                    />
                    {error && error.matchError && <div className="invalid-feedback">{error.matchError}</div>}
                </Form.Group>
                <Form.Group as={Col} className="submit-container" >
                    <Button disabled={isLoading} variant="none" onClick={handleSubmit} className="submit-button" >
                        {!isLoading && LABELS.BUTTON.SIGN_UP || LABELS.BUTTON.LOADING}
                    </Button>
                </Form.Group>
            </React.Fragment>
        )
    }
}