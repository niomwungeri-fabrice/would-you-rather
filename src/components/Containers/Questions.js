import React, {Component, Fragment} from "react";
import {Card, Menu, Avatar, Button} from 'antd';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {setIsAnswered} from '../../redux/actions/questions'
import {compare} from "../../utils/compare";
import '../../resources/css/shared.css'

class Questions extends Component {
    state = {
        current: 'unQuestions',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    toPoll = (e, answer, id) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(setIsAnswered(answer));
        this.props.history.push(`/questions/${id}`);
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
                    {this.state.current === 'unQuestions'
                        ? unQuestions.map((question, index) => (
                            <Card key={index} title={users[question.author].name}
                                  extra={<Avatar
                                      src={users[question.author].avatarURL}/>}
                                  className='card-width-auto'>
                                <h4>Would you rather:</h4>
                                <ul>
                                    <li>{question.optionOne.text}</li>
                                    <li>{question.optionTwo.text}</li>
                                </ul>
                                <Button onClick={(e, answer, id) => {
                                    this.toPoll(e, true, question.id)
                                }}>
                                    Go to poll
                                </Button>
                            </Card>

                        ))
                        : anQuestions.map((question, index) => (
                            <Card key={index} title={users[question.author].name}
                                  extra={<Avatar
                                      src={users[question.author].avatarURL}/>}
                                  className='card-width-auto'>
                                <div>
                                    <h4>Would you rather:</h4>
                                    <ul>
                                        <li>{question.optionOne.text}</li>
                                        <li>{question.optionTwo.text}</li>
                                    </ul>
                                    <Button onClick={(e, answer, id) => {
                                        this.toPoll(e, false, question.id)
                                    }}>
                                        View Poll
                                    </Button>
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
        users,
        current,
        unQuestions: Object.keys(questions).filter(
            q => !(q in users[username].answers)).map(k => questions[k]).sort(compare),
        anQuestions: Object.keys(questions).filter
        (q => (q in users[username].answers)).map(k => questions[k]).sort(compare),
    }
};

export default withRouter(connect(propsToState)(Questions))