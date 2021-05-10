import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import moment from "moment";

import {
  Wrapper,
  CoinWrapper,
  CoinImgWrap,
  CoinInfoWrap,
  CoinTitle,
  CoinParagraph,
  CoinSpan,
  CoinDescription,
  DescriptionPara,
} from "./SingleCoinStyle";
import { AppContext } from "../../store/contexts";
import useFetch from "./useFetch";
import { FaGithub } from "react-icons/fa";

const url = `https://api.coingecko.com/api/v3/coins/`;

const SingleCoin = () => {
  const { coin } = useParams();
  const { error, crypto } = useFetch(`${url}${coin}`);
  const [readMore, setReadMore] = useState(true);
  const { isLoading } = useContext(AppContext);

  const readHandler = () => setReadMore(!readMore);

  const {
    name,
    description,
    links,
    symbol,
    image,
    market_cap_rank,
    market_data,
  } = crypto;

  const desc = crypto.description && description.en.slice(0, 300);
  const descTwo = crypto.description && description.en;
  const img = crypto.image && image.large;
  const link = crypto.links && links.repos_url.github[0];

  return (
    <Wrapper>
      {error && <div>{error.message}</div>}
      {isLoading && <Loading />}
      {crypto && crypto.market_data && (
        <CoinWrapper>
          <CoinImgWrap>
            <img src={img} alt={name} />
          </CoinImgWrap>
          <CoinInfoWrap>
            <CoinTitle>
              <CoinSpan>Currency: </CoinSpan>
              {symbol}
            </CoinTitle>
            <CoinParagraph>
              <CoinSpan>Coin: </CoinSpan>
              {name}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>Current Price: </CoinSpan>£
              {market_data.current_price.gbp.toLocaleString()}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>Max Supply: </CoinSpan>
              {market_data.total_supply
                ? market_data.total_supply.toLocaleString()
                : "N/A"}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>Market Rank: </CoinSpan>
              {market_cap_rank}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>All Time High: </CoinSpan>£
              {market_data.ath.gbp.toLocaleString()}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>All Time High Date: </CoinSpan>
              {moment(market_data.ath_date.gbp).format("LL")}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>All Time Low: </CoinSpan>£
              {market_data.atl.gbp.toLocaleString()}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>All Time Low Date: </CoinSpan>
              {moment(market_data.atl_date.gbp).format("LL")}
            </CoinParagraph>
            <CoinParagraph>
              <CoinSpan>Market Cap: </CoinSpan>£
              {market_data.market_cap.gbp.toLocaleString()}
            </CoinParagraph>
            <a href={link} target="_blank" rel="noreferrer">
              <FaGithub className="icon" /> Github
            </a>
          </CoinInfoWrap>
        </CoinWrapper>
      )}

      {crypto.description && (
        <CoinDescription>
          <DescriptionPara>
            {readMore ? desc : descTwo}
            <span onClick={readHandler}>
              {readMore ? "Read more..." : "Read less..."}
            </span>
          </DescriptionPara>
        </CoinDescription>
      )}
    </Wrapper>
  );
};

export default SingleCoin;
