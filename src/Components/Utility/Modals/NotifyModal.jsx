import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NotifyModal({ show, closeModal, msg }) {
  console.log(show);
  console.log(closeModal);
  return (
    <Modal
      show={show}
      onHide={() => closeModal(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Important!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotifyModal;
