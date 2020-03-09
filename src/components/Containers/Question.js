import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Avatar, Button, Card, Radio, Progress} from "antd";
import {CheckCircleTwoTone} from '@ant-design/icons';
import {handleAnswerQuestion} from '../../redux/actions/questions'
import {withRouter} from "react-router-dom";
import {setIsAnswered} from '../../redux/actions/questions'

class Question extends Component {

    handleSubmit = () => {
        const {dispatch, username, questionId} = this.props;
        dispatch(handleAnswerQuestion({
            authedUser: username,
            qid: questionId,
            answer: this.state.value
        }));
        dispatch(setIsAnswered(false))
    };

    state = {
        value: "optionOne",
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {isAnswered} = this.props;
        const {questionId, questions, users, username} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const optionOneVotes = questions[questionId].optionOne.votes.length;
        const optionTwoVotes = questions[questionId].optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        console.log(optionOneVotes, optionTwoVotes, totalVotes);
        return (
            <Fragment>
                {isAnswered ?
                    <div>
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
                                <Button style={{
                                    marginTop: '10px'
                                }}
                                        onClick={this.handleSubmit}
                                        type="primary" ghost>
                                    Vote
                                </Button>
                            </div>
                        </Card>
                    </div> : <Card title={`${users[username].name} asked Would you rather...`} extra={<Avatar
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
                                <Progress status='normal' type="circle"
                                          percent={Math.round(optionOneVotes / totalVotes * 100)}/>
                                <div>{optionOneVotes} out {totalVotes} votes</div>
                            </div>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <h3>{questions[questionId].optionTwo.text} {questions[questionId].optionTwo.votes.includes(username) &&
                                <span><CheckCircleTwoTone
                                    twoToneColor="#52c41a"/> voted</span>}</h3>
                                <Progress status='normal' type="circle"
                                          percent={Math.round(optionTwoVotes / totalVotes * 100)}/>
                                <div>{optionTwoVotes} out {totalVotes} votes</div>
                            </div>
                        </div>
                    </Card>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = ({questions, users, username, message, isAnswered}, ownProps) => {
    const {questionId} = ownProps.match.params;

    return {
        questionId,
        questions,
        users,
        username,
        isAnswered
    }
};

export default withRouter(connect(mapStateToProps)(Question));