import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/contexts";
import axios from "axios";

const useFetch = (url) => {
  const { setIsLoading } = useContext(AppContext);

  const [error, setError] = useState(false);
  const [crypto, setCrypto] = useState([]);

  const fetchCoin = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      setCrypto(data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCoin(url);
    // eslint-disable-next-line
  }, [url]);

  return { error, crypto };
};

export default useFetch;
