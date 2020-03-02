import React, {Fragment} from "react";
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import {HomeOutlined, LogoutOutlined, UserOutlined, DashboardOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import Home from "./components/Home";

class App extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    componentsSwitch = (key) => {
        switch (key) {
            case 'home':
                return (<Home/>);
            case 'newQuestion':
                return (<h1>newQuestion</h1>);
            case 'leaderBoard':
                return (<h1>Leader</h1>);
            case 'logout':
                return (<h1>logout</h1>);
            default:
                break;
        }
    };

    render() {
        return (
            <Fragment>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined/>
                        Home
                    </Menu.Item>

                    <Menu.Item key="newQuestion">
                        <QuestionCircleOutlined/>
                        New Question
                    </Menu.Item>
                    <Menu.Item key="leaderBoard">
                        <DashboardOutlined/>
                        Leader Board
                    </Menu.Item>
                    <Menu.Item style={{
                        marginLeft: "50px"
                    }}>
                        <UserOutlined/>
                        <span> Fabrice N</span>
                    </Menu.Item>
                    <Menu.Item key="logout">
                        <LogoutOutlined/>
                        Logout
                    </Menu.Item>
                </Menu>
                <div>
                    {this.componentsSwitch(this.state.current)}
                </div>
            </Fragment>
        );
    }
}

export default App;
