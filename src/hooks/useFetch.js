import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const abortController = new AbortController();
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = axios.get("http://localhost:4000/", {
        signal: abortController.signal,
      });
      console.log(res);
    } catch (error) {
      console.log(error, "====");
    }

    return () => {
      abortController.abort();
      console.log("axios fetch was aborted!");
    };
  }, []);

  return { data: "lemon" };
};

export default useFetch;
