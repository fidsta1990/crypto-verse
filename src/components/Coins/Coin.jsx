import React, { useContext } from "react";
import { AppContext } from "../../store/contexts";
import {
  CoinLink,
  Wrapper,
  CoinImg,
  CoinName,
  Field,
  FieldText,
} from "./CoinStyle";

const Coin = ({
  symbol,
  name,
  image,
  current_price,
  market_cap,
  market_cap_rank,
  max_supply,
  ath,
}) => {
  const { convertNum } = useContext(AppContext);

  //add commas to numbers
  let val;

  const formatNumber = (num) => {
    val = num;
    if (val) {
      val = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
      val = "N/A";
    }

    return val;
  };

  //converst strings to numbers, pulled from context on line 22
  const priceFormat = convertNum(current_price);
  const highFormat = convertNum(ath);

  const coinInfo = (
    <CoinLink>
      <Field>
        <FieldText className="hoverEffect">{market_cap_rank}</FieldText>
      </Field>
      <Field>
        <CoinImg src={image} alt={name} />
      </Field>
      <Field>
        <CoinName className="hoverEffect">{name.toUpperCase()}</CoinName>
      </Field>
      <Field>
        <FieldText className="hoverEffect">{symbol.toUpperCase()}</FieldText>
      </Field>
      <Field>
        <FieldText className="hoverEffect">
          £{formatNumber(priceFormat)}
        </FieldText>
      </Field>
      <Field>
        <FieldText className="hoverEffect">
          £{formatNumber(highFormat)}
        </FieldText>
      </Field>
      <Field>
        <FieldText className="hoverEffect">
          {max_supply || (!max_supply && "N/A")}
        </FieldText>
      </Field>
      <Field>
        <FieldText className="hoverEffect">
          {market_cap.toLocaleString()}
        </FieldText>
      </Field>
    </CoinLink>
  );

  return <Wrapper>{coinInfo}</Wrapper>;
};

export default Coin;
