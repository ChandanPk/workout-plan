import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const abortController = new AbortController();
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(url, {
          signal: abortController.signal,
        });
        setData(res.data);
      } catch (error) {
        const handleFetch = async () => {
          try {
            const res = await axios.get(url, {
              signal: abortController.signal,
            });
            setData(res.data);
          } catch (error) {
            setData({ error: error.message });
          }
        };
        setData({ error: error.message });
      }
    };

    handleFetch();
    return () => {
      abortController.abort();
      console.log("axios fetch was aborted!");
    };
  }, []);

  return { data };
};

export default useFetch;
