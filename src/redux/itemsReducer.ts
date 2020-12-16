/* state */
let initialSliderState = {
    itemList: [],
    filteredArray: [],
    currentFilter: "0",
    inputValue: "",
    showedArray: [],
    currentItem: null,
    isFetching: true,
    currentPage: 1,
}


/* consts */
const SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
    SET_SHOWED_ARRAY = "SET_SHOWED_ARRAY",
    SET_FILTERED_ARRAY = "SET_FILTERED_ARRAY",
    INITIALISE = "INITIALISE",
    CHANGE_PAGE = "CHANGE_PAGE",
    SET_FILTER = "SET_FILTER",
    SET_INPUT_VALUE = "SET_INPUT_VALUE"


/* types */
interface actions {
    type: string,
    itemList: Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>,
    arr: Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>,
    page: string,
    filter: string,
    value: string,
    id: string
}
type array = Array<{ id: string, name: string, price: string, brand: string, category: string, img: string }>


/* reducer */
const itemsReducer = (state = initialSliderState, action: actions) => {
    switch (action.type) {
        case INITIALISE: {
            return {
                ...state,
                itemList: action.itemList,
                showedArray: action.itemList,
                filteredArray: action.itemList,
                isFetching: false
            }
        }
        case SET_CURRENT_ITEM: {
            let newCurrentItem = state.itemList.filter( (e: {id: string}) => e.id === action.id)
            return {
                ...state,
                // @ts-ignore
                currentItem: {...newCurrentItem[0]}
            }
        }
        case SET_SHOWED_ARRAY: {
            return {
                ...state,
                showedArray: action.arr
            }
        }
        case SET_FILTERED_ARRAY: {
            return {
                ...state,
                filteredArray: action.arr,
                showedArray: action.arr
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                currentFilter: action.filter
            }
        }
        case SET_INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.value
            }
        }
        default: {
            return state
        }
    }
}
export default itemsReducer


/* actions */
const setCurrentItem = (id: string) => ({type: SET_CURRENT_ITEM, id})
const setShowedArray = (arr: array) => ({type: SET_SHOWED_ARRAY, arr})
const setFilteredArray = (arr: array) => ({type: SET_FILTERED_ARRAY, arr})
const initialise = (itemList: array) => ({type: INITIALISE, itemList})
const changePage = (page: string) => ({type: CHANGE_PAGE, page})
const setChosenFilter = (filter: string) => ({type: SET_FILTER, filter})
const setInputValue = (value: string) => ({type: SET_INPUT_VALUE, value})


/* thunks */
export const initialiseThunk = () => {
    return (dispatch: any) => {
        fetch(`http://localhost:8000/items?_page=1&_limit=9`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(initialise(response))
                }
            )
    }
}
export const ChangePage = (page: string) => {
    return (dispatch: any) => {
        dispatch(changePage(page))
        fetch(`http://localhost:8000/items?_page=${page}&_limit=9`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(initialise(response))
                }
            )
    }
}
export const setPaginationThunk = (page: string, limit: string) => {
    if (limit === "999") {
        return (dispatch: any) => {
            fetch(`http://localhost:8000/items`)
                .then(res => res.json())
                .then(
                    (response) => {
                        dispatch(initialise(response))
                    }
                )

        }
    } else {
        return (dispatch: any) => {
            fetch(`http://localhost:8000/items?_page=${page}&_limit=9`)
                .then(res => res.json())
                .then(
                    (response) => {
                        dispatch(initialise(response))
                    }
                )

        }

    }

}
export const setChosenFilterThunk = (filter: string) => {
    return (dispatch: any) => {
        dispatch(setChosenFilter(filter))
    }
}
export const setInputValueThunk = (value: string) => {
    return (dispatch: any) => {
        dispatch(setInputValue(value))
    }
}
export const setCurrentItemThunk = (id: string) => {
    return (dispatch: any) => {
        dispatch(setCurrentItem(id))
    }
}
export const setFilteredArrayThunk = (arr: array) => {
    return (dispatch: any) => {
        dispatch(setFilteredArray(arr))
    }
}
export const setShowedArrayThunk = (arr: array) => {
    return (dispatch: any) => {
        dispatch(setShowedArray(arr))
    }
}



