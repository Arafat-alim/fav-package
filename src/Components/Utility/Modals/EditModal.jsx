import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import NotifyModal from "./NotifyModal";

function EditModal({ closeModal, id, show }) {
  //! fetching data from the localStorage
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  //! modal state
  const [msg, setMsg] = useState("Process");

  console.log(msg);

  //! saving the data into the localstorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  //! handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const editComment = data.find((item) => item.id === id);
      const updateComment = data.map((item) =>
        item.id === editComment.id
          ? { ...item, id: item.id, comments: newComment }
          : item
      );
      setData(updateComment);
      setMsg("Updated!");
    } else {
      setMsg("Something Went Wrong!");
    }
  };

  //! matching data extration
  const filteredData = data.filter((item) => item.id === id);
  const { selectedOption: extractOption, comments: extractComments } =
    filteredData[0];
  const [newComment, setNewComment] = useState(extractComments);

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
        <Modal.Title>Edit Lists</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <p>
            Selected NPM Package - <span className="bold">{extractOption}</span>{" "}
          </p>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              required
              name="comments"
              style={{ height: "100px" }}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </FloatingLabel>
          <Button
            variant="secondary"
            onClick={() => closeModal(false)}
            className="mt-3 me-2"
          >
            Close
          </Button>
          <Button variant="success" type="submit" className="mt-3 me-2">
            Update
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>Status: {msg}</Modal.Footer>
    </Modal>
  );
}

export default EditModal;
