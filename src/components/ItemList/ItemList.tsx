import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Buttons from "./Buttons/Buttons";
import {ItemListProps} from "../../common/types";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const ItemContainer = styled(NavLink)`
  width: 300px;
  margin: 20px 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
const Item = styled.div`
  padding: 10px;
`
const Img = styled.img`
  width: 280px;
  height: 280px;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`


const ItemList = (props: ItemListProps) => {

    const {
        SetItem,
        PageChange,
        isFinite,
        canNextPage,
        currentPage,
        currentFilter,
        showedArray
    } = props

    return (
        <section>
            <Wrapper>
                {showedArray.map((item: { [key: string]: string }) =>
                    <ItemContainer onClick={() => SetItem(item)} to="/item">
                        <Item>
                            <Img alt={"pizza"} src={item.img}/>
                            <Flex>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </Flex>
                        </Item>
                    </ItemContainer>
                )}
            </Wrapper>
            <Buttons
                currentFilter={currentFilter}
                PageChange={PageChange}
                isFinite={isFinite}
                canNextPage={canNextPage}
                currentPage={currentPage}
                showedArray={showedArray}
            />
        </section>
    )
}

export default ItemList