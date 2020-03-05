import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Avatar, Button, Card, Radio, Alert, Progress} from "antd";
import {CheckCircleTwoTone} from '@ant-design/icons';
import {handleAnswerQuestion} from '../../redux/actions/questions'
import {withRouter} from "react-router-dom";

class Question extends Component {
    handleSubmit = () => {
        const {dispatch, username, questionId} = this.props;
        dispatch(handleAnswerQuestion({
            authedUser: username,
            qid: questionId,
            answer: this.state.value
        }));
    };

    state = {
        value: "optionOne",
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    /* Todo: Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is
     set up in this application.) It should also display a navigation bar so that the user can easily navigate
     anywhere in the application */
    render() {
        const {isAnswered} = this.props.history.location.state;
        const {questionId, questions, users, username, message} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const optionOneVotes = questions[questionId].optionOne.votes.length;
        const optionTwoVotes = questions[questionId].optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        return (
            <Fragment>
                {isAnswered ?
                    <div>
                        {message &&
                        <Alert message={message}
                               type={message === 'Answered Successfully' ? "success " : "error"}/>}
                        <Card title={users[username].name}
                              extra={<Avatar
                                  src={users[username].avatarURL}/>}
                              style={{width: "auto"}}>
                            <div>
                                <h4>Would you rather:</h4>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    <Radio style={radioStyle} value="optionOne">
                                        {questions[questionId].optionOne.text}
                                    </Radio>
                                    <Radio style={radioStyle} value="optionTwo">
                                        {questions[questionId].optionTwo.text}
                                    </Radio>
                                </Radio.Group>
                                <br/>
                                <div>{message}</div>
                                {/*TODO: So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed*/}
                                {/*TODO: Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted*/}
                                <Button
                                    onClick={this.handleSubmit}
                                    type="primary" ghost>
                                    Submit
                                </Button>
                            </div>
                        </Card>
                    </div> : <Card title={`${users[username].name} asked would ...`} extra={<Avatar
                        src={users[username].avatarURL}/>}
                                   style={{
                                       width: "auto",
                                   }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <h3>{questions[questionId].optionOne.text} {questions[questionId].optionOne.votes.includes(username) &&
                                <span style={{
                                    marginLeft: '8px'
                                }}><CheckCircleTwoTone
                                    twoToneColor="#52c41a"/> voted</span>}</h3>
                                <Progress status='normal' type="circle" percent={optionOneVotes / totalVotes * 100}/>
                                <div>{optionOneVotes} out {totalVotes} votes</div>
                            </div>
                            <div style={{
                                textAlign: 'center'
                            }}>

                                <h3>{questions[questionId].optionTwo.text} {questions[questionId].optionTwo.votes.includes(username) &&
                                <span><CheckCircleTwoTone
                                    twoToneColor="#52c41a"/> voted</span>}</h3>
                                <Progress status='normal' type="circle" percent={optionTwoVotes / totalVotes * 100}/>
                                <div>{optionTwoVotes} out {totalVotes} votes</div>
                            </div>
                        </div>
                    </Card>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = ({questions, users, username, message}, ownProps) => {
    const {questionId} = ownProps.match.params;

    return {
        questionId,
        questions,
        users,
        username,
        message
    }
};

export default withRouter(connect(mapStateToProps)(Question));