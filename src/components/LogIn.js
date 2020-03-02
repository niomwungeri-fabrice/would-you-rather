import React, {Component} from "react";
import {Row, Col, Button, Select, Form} from 'antd';

class Login extends Component {

    render() {
        return (
            <div>
                <Row style={{
                    marginTop: "300px"
                }}>
                    <Col span={10}></Col>
                    <Col span={4}>
                        <Form
                            block
                            layout="horizontal"
                        >
                            <Form.Item>
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
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
export default Login