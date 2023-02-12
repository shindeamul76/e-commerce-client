import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'
import {mobile} from "../resposive"

const Container = styled.div`
        display:flex;
        ${mobile({padding: "0px", flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoriesItem item = {item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
