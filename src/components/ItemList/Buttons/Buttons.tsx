import React from "react";
import styled from "styled-components";

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`

interface Props {
    PageChange: any, /*func*/
    isFinite: boolean,
    canNextPage: boolean,
    currentPage: number,
    currentFilter: string
    showedArray: any /*Массив*/
}

const Buttons = (props: Props) => {

    const {PageChange, isFinite, canNextPage, currentPage, showedArray, currentFilter} = props
    if (isFinite) {
        return (
            <Pagination>
                {currentPage === 1
                    ? <button disabled onClick={() => {PageChange("-")}}>Down</button>
                    : <button onClick={() => {PageChange("-")}}>Down</button>}
                <h2>{currentPage}</h2>
                {canNextPage
                    ? <button onClick={() => {PageChange("+")}}>Up</button>
                    : <button disabled onClick={() => {PageChange("+")}}>Up</button>
                }
            </Pagination>
        )
    } else if (showedArray.length > 0 && !isFinite && currentFilter !== "0") {
        debugger
        return (
            <Pagination>
                <h2>Все подходящие предметы</h2>
            </Pagination>
        )
    } else if (showedArray.length === 0){
        return (
            <Pagination>
                <h2>К сожалению не удалосб ничего найти :(</h2>
            </Pagination>
        )
    } else {
        return null

    }
}

export default Buttons