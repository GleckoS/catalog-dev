import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {ItemPageProps} from "../../common/types";

const Wrapper = styled.section`
  max-width: 1140px;
  margin: 100px auto 0;
  padding: 0 15px;
  display: flex;
  justify-content: left;
`

const Img = styled.img`
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
`

const Title = styled.h1`
  
`

const SubTitle = styled.h3`

`

const Price = styled.h2`
  margin-bottom: 50px;
`

const Inform = styled.div`
  padding: 10px;
`

const Link = styled(NavLink)`
  padding: 15px 35px;
  border: 1px solid blue;
`


const ItemPage = (props: ItemPageProps) => {

    const {currentItem} = props

    return (
        <Wrapper>
            <div>
                <Img src={currentItem.img}/>
            </div>
            <Inform>
                <Title>{currentItem.name}</Title>
                <SubTitle>Бренд: {currentItem.brand}</SubTitle>
                <SubTitle>Категория: {currentItem.category}</SubTitle>
                <Price>Цена: {currentItem.price}</Price>
                <Link to="/">Назад</Link>
            </Inform>
        </Wrapper>
    )
}

export default ItemPage