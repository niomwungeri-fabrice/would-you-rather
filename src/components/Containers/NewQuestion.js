import React from 'react';
import {Button, Input, Card, Row, Col, Alert} from 'antd';
import {connect} from 'react-redux';
import {handleCreateQuestion} from '../../redux/actions/questions';
import '../../resources/css/newQuestion.css';
import '../../resources/css/shared.css';

class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        message: ''
    };

    handleInput = ({target: {value, name}}) => {
        this.setState({[name]: value});
    };

    handleClick = e => {
        e.preventDefault();
        const {optionTwo, optionOne} = this.state;
        if (optionTwo === '' || optionTwo === '') {
            return this.setState({
                message: "Option 1 and Option 2 are both required"
            })
        }
        const {username, history} = this.props;
        this.props.dispatch(
            handleCreateQuestion({
                author: username,
                optionOneText: optionOne,
                optionTwoText: optionTwo
            })
        );
        this.setState({
            message: ''
        });
        history.push('/');
    };

    render() {
        const {optionOne, optionTwo, message} = this.state;
        return (
            <Row>
                <Col span={2}/>
                <Col span={22}>
                    <Card className='new-question-card'
                          title="Would you rather..."
                    >
                        <Input
                            onChange={this.handleInput}
                            value={optionOne}
                            name="optionOne"
                            placeholder="Option One"
                        />
                        <div className='separator'>
                              <span className='middle-separator'>
                                or
                              </span>
                        </div>
                        <Input
                            onChange={this.handleInput}
                            value={optionTwo}
                            name="optionTwo"
                            placeholder="Option Two"
                        />
                        <Button className='submitBtn'
                                onClick={this.handleClick}
                                type="primary"
                                block>
                            Submit
                        </Button>
                        <div id='errorMessage'>{message &&
                        <Alert message={`Error: ${message}`} type="error"/>}</div>
                    </Card>
                </Col>
                <Col span={2}/>
            </Row>
        );
    }
}

const propsToState = ({username}) => {
    return {
        username
    };
};

export default connect(propsToState)(NewQuestion);
