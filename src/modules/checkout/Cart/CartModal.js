import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { handleModal } from '../../../common/actions/authAction';
import { connect } from 'react-redux';

class CartModal extends Component {
    render() {
        return (
            <Modal>

            </Modal>
        );
    }
}
function mapStateToProps(state) {
    return {
        showCheckoutModal: state.profile.showCheckoutModal,
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handlModal: (payload) => { dispatchEvent(handleModal(payload)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);