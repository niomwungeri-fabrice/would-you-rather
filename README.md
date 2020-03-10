# Would-You-Rather
React/Redux project "Would you rather" for Udacity React Developer Nanodegree Program

# FrontEnd

### Local setup instructions
```sh
$ git clone https://github.com/niomwungeri-fabrice/would-you-rather.git
$ cd would-you-rather
$ yarn
$ yarn start
```

## How it works
- Visit `http://localhost:3000/login` to login in the application
- Visit `http://localhost:3000/` Its a protected route that show the home page of the application `Login Required`
- Visit `http://localhost:3000/add` Its a protected route to create a new question `Login Required`
- Visit `http://localhost:3000/leaderboard` Its a protected route that takes you to the leaderboad page `Login Required`

## API

To simplify your development process we have been provided with several 4 APIs
* [`_getQuestions`](#getQuestions)
* [`_getUsers`](#_getUsers)
* [`_saveQuestionAnswer`](#_saveQuestionAnswer)
* [`_saveQuestion`](#_saveQuestion)

### `_getQuestions`

Method Signature:

```js
_getQuestions()
```
* Returns a Promise which resolves to a JSON object containing a collection of questions objects.

### `_getUsers`

Method Signature:

```js
_getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of users objects.
### `_saveQuestion`

Method Signature:

```js
_saveQuestion(question)
```

* question: `<Object>` containing at  `qid, answer, authedUser` attributes
* Returns a Promise which resolves to a JSON object containing the response data of the POST request
### `_saveQuestionAnswer`

Method Signature:

```js
_saveQuestionAnswer({authedUser, qid, answer})
```

* authedUser: `<String>` Its a logged in username
* qid: `<String>` question Id the logged in user is answering
* answer: `<String>` containing at  `optionOne` or `optionTwo` attributes
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### Built with:
* [React](https://reactjs.org/)
* [React/Redux](https://redux.js.org/)
* [Ant Design](https://ant.design/)

### References
* [Udacity](https://classroom.udacity.com/nanodegrees/nd019-ent/dashboard/overview)
* [StackOverFlow](https://stackoverflow.com/)
* [tylermcginnis](https://tylermcginnis.com/)