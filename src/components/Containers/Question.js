import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Avatar, Button, Card, Radio, Alert, Progress} from "antd";
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

    render() {
       const {isAnswered} =this.props.history.location.state;
        const {questionId, questions, users, username, message} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
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
                                <Button
                                    onClick={this.handleSubmit}
                                    type="primary" ghost>
                                    Submit
                                </Button>
                            </div>
                        </Card>
                    </div> : <Card title={`${username} asked would ...`} extra={<Avatar
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
                            }}><h4>{questions[questionId].optionOne.text}</h4>
                                <Progress type="circle" percent={75}/>
                                <div>2 out 3 votes</div>
                            </div>
                            <div style={{
                                textAlign: 'center'
                            }}>

                                <h4>{questions[questionId].optionTwo.text}</h4>
                                <Progress type="circle" percent={15}/>
                                <div>1 out 3 votes</div>
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