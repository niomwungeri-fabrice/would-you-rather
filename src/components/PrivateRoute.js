import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";

// todo: Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        rest.username !== null
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
);
const propsToState = ({username}) => {
    return {
        username,
    }
};
export default connect(propsToState)(PrivateRoute)