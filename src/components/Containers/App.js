import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import {handleInitialData} from "../../redux/actions/users";
import LoadingBar from 'react-redux-loading';
import Login from "./LogIn";
import LeaderBoard from "./LeaderBoard";
import PrivateRoute from "../PrivateRoute";
import Home from "./Home";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/login' exact component={Login}/>
                                <PrivateRoute path='/leaderboard' exact component={LeaderBoard}/>
                                <PrivateRoute path='/home' exact component={Home}/>
                            </div>}
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default connect()(App);