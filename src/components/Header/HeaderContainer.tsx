import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    setChosenFilterThunk,
    setFilteredArrayThunk,
    setInputValueThunk,
    setPaginationThunk,
    setShowedArrayThunk
} from "../../redux/itemsReducer";

interface Props {
    setShowedArrayThunk: any, /*func*/
    setFilteredArrayThunk: any, /*func*/
    setPaginationThunk: any, /*func*/
    setChosenFilterThunk: any, /*func*/
    setInputValueThunk: any, /*func*/
    page: number,
    currentFilter: string,
    inputValue: string,
    filteredArray: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
    itemList: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
}

const HeaderContainer = (props: Props) => {

    const {
        setShowedArrayThunk,
        setFilteredArrayThunk,
        setPaginationThunk,
        setChosenFilterThunk,
        setInputValueThunk,
        page,
        currentFilter,
        inputValue,
        itemList,
        filteredArray
    } = props

    /* Сортировка изначального массива по бренду */
    const changeShow = (value: any) => {
        let result
        if (value !== "0") { /* Если выбрана не дефолтная опция возвращаем полный массив */
            result = itemList.filter((val: { brand: string }) => val.brand === value)
        } else { /* Если выбрана дефолтная опция возвращаем полный массив */
            result = itemList
        }
        setFilteredArrayThunk(result) /* запись отфильтрованного массива */
        setChosenFilterThunk(value) /* запись фильтра */
        setInputValueThunk("") /* сброс инпута после изменения фильтра */
    }

    /* Строка поиска, сортирует уже отсортированный по бренд массив */
    const handleClickSearch = ({target}: any) => {

        let result

        if (target.value) { /* Если строка не пуста возвращаем отфильтрованный массив */
            result = filteredArray.filter((item: { name: string }) => `${item.name}`.indexOf(target.value) !== -1)
        } else { /* Если строка пуста возвращаем полный массив */
            result = filteredArray
        }
        setShowedArrayThunk(result) /* запись показываемого массива после второй фильтрации */
        setInputValueThunk(target.value) /* запись value инпута для второй фильтрации */
    }

    /* изменение количества объектов в массиве (9 или unlimited)*/
    const changePagination = (limit: string) => {
        setChosenFilterThunk("0") /* сброс фильтра после изменения пагинации */
        setInputValueThunk("") /* сброс инпута после изменения пагинации */
        setPaginationThunk(page, limit) /* установка кольичества объектов на странице*/
    }

    return (
        <Header
            changeShow={changeShow}
            handleClickSearch={handleClickSearch}
            changePagination={changePagination}
            currentFilter={currentFilter}
            inputValue={inputValue}
        />
    )

}

const MapStateToProps = (state: any) => {
    return {
        itemList: state.itemsReducer.itemList,
        filteredArray: state.itemsReducer.filteredArray,
        page: state.itemsReducer.currentPage,
        currentFilter: state.itemsReducer.currentFilter,
        inputValue: state.itemsReducer.inputValue
    }
}

export default connect(MapStateToProps, {
    setShowedArrayThunk,
    setFilteredArrayThunk,
    setPaginationThunk,
    setChosenFilterThunk,
    setInputValueThunk
})(HeaderContainer)