import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useDebounce from "../Utility/useDebounce";
import useFetch from "../Utility/useFetch";

function AddFavorite() {
  const [term, setTerm] = useState("");
  const [comment, setComments] = useState("");
 
  const [data, setData] = useState(() => {
    const saveData = localStorage.getItem("data");
    if (saveData) {
      return JSON.parse(saveData);
    } else {
      return [];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id: uuidv4(), term, comment }]);
    setTerm("");
    setComments("");
  };

  //! useEffect to store the data into localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify([...data]));
  }, [data, term]);

  //   console.log("Current Data", data);
  const searchTerm = useDebounce(term, 1500);
  //! fetching api
  const saved = useFetch(searchTerm);
  console.log(saved);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search</label>
        <input
          required
          value={term}
          id="searchTerm"
          onChange={(e) => setTerm(e.target.value)}
        />
        <br />
        {/* ! Search Items */}

        {/* ! comments */}
        <label htmlFor="commentBox">Comments</label>
        <textarea
          value={comment}
          onChange={(e) => setComments(e.target.value)}
          id="commentBox"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFavorite;
