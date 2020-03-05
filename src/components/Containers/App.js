import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import {asyncActionHandleReceiveData} from '../../redux/actions/shared'
import LoadingBar from 'react-redux-loading';
import Login from "./LogIn";
import LeaderBoard from "./LeaderBoard";
import PrivateRoute from "../PrivateRoute";
import Questions from "./Questions";
import Nav from "./Nav";
import Question from "./Question";
import {Button, Result} from 'antd';
import NewQuestion from "./NewQuestion";

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(asyncActionHandleReceiveData())
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar/>
                    {this.props.username !== null && <Nav/>}
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Switch>
                                <Route path='/login' component={Login}/>
                                <PrivateRoute path='/leaderboard' component={LeaderBoard}/>
                                <PrivateRoute path='/questions/:questionId' component={Question}/>
                                <PrivateRoute path='/add' exact component={NewQuestion}/>
                                <PrivateRoute path='/' exact component={Questions}/>
                                <Result
                                    status="404"
                                    title="404"
                                    subTitle="Sorry, the page you visited does not exist."
                                    extra={<Button to='/' type="link">Back Home</Button>}>
                                </Result>
                            </Switch>
                        </div>}
                </Fragment>
            </BrowserRouter>
        )
    }
}

const propsToState = ({loading, username}) => {
    return {
        loading,
        username
    }
};
export default connect(propsToState)(App);