import React from "react";
import {Button, Input, Card} from "antd";
import {connect} from "react-redux";
import {handleCreateQuestion} from '../../redux/actions/questions';

class NewQuestion extends React.Component {
    state = {
        optionOne: "",
        optionTwo: "",
    };

    handleInput = ({target: {value, name}}) => {
        this.setState({[name]: value});
    };

    handleClick = (e) => {
        e.preventDefault();
        const {username} = this.props;
        const {optionTwo, optionOne} = this.state;
        this.props.dispatch(handleCreateQuestion({
            author: username,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }))
    };

    render() {
        const {optionOne, optionTwo} = this.state;
        return (
            <div>
                <Card title="Would you rather..." style={{width: 600, marginTop: "10px"}}>
                    <Input
                        onChange={this.handleInput}
                        value={optionOne} name='optionOne'
                        placeholder="Option One"/>
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        borderBottom: '1px solid #000',
                        lineHeight: '0.1em',
                        margin: '20px 0 20px',
                    }}>
                    <span style={{
                        background: "#fff",
                        padding: "0 10px",
                    }}>or</span>
                    </div>
                    <Input
                        onChange={this.handleInput}
                        value={optionTwo}
                        name='optionTwo'
                        placeholder="Option Two"/>
                    <Button onClick={this.handleClick} style={{
                        marginTop: '10px'
                    }} type="primary" block>Submit</Button>
                </Card>
            </div>)
    }
};

const propsToState = ({username}) => {
    return {
        username,
    }
};

export default connect(propsToState)(NewQuestion);