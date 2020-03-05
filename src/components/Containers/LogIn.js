import React, {Component} from "react";
import {Row, Col, Button, Select, Form} from 'antd';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {withRouter, Redirect} from 'react-router-dom'
import {setAuthenticatedUser} from '../../redux/actions/users';

class Login extends Component {
    state = {
        username: '',
        validationMessage: '',
        redirectToReferrer: false
    };
    handleLogin = () => {
        const {dispatch, history} = this.props;
        if (this.state.username === '') {
            this.setState({
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
        const {redirectToReferrer} = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from}/>
        }

        return (
            <div>
                <Row style={{
                    marginTop: "300px"
                }}>
                    <Col span={9}/>
                    <Col span={6}>
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
                            <div>{this.state.validationMessage}</div>
                        </Form>
                    </Col>
                    <Col span={9}/>
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