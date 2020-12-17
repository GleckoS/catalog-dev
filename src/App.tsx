import HeaderContainer from "./components/Header/HeaderContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import {connect} from "react-redux";
import {initialiseThunk} from "./redux/itemsReducer";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import ItemPageContainer from "./components/ItemPage/ItemPageContainer";
import Loader from "./common/Loader";
import {_state, AppProps} from "./common/types";



function App(props: AppProps) {

    const {initialiseThunk, isFetching} = props

    initialiseThunk() /* Первычное получение массива объектов */

    return (
        <Router>
            {isFetching
                ? <Loader/>
                :
                <Switch>
                    <Route exact path="/" render={() =>
                        <>
                            <HeaderContainer/>
                            <ItemListContainer/>
                        </>
                    }/>
                    <Route exact path="/item" render={() => <ItemPageContainer/>}/>
                </Switch>
            }

        </Router>
    );
}

const MapStateToProps = (state: _state) => {
    return {
        isFetching: state.itemsReducer.isFetching
    }
}

export default connect(MapStateToProps, {initialiseThunk})(App)
