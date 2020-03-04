import React, {Component, Fragment} from "react";
import {Card, Menu, Avatar, Button} from 'antd';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {toggleNav} from '../../redux/actions/nav'

class Home extends Component {
    state = {
        current: 'unQuestions',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    toPoll = (e, id) => {
        this.props.dispatch(toggleNav(''));
        this.props.history.push(`/question/${id}`)
    };


    render() {

        const {questions, users} = this.props;
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
                        ? Object.keys(questions).map((question, index) => (
                            <Card key={index} title={users[questions[question].author].name}
                                  extra={<Avatar
                                      src={users[questions[question].author].avatarURL}/>}
                                  style={{width: "auto"}}>
                                <h4>Would you rather:</h4>
                                <ul>
                                    <li>{questions[question].optionOne.text}</li>
                                    <li>{questions[question].optionTwo.text}</li>
                                </ul>
                                {/* todo: Direct me to answer the question*/}
                                <Button
                                    onClick={(e) => this.toPoll(e, questions[question].id)}
                                    type="primary" ghost>
                                    View Poll
                                </Button>
                            </Card>
                        ))
                        : Object.keys(questions).map((question, index) => (
                            <Card key={index} title={users[questions[question].author].name}
                                  extra={<Avatar
                                      src={users[questions[question].author].avatarURL}/>}
                                  style={{width: "auto"}}>
                                <div>
                                    <h4>Would you rather:</h4>
                                    <ul>
                                        <li>{questions[question].optionOne.text}</li>
                                        <li>{questions[question].optionTwo.text}</li>
                                    </ul>
                                    <Button
                                        onClick={(e) => this.toPoll(e, questions[question].id)}
                                        type="primary" ghost>
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

const propsToState = ({questions, users, current}) => {
    return {
        questions,
        users,
        current
    }
};

export default withRouter(connect(propsToState)(Home))


