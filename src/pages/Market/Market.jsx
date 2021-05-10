import React, { useContext } from "react";
import { AppContext } from "../../store/contexts";
// import { homeVariants } from "../../animation/homeAnim";
import Loading from "../../components/Loading/Loading";
import { Wrapper, Title, Form, Input } from "./MarketStyle";
import Coins from "../../components/Coins/Coins";

const Market = () => {
  const { submitHandler, search, changeHandler, isLoading } = useContext(
    AppContext
  );

  return (
    <Wrapper>
      <div className="search">
        <Title>Search a cryptocurrency.</Title>
        <Form onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={changeHandler}
          />
        </Form>
      </div>
      {isLoading ? <Loading /> : <Coins />}
    </Wrapper>
  );
};

// variants={homeVariants} initial="hidden" animate="visible"

export default Market;
