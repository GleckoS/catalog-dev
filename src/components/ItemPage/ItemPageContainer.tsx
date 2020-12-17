import React from 'react'
import {connect} from "react-redux";
import ItemPage from "./ItemPage";
import { Redirect } from 'react-router'
import {_state, ItemPageContainerProps} from "../../common/types";

const ItemPageContainer = (props: ItemPageContainerProps) => {

    const {currentItem} = props

    return (
        <>
            { currentItem
            ? <ItemPage
                currentItem={currentItem}
            />
            : <Redirect to="/"/>
            }
        </>
    )
}

const MapStateToProps = (state: _state) => {
    return {
        currentItem: state.itemsReducer.currentItem
    }
}

export default connect(MapStateToProps, {})(ItemPageContainer)