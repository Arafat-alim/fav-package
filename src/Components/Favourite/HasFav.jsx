import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../Utility/Modals/DeleteModal";
import EditModal from "../Utility/Modals/EditModal";
import ViewModal from "../Utility/Modals/ViewModal";
import NoFav from "./NoFav";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function HasFav() {
  const [currentId, setCurrentId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [data, setData] = useState(() => {
    //! if local storage contain data then show hasFav or show nofav
    const savedData = localStorage.getItem("data");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  //! saving the data
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  //! removing the data from the list
  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    setCurrentId("");
    setDeleteModal(false);
  };

  return (
    <div className="row justify-content-center">
      <h1>Welcome to Favourite NPM Packages</h1>
      {data.length === 0 ? (
        <NoFav />
      ) : (
        <div>
          <Button variant="primary">
            <Link to="/addFav" className="link">
              Add More
            </Link>
          </Button>

          <h3 className="mt-3 mb-3">Your Favorite Packages List </h3>
          {data.map((item) => (
            <ListGroup as="ol" numbered key={item.id}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.selectedOption}</div>
                  See View For More
                </div>
                <Button
                  variant="success"
                  className="m-2"
                  onClick={() => {
                    setViewModal(true);
                    setCurrentId(item.id);
                  }}
                >
                  <i className="fa-solid fa-eye"></i>
                </Button>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => {
                    setCurrentId(item.id);
                    setDeleteModal(true);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
                <Button
                  variant="warning"
                  className="m-2"
                  onClick={() => {
                    setEditModal(true);
                    setCurrentId(item.id);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))}

          {editModal && (
            <EditModal
              id={currentId}
              closeModal={setEditModal}
              show={editModal}
            />
          )}
          {deleteModal && (
            <DeleteModal
              id={currentId}
              closeModal={setDeleteModal}
              deleteItem={handleDelete}
              show={deleteModal}
            />
          )}

          {viewModal && (
            <ViewModal
              id={currentId}
              closeModal={setViewModal}
              show={viewModal}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default HasFav;
