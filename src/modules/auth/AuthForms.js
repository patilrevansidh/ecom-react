import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { LABELS } from '../../common/constants/stringConstants';


export class SignInForm extends EcomPureComponent {
    render() {
        return (
            <React.Fragment>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="email" className="text-box"
                        placeholder="Email" onChange={this.props.handleChange}
                    />
                    {/* {this.props.errors && <Form.Control.Feedback type={this.props.errors.password && 'invalid' || 'valid'} >{this.props.errors.password}</Form.Control.Feedback>} */}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="password" className="text-box"
                        placeholder="Password" onChange={this.props.handleChange}
                    />
                    {/* {this.props.errors && <Form.Control.Feedback type={this.props.errors.email && 'invalid' || 'valid'} >{this.props.errors.email}</Form.Control.Feedback>} */}
                </Form.Group>
                <Form.Group as={Col} className="submit-container" >
                    <Button variant="none" onClick={this.props.handleSubmit} className="submit-button" >
                        {LABELS.BUTTON.SIGN_IN}
                    </Button>
                </Form.Group>
            </React.Fragment>
        );
    }
}

export class SignUpForm extends EcomPureComponent {
    render() {
        return (
            <React.Fragment>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="name" className="text-box"
                        placeholder="Name" onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Control type="text" name="email" className="text-box"
                        placeholder="Email" onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="password" className="text-box"
                        placeholder="Password" onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="password" name="confirmPassword" className="text-box"
                        placeholder="Confirm Password" onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} className="submit-container" >
                    <Button variant="none" onClick={this.props.handleSubmit} className="submit-button" >
                        {LABELS.BUTTON.SIGN_UP}
                    </Button>
                </Form.Group>
            </React.Fragment>
        )
    }
}