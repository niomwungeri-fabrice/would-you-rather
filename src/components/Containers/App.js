import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import {handleInitialUsers} from "../../redux/actions/users";
import {handleInitialQuestions} from "../../redux/actions/questions";
import LoadingBar from 'react-redux-loading';
import Login from "./LogIn";
import LeaderBoard from "./LeaderBoard";
import PrivateRoute from "../PrivateRoute";
import Home from "./Home";
import Questions from "./Questions";
import Nav from "./Nav";
import Question from "./Question";
import {Button, Result} from 'antd';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialUsers());
        dispatch(handleInitialQuestions())
    }

    toHome = () => (this.props.history.push('/'));

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <Route path='/login' component={Login}/>
                                    <PrivateRoute path='/leaderboard' component={LeaderBoard}/>
                                    <PrivateRoute path='/question/:id' component={Question}/>
                                    <PrivateRoute path='/questions' exact component={Questions}/>
                                    <PrivateRoute path='/' exact component={Nav}/>
                                    <Result
                                        status="404"
                                        title="404"
                                        subTitle="Sorry, the page you visited does not exist."
                                        extra={<Button to='/' type="link">Back Home</Button>}>
                                    </Result>
                                </Switch>
                            </div>}
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

const propsToState = ({username}) => {
    return {
        username,
    }
};
export default connect(propsToState)(App);