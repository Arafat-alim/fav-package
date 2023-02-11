import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";
import NotifyModal from "../Utility/Modals/NotifyModal";
import ListBox from "../Utility/ListBox";
import useDebounce from "../Utility/useDebounce";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function AddFav() {
  //! states
  const [packageArr, setPackageArr] = useState([]);
  const [comments, setComments] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [term, setTerm] = useState("");
  const [msg, setMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const debounceSearchTerm = useDebounce(term, 1500);
  const [file, setFile] = useState(() => {
    const localFetch = localStorage.getItem("data");
    if (!localFetch) {
      return [];
    } else {
      return JSON.parse(localFetch);
    }
  });
  console.log(file[0].selectedOption);
  const fetchedApi = async (term) => {
    const res = await fetch(`https://api.npms.io/v2/search?q=${term}`);
    const packArr = await res.json();
    const datas = packArr.results.map((pack) => pack.package.name);
    setPackageArr(datas);
  };
  // const grabApi = useFetch(term);
  // console.log("MY world", grabApi);
  //! calling api
  useEffect(() => {
    if (debounceSearchTerm) {
      fetchedApi(debounceSearchTerm);
    } else {
      setPackageArr([]);
    }
  }, [debounceSearchTerm]);

  //! handle term
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputData((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // };

  //! save into the localstorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(file));
  }, [file]);

  //! check already package exist or not
  function check(option) {
    // let duplication = false;
    for (let i = 0; i < file.length; i++) {
      if (file[i].selectedOption === option) {
        return -1;
      }
    }
  }

  // !handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "" || check(selectedOption)) {
      setMsg("You cant Add this Item into the List");
      setShowModal(true);
      return;
    } else {
      setFile([...file, { id: uuidv4(), term, comments, selectedOption }]);
      setComments("");
      setTerm("");
      setSelectedOption("");
      setShowModal(true);
      setMsg("Added into the Lists.");
    }
  };

  return (
    <div className="row justify-content-center">
      <h2>Add NPM packages</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Search Here..."
            name="search"
            required
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">Search NPM</label>
          <ListBox
            state={selectedOption}
            setSelectedOption={setSelectedOption}
            packages={packageArr}
          />

          <div>
            <h3>Why is your Favorite?</h3>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Write your Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
                name="comments"
              />
            </FloatingLabel>
          </div>

          <Button type="submit">Submit</Button>
        </Form.Floating>
      </Form>
      {showModal && (
        <NotifyModal show={showModal} closeModal={setShowModal} msg={msg} />
      )}
      <Link to="/">See Your Favorite Packages</Link>
    </div>
  );
}

export default AddFav;
