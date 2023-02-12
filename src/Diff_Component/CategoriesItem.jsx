import React from 'react'
import styled from 'styled-components';
import {mobile} from "../resposive"


const Container = styled.div`
        flex: 1;
        margin: 3px;
        height: 60vh;
        position: relative;
`;

const Image = styled.img`
        width:100%;
        height: 100%;
        object-fit: cover;
        ${mobile({height: "30vh"})}
`;
const Info = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-item:center;
        justify-content:center;

`;
const Title = styled.h1`
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 40px;
`;
const Button = styled.button`
        border: 1px solid;
        width: 120px;
        height: 35px;
        font-weight: 600;
        background-color: white;
        color: grey;
        position: relative;
        right:-184px;
        cursor:pointer
`;

const CategoriesItem = ({item}) => {
  return (
    <Container>
      <Image src= {item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoriesItem
