import React, {Component} from "react";
import {Menu} from "antd";

class Home extends Component {
    state = {
        current: 'unQuestions',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="unQuestions">
                    Unanswered Questions
                </Menu.Item>

                <Menu.Item key="ansQuestions">
                    Answered Questions
                </Menu.Item>
            </Menu>
        )
    }
}

export default Home