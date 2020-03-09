import {TOGGLE_NAV} from "../actions/nav";

export const navReducer = (state = "home", action) => {

    switch (action.type) {
        case TOGGLE_NAV:
            return action.current;
        default:
            return state
    }
};