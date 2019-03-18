import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAuthModal } from '../../common/actions/authAction';

class AuthModal extends EcomPureComponent {

    handleClose = () => {
        this.props.handleAuthModal(false)
    }
    render() {
        return (
            < Modal.Dialog >
                <Modal.Header onHide={this.handleClose} closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog >
        );
    }
}
function mapDispatchToProps(dispatchEvent) {
    return {
        handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) }
    }
}

export default connect(null, mapDispatchToProps)(AuthModal);