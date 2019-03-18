import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import './auth.scss'

export class SignInForm extends EcomPureComponent {
    render() {
        return (
            <React.Fragment>
                <Form.Group>
                    <Form.Control type="text" name="email" className="text-box"
                        placeholder="Email" onChange={this.props.handleChange}
                    />
                    {/* {this.props.errors && <Form.Control.Feedback type={this.props.errors.password && 'invalid' || 'valid'} >{this.props.errors.password}</Form.Control.Feedback>} */}
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" name="password" className="text-box"
                        placeholder="Password" onChange={this.props.handleChange}
                    />
                    {/* {this.props.errors && <Form.Control.Feedback type={this.props.errors.email && 'invalid' || 'valid'} >{this.props.errors.email}</Form.Control.Feedback>} */}
                </Form.Group>
            
                <Button variant="none" onClick={this.props.handleSubmit} className="submit-button" >
                        Login
                </Button>
            </React.Fragment>
        );
    }
}

export class SignUpForm extends EcomPureComponent {
    render() {
        return (
            <React.Fragment>
                <div> Sign Up </div>
            </React.Fragment>
        )
    }
}