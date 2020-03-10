import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Avatar, Button, Card, Radio, Progress} from "antd";
import {CheckCircleTwoTone} from '@ant-design/icons';
import {handleAnswerQuestion} from '../../redux/actions/questions'
import {withRouter} from "react-router-dom";
import {setIsAnswered} from '../../redux/actions/questions';
import '../../resources/css/question.css';
import '../../resources/css/shared.css'
import {NotFound} from "../Presentational/NotFound";

class Question extends Component {
    state = {
        value: "optionOne",
    };

    handleSubmit = () => {
        const {dispatch, username, questionId} = this.props;
        dispatch(handleAnswerQuestion({
            authedUser: username,
            qid: questionId,
            answer: this.state.value
        }));
        dispatch(setIsAnswered(false))
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {questionId, questions, users, username} = this.props;
        if (!Object.keys(questions).includes(questionId)) {
            return <NotFound/>
        }
        const {isAnswered} = this.props;
        const optionOneVotes = questions[questionId].optionOne.votes.length;
        const optionTwoVotes = questions[questionId].optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        return (
            <Fragment>
                {isAnswered ?
                    <div>
                        <Card className='question-card' title={users[username].name}
                              extra={<Avatar
                                  src={users[username].avatarURL}/>}
                        >
                            <div>
                                <h4>Would you rather:</h4>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    <Radio className='options' value="optionOne">
                                        {questions[questionId].optionOne.text}
                                    </Radio>
                                    <Radio className='options' value="optionTwo">
                                        {questions[questionId].optionTwo.text}
                                    </Radio>
                                </Radio.Group>
                                <br/>
                                <Button className='submitBtn'
                                        onClick={this.handleSubmit}
                                        type="primary" ghost>
                                    Vote
                                </Button>
                            </div>
                        </Card>
                    </div> : <Card title={`${users[username].name} asked Would you rather...`} extra={<Avatar
                        src={users[username].avatarURL}/>}
                                   className='card-width-auto'>
                        <div className='progress-container'>
                            <div className='centered'>
                                <h3>
                                    {questions[questionId].optionOne.text}
                                    {questions[questionId].optionOne.votes.includes(username) &&
                                    <span className='voted'><CheckCircleTwoTone twoToneColor="#52c41a"/> voted</span>}
                                </h3>
                                <Progress status='normal' type="circle"
                                          percent={Math.round(optionOneVotes / totalVotes * 100)}/>
                                <div>{optionOneVotes} out {totalVotes} votes</div>
                            </div>
                            <div className='centered'>
                                <h3>
                                    {questions[questionId].optionTwo.text}
                                    {questions[questionId].optionTwo.votes.includes(username) &&
                                    <span className='voted'><CheckCircleTwoTone
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