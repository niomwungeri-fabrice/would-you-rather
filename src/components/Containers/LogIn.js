import React, {Component} from "react";
import {Row, Col, Button, Select, Form} from 'antd';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

class Login extends Component {
    render() {
        const {users} = this.props;
        console.log(users, "=====from login");
        return (
            <div>
                <Row style={{
                    marginTop: "300px"
                }}>
                    <Col span={10}></Col>
                    <Col span={4}>
                        <Form
                            layout="horizontal"
                        >
                            <Form.Item>
                                <Select>
                                    {Object.keys(users).map(user => (
                                        <Select.Option key={user} value={user}>{users[user].name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Button type="primary" block>
                                login
                            </Button>
                        </Form>
                    </Col>
                    <Col span={10}></Col>
                </Row>
            </div>
        );
    }
};

const propsToState = ({users}) => {
    return {
        users
    }
};

export default withRouter(connect(propsToState)(Login))