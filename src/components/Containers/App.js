import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import {asyncActionHandleReceiveData} from '../../redux/actions/shared'
import Login from "./LogIn";
import LeaderBoard from "./LeaderBoard";
import PrivateRoute from "../PrivateRoute";
import Questions from "./Questions";
import Nav from "./Nav";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import {NotFound} from "../Presentational/NotFound";

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(asyncActionHandleReceiveData())
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {this.props.username !== null && <Nav/>}
                    <div>
                        <Switch>
                            <PrivateRoute path='/' exact component={Questions}/>
                            <Route path='/login' exact component={Login}/>
                            <PrivateRoute path='/leaderboard' exact component={LeaderBoard}/>
                            <PrivateRoute path='/questions/:questionId' exact component={Question}/>
                            <PrivateRoute path='/add' exact component={NewQuestion}/>
                            <PrivateRoute exact component={NotFound}/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

const propsToState = ({username}) => {
    return {
        username
    }
};
export default connect(propsToState)(App);