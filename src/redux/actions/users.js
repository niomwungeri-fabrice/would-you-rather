export const SET_AUTH_USER = 'SET_AUTH_USER';


export const setAuthenticatedUser = (username) => {
    return {
        type: SET_AUTH_USER,
        username
    }
};



