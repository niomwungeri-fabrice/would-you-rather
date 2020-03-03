import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import {handleInitialData} from "../../redux/actions/users";
import LoadingBar from 'react-redux-loading';
import Login from "./LogIn";
import Dashboard from "./Dashboard";

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
                                <Route path='/' exact component={Login}/>
                                <Route path='/add' exact component={Dashboard}/>
                            </div>}
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default connect()(App);