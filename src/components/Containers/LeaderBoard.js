import React, {Fragment} from "react";
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import {HomeOutlined, LogoutOutlined, UserOutlined, DashboardOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import Home from "./Home";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthenticatedUser} from "../../redux/actions/users";

class LeaderBoard extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
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
            default:
                break;
        }
    };

    render() {
        const {username, users, dispatch} = this.props;
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
                        <span> Hello, {users[username].name}</span>
                    </Menu.Item>
                    <Menu.Item key="logout">
                        <Link onClick={() => (dispatch(setAuthenticatedUser('')))} to='/login'>
                            <LogoutOutlined/>logout
                        </Link>
                    </Menu.Item>
                </Menu>
                <div>
                    {this.componentsSwitch(this.state.current)}
                </div>
            </Fragment>
        );
    }
}

const propsToState = ({username, users}) => {
    return {
        username,
        users
    }
};
export default connect(propsToState)(LeaderBoard);
