import React from 'react'
import {connect} from "react-redux";
import ItemPage from "./ItemPage";
import { Redirect } from 'react-router'

interface Props {
    currentItem: {id: string, name: string, price: string, brand: string, category: string, img: string}
}

const ItemPageContainer = (props: Props) => {

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

const MapStateToProps = (state: any) => {
    return {
        currentItem: state.itemsReducer.currentItem
    }
}

export default connect(MapStateToProps, {})(ItemPageContainer)