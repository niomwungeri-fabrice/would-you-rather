export const SET_AUTH_USER = 'SET_AUTH_USER';
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS';

export const setAuthenticatedUser = (username) => {
    return {
        type: SET_AUTH_USER,
        username
    }
};

export const updateUserQuestion = (username, questionId) => {
    return {
        type: UPDATE_USER_QUESTIONS,
        payload: {
            username,
            questionId
        }
    }
};