import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Button, Card, Col, Row, Radio, Alert, Progress} from "antd";
import {handleAnswerQuestion} from '../../redux/actions/questions'

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
        value: "optionOne"
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {questionId, questions, users, username, message} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <Row>
                <Col span={5}/>
                <Col span={14}>
                    <Alert message={message} type={message === 'Answered Successfully' ? "success " : "error"}/>
                    <Card title={users[username].name}
                          extra={<Avatar
                              src={users[username].avatarURL}/>}
                          style={{width: "auto"}}>
                        <div>
                            <h4>Would you rather:</h4>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio style={radioStyle} value="optionOne">
                                    {questions[questionId].optionOne.text} <Progress percent={90} status="active"/>
                                </Radio>
                                <Radio style={radioStyle} value="optionTwo">
                                    {questions[questionId].optionTwo.text} <Progress percent={36} status="active"/>
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
                </Col>
                <Col span={5}/>
            </Row>
        );
    }
}

const mapStateToProps = ({questions, users, username, message}, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        questionId: id,
        questions,
        users,
        username,
        message
    }
};

export default connect(mapStateToProps)(Question);