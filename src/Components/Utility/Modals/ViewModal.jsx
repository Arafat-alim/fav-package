import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewModal({ closeModal, id, show }) {
  //! fetching data from localStorage
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  const filterData = data.filter((item) => item.id === id);
  const { selectedOption, comments } = filterData[0];
  return (
    <Modal
      show={show}
      onHide={() => closeModal(false)}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Favourite Package - {selectedOption.toUpperCase()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Your Comments - {comments}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewModal;
