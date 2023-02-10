import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ closeModal, deleteItem, id, show }) {
  return (
    <Modal
      show={show}
      onHide={() => closeModal(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to Delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => deleteItem(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
