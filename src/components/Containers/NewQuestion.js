import React from "react";
import {Button, Input, Card} from "antd";

const NewQuestion = () => {
    return (
        <div>
            <Card title="Default size card" style={{width: 600, marginTop: "10px"}}>
                <Input placeholder="Option One"/>
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
                <Input placeholder="Option Two"/>
                <Button style={{
                    marginTop: '10px'
                }} type="primary" block>Submit</Button>
            </Card>
        </div>)
};

export default NewQuestion