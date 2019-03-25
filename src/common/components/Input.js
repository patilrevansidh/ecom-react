import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Form, Row, Col } from 'react-bootstrap';

export class TextInputGroup extends EcomPureComponent {
    render() {
        const { groupAs, colspan, name, handleChange, placeholder, type, error, label, ...rest } = this.props;
        const asGrp = groupAs === 'row' && Row || Col
        return (
            <Form.Group as={asGrp} >
                {
                    label && <Form.Label column sm={4}> {label} </Form.Label>
                }
                <Col sm={colspan || "6"}>
                    <Form.Control type={type} name={name} className={error && 'has-error text-box' || 'text-box'}
                        placeholder={placeholder} onChange={handleChange} {...rest}
                    />
                </Col>
                {error && <div className="invalid-feedback">{error}</div>}
            </Form.Group>
        );
    }
}