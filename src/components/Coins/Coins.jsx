import React, { useContext } from "react";
import { Wrapper } from "./CoinsStyle";
import TableHeader from "../UI/TableHeader/TableHeader";
import { coinVariants } from "../../animation/coinAnim";
import { AppContext } from "../../store/contexts";

const Coins = () => {
  const { searchedCoin } = useContext(AppContext);

  return (
    <Wrapper variants={coinVariants} initial="hidden" animate="visible">
      <TableHeader />
      {searchedCoin}
    </Wrapper>
  );
};

export default Coins;
