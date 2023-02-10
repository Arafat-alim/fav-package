import { useState, useEffect } from "react";

const useFetch = (searchTerm) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`https://api.npms.io/v2/search?q=${searchTerm}`);
    const fetched = await res.json();
    setData(fetched);
  };
  fetchData();
  return data;
};

export default useFetch;
