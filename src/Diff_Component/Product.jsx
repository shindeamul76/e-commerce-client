import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import "./Home_Style.css";

const Info = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.2);
        z-index: 3;
        display: flex;
        align-item: center;
        justify-content: center;
        transition: all 0.5s ease;
        cursor: pointer;
`

const Container = styled.div`
        flex: 1;
        margin:5px;
        min-width: 286px;
        height: 283px;
        display: flex;
        align-item: center;
        justify-content: center;
        background-color: #f5fbfd;
        position: relative;
        &:hover ${Info} {
            opacity: 1;
        }
`;

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
        height: 75%;
        z-index: 2;
`

const Icon = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-item: center;
        justify-content: center;
        margin: 7px;
        transition: all 0.5s ease;
        &:hover {
            background-color: "#e9f5f5";
            transform: scale(1.1);
        }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon className="product-icon">
          <ShoppingCartOutlined />
        </Icon>
        <Icon className="product-icon">
          <SearchOutlined />
        </Icon>
        <Icon className="product-icon">
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
