import React from 'react';
import {Button, Input, Card, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {handleCreateQuestion} from '../../redux/actions/questions';
import '../../resources/css/newQuestion.css';
import '../../resources/css/shared.css';

class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    };

    handleInput = ({target: {value, name}}) => {
        this.setState({[name]: value});
    };

    handleClick = e => {
        e.preventDefault();
        const {username, history} = this.props;
        const {optionTwo, optionOne} = this.state;
        this.props.dispatch(
            handleCreateQuestion({
                author: username,
                optionOneText: optionOne,
                optionTwoText: optionTwo
            })
        );
        history.push('/');
    };

    render() {
        const {optionOne, optionTwo} = this.state;
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
