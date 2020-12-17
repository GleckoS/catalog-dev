import React from 'react'
import styled from "styled-components";
import {HeaderProps} from "../../common/types";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 460px) {
    display: block;
  }
`
const Item = styled.div`
`
const Input = styled.input`
  border: none;
  padding: 10px 20px;
  transition: .2s all linear;
  background-color: #eeeeee;
  margin: 5px;
  border-radius: 2px;

  &:focus {
    background-color: #d0d0d0;
  }

  &:hover {
    background-color: #d0d0d0;
  }

  @media (max-width: 460px) {
    width: calc(100% - 50px);
  }
`
const Select = styled.select`
  margin: 5px;
  width: 100px;
  height: 40px;
  @media (max-width: 460px) {
    width: calc(100% - 10px);
  }
`

const Header = (props: HeaderProps) => {

    const {
        handleClickSearch,
        changeShow,
        changePagination,
        currentFilter,
        inputValue
    } = props

    return (
        <header>
            <Wrapper>
                <Item>
                    <Select value={currentFilter} onChange={(value) => {
                        changeShow(value.target.value)
                    }}>
                        <option value="0">Все</option>
                        <option value="MAXIPIZZA">MAXIPIZZA</option>
                        <option value="Dominos">Dominos</option>
                        <option value="Pizza-Hut">Pizza-Hut</option>
                        <option value="Pizzy">Pizzy</option>
                    </Select>
                </Item>
                <Item>
                    <form>
                        <Input value={inputValue} placeholder="Сортировка по названию"
                               onChange={handleClickSearch}/>
                    </form>
                </Item>
                <Item>
                    <label htmlFor="pagination">Количество предметов на странице:</label>
                    <Select id="pagination" onChange={(value) => {
                        changePagination(value.target.value)
                    }}>
                        <option value="9">9</option>
                        <option value="999">infinite</option>
                    </Select>
                </Item>
            </Wrapper>
        </header>
    )
}

export default Header
