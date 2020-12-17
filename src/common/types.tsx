export interface _state{
    itemsReducer: {
        itemList: Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>,
        filteredArray: Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>,
        showedArray: Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>,
        currentItem: { id: string, name: string, price: string, brand: string, category: string, img: string },
        currentFilter: string,
        inputValue: string,
        isFetching: boolean,
        currentPage: number
    }
}

export interface AppProps{
    initialiseThunk: any, /*func*/
    isFetching: boolean
}

export interface HeaderContainerProps {
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

export interface HeaderProps {
    handleClickSearch: any, /*func*/
    changeShow: any, /*func*/
    changePagination: any, /*func*/
    currentFilter: string,
    inputValue: string
}

export interface ItemListContainerProps {
    setCurrentItemThunk: any, /*func*/
    ChangePage: any, /*func*/
    currentPage: number,
    currentFilter: string,
    itemList: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
    showedArray: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
}

export interface ItemListProps {
    PageChange: any, /*func*/
    SetItem: any, /*func*/
    isFinite: boolean,
    canNextPage: boolean,
    currentPage: number,
    currentFilter: string,
    showedArray: Array<{id: string, name: string, price: string, brand: string, category: string, img: string}>
}

export interface ButtonsProps {
    PageChange: any, /*func*/
    isFinite: boolean,
    canNextPage: boolean,
    currentPage: number,
    currentFilter: string
    showedArray: any /*Массив*/
}

export interface ItemPageContainerProps {
    currentItem: {id: string, name: string, price: string, brand: string, category: string, img: string}
}

export interface ItemPageProps {
    currentItem: {id: string, name: string, price: string, brand: string, category: string, img: string}
}
