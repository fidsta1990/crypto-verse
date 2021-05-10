import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coins/Coin";
import axios from "axios";

const AppContext = React.createContext();

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

const AppProvider = ({ children }) => {
  // toggle navbar btn
  const [toggle, setToggle] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  // state for coin data
  const [coins, setCoins] = useState([]);
  //inout search state for form
  const [search, setSearch] = useState("");

  // fetch cryptocurrency data
  const fetchCoins = async (url) => {
    try {
      const res = await axios.get(url);
      const coins = res.data;
      setCoins(coins);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // side effect to handle fetching coin data from api
  useEffect(() => {
    fetchCoins(url);
  }, []);

  // handle form submission
  const changeHandler = (e) => setSearch(e.target.value);

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.trim().toLowerCase());
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const searchedCoin = filterCoins.map((coin) => {
    return (
      <Link to={`/market/${coin.id}`} key={coin.id}>
        <Coin {...coin} />
      </Link>
    );
  });

  //CONVERT AND FORMAT NUMBER VALUES
  //variables for number format and conversion

  let convertedNum;

  //convert string to number, display 2 decimal places
  const convertNum = (num) => {
    convertedNum = +num;
    return convertedNum.toFixed(2);
  };

  return (
    <AppContext.Provider
      value={{
        toggle,
        coins,
        setToggle,
        isLoading,
        setIsLoading,
        searchedCoin,
        convertNum,
        changeHandler,
        submitHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
