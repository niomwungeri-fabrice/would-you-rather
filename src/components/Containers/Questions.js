import React, {Component, Fragment} from "react";
import {Card, Menu, Avatar} from 'antd';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

class Questions extends Component {
    state = {
        current: 'unQuestions',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        const {unQuestions, anQuestions, users} = this.props;
        const {current} = this.state;
        return (
            <Fragment>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="unQuestions">
                        Unanswered Questions
                    </Menu.Item>

                    <Menu.Item key="ansQuestions">
                        Answered Questions
                    </Menu.Item>
                </Menu>
                <div>
                    {/*TODO: The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom)*/}
                    {this.state.current === 'unQuestions'
                        ? unQuestions.map((question, index) => (
                            <Card key={index} title={users[question.author].name}
                                  extra={<Avatar
                                      src={users[question.author].avatarURL}/>}
                                  style={{width: "auto"}}>
                                <h4>Would you rather:</h4>
                                <ul>
                                    <li>{question.optionOne.text}</li>
                                    <li>{question.optionTwo.text}</li>
                                </ul>
                                <Link
                                    to={{pathname: `/questions/${question.id}`,  state: {isAnswered: true}}}>
                                    View Poll
                                </Link>
                            </Card>

                        ))
                        : anQuestions.map((question, index) => (
                            <Card key={index} title={users[question.author].name}
                                  extra={<Avatar
                                      src={users[question.author].avatarURL}/>}
                                  style={{width: "auto"}}>
                                <div>
                                    <h4>Would you rather:</h4>
                                    <ul>
                                        <li>{question.optionOne.text}</li>
                                        <li>{question.optionTwo.text}</li>
                                    </ul>
                                    <Link
                                        to={{pathname: `/questions/${question.id}`, state: {isAnswered: false}}}>
                                        View Poll
                                    </Link>
                                </div>
                            </Card>
                        ))}
                </div>
            </Fragment>
        )
    }
}

const propsToState = ({questions, users, current, username}) => {
    return {
        questions,
        users,
        current,
        unQuestions: Object.keys(questions).filter(q => !(q in users[username].answers)).map(k => questions[k]),
        anQuestions: Object.keys(questions).filter(q => (q in users[username].answers)).map(k => questions[k])
    }
};

export default withRouter(connect(propsToState)(Questions))