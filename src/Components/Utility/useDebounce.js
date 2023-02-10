import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedTerm, setDebounceTerm] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceTerm(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, debouncedTerm]);

  return debouncedTerm;
};

export default useDebounce;
