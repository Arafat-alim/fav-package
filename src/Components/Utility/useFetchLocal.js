import { useState } from "react";

const [data, setData] = useState(() => {
  const fetchData = localStorage.getItem("data");
  if (fetchData) {
    return JSON.parse(fetchData);
  } else {
    return [];
  }
});

function useFetchLocal() {
  return data;
}

export default useFetchLocal;
