import React, {useState} from 'react'
import {connect} from "react-redux";
import {ChangePage, setCurrentItemThunk} from "../../redux/itemsReducer";
import UserList from "./ItemList";

interface Props {
    setCurrentItemThunk: any, /*func*/
    ChangePage: any, /*func*/
    currentPage: number,
    currentFilter: string,
    itemList: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
    showedArray: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
}

const UserListContainer = (props: Props) => {

    const {showedArray, ChangePage, currentPage, itemList, setCurrentItemThunk, currentFilter} = props

    /* Проверка можно ли листать дальше */
    const [canNextPage, setCanNextPage] = useState(true)
    if (itemList.length < 9 && canNextPage) {
        setCanNextPage(false)
    } else if (itemList.length === 9 && !canNextPage) {
        setCanNextPage(true)
    }

    /* Проверка нужны ли кнопки для пагинации */
    const [isFinite, setIsFinite] = useState(true)
    debugger
    if (itemList.length > 9 && isFinite) {
        setIsFinite(false)
    } else if (currentFilter !== "0" && isFinite) {
        setIsFinite(false)
    } else if (itemList.length <= 9 && !isFinite && currentFilter === "0") {
        setIsFinite(true)
    }


    /* Изменение страницы */
    const PageChange = (val: string) => {
        let newPage = currentPage
        if (val === "+") {
            newPage++
        } else {
            newPage--
        }
        ChangePage(newPage) /* Запись новой страницы */
    }

    /* Сохранение объекта на который нажали */
    const SetItem = (item: { id: string }) => {
        setCurrentItemThunk(item.id)
    }

    return (
        <UserList
            PageChange={PageChange}
            SetItem={SetItem}
            isFinite={isFinite}
            canNextPage={canNextPage}
            currentPage={currentPage}
            showedArray={showedArray}
            currentFilter={currentFilter}
        />
    )
}

const MapStateToProps = (state: any) => {
    return {
        showedArray: state.itemsReducer.showedArray,
        currentPage: state.itemsReducer.currentPage,
        itemList: state.itemsReducer.itemList,
        currentFilter: state.itemsReducer.currentFilter
    }
}

export default connect(MapStateToProps, {setCurrentItemThunk, ChangePage})(UserListContainer)