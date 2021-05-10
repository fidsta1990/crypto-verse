import React from "react";
import styled from "styled-components";
// import {Section} from './TableHeader'

const TableHeader = () => {
  return (
    <Section>
      <h4 className="rank">rank</h4>
      <h4 className="logo">logo</h4>
      <h4 className="name">name</h4>
      <h4 className="currency">curr</h4>
      <h4 className="price">price</h4>
      <h4 className="high">ath</h4>
      <h4 className="supply">supply</h4>
      <h4 className="mcap">mcap</h4>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem;

  .rank,
  .logo .name,
  .currency,
  .price,
  .supply,
  .mcap {
    display: block;
    width: 80px;
  }

  @media (max-width: 1220px) {
    .currency {
      margin-right: 2rem;
    }

    .price {
      margin-left: 2rem;
    }
  }

  @media (max-width: 1000px) {
    .currency,
    .high {
      display: none;
    }
  }

  @media (min-width: 576px) {
    max-width: 300px;
  }

  @media (min-width: 900px) {
    max-width: 700px;
  }

  @media (min-width: 1000px) {
    max-width: 950px;
  }

  @media (max-width: 900px) {
    .currency,
    .supply,
    .mcap,
    .high {
      display: none;
    }

    .rank,
    .logo .name,
    .price {
      width: 140px;
    }

    .name,
    .logo {
      margin-left: 3.2rem;
      padding: 0 2rem;
    }
  }

  @media (max-width: 575px) {
    .logo {
      display: none;
    }

    .rank {
      margin-left: 3.2rem;
    }

    .name, .price{
      margin-right: 3.2rem;
    }



    .rank,
    .logo .name,
    .price {
      width: 100px;
    }
  }
`;

export default TableHeader;
