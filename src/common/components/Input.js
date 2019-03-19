import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Form, Row, Col } from 'react-bootstrap';

export class TextInputGroup extends EcomPureComponent {
    render() {
        const { name, handleChange, placeholder, type, error, label, ...rest } = this.props;
        return (
            <Form.Group as={Row} >
                {
                    label && <Form.Label column sm={4}> {label} </Form.Label>
                }
                <Col sm="6">
                    <Form.Control type={type} name={name} className="text-box"
                        placeholder={placeholder} onChange={handleChange} {...rest}
                    />
                </Col>
                {error && <Form.Control.Feedback type={this.props.error && 'invalid' || 'valid'} >{this.props.error}</Form.Control.Feedback>}
            </Form.Group>
        );
    }
}