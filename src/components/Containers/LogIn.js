import React, {Component} from "react";
import {Row, Col, Button, Select, Form, Alert} from 'antd';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {withRouter, Redirect} from 'react-router-dom'
import {setAuthenticatedUser} from '../../redux/actions/users';

class Login extends Component {
    state = {
        username: null,
        validationMessage: '',
        redirectToReferrer: false
    };
    handleLogin = () => {
        const {dispatch, history} = this.props;
        if (this.state.username === null) {
            return this.setState({
                validationMessage: "Please select user"
            })
        }
        this.setState({
            redirectToReferrer: true
        });
        dispatch(setAuthenticatedUser(this.state.username));
        history.push('/')
    };

    handleChange = (e) => {
        this.setState({
            username: e
        })
    };

    render() {
        const {users} = this.props;
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer, validationMessage} = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from}/>
        }

        return (
            <div>
                <Row style={{
                    marginTop: "300px"
                }}>
                    <Col span={7}/>
                    <Col span={8}>
                        <Form
                            layout="horizontal"
                        >
                            <Form.Item>
                                <Select
                                    onChange={this.handleChange}>
                                    {Object.keys(users).map(user => (
                                        <Select.Option key={user} value={user}>{users[user].name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Button onClick={this.handleLogin} type="primary" block>
                                login
                            </Button>
                            <div style={{
                                marginTop: '5px'
                            }}>{validationMessage && <Alert message={`Error: ${validationMessage}`} type="error"/>}</div>
                        </Form>
                    </Col>
                    <Col span={7}/>
                </Row>
            </div>
        );
    }
}

const propsToState = ({users}) => {
    return {
        users,
    }
};

export default withRouter(connect(propsToState)(Login))