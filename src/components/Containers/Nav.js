import React from "react";
import {Col, Menu, Row} from 'antd';
import 'antd/dist/antd.css';
import {HomeOutlined, LogoutOutlined, UserOutlined, DashboardOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import Home from "./Home";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthenticatedUser} from "../../redux/actions/users";
import LeaderBoard from "./LeaderBoard";
import Questions from "./Questions";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import {toggleNav} from '../../redux/actions/nav'

class Nav extends React.Component {

    componentsSwitch = (key) => {
        switch (key) {
            case 'home':
                return (<Home/>);
            case 'questions':
                return (<Questions/>);
            case 'question':
                return (<Question/>);
            case 'newQuestion':
                return (<NewQuestion/>);
            case 'leaderBoard':
                return (<LeaderBoard/>);
            default:
                break;
        }
    };

    render() {
        const {username, users, dispatch, current} = this.props;
        return (
            <Row>
                <Col span={4}/>
                <Col span={16}>
                    <Menu onClick={(e) => (dispatch(toggleNav(e.key)))} selectedKeys={[current]}
                          mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined/>
                            Home
                        </Menu.Item>

                        <Menu.Item key="questions">
                            <QuestionCircleOutlined/>
                            Questions
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
                            <Link onClick={() => (dispatch(setAuthenticatedUser(null)))} to='/login'>
                                <LogoutOutlined/>logout
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <div>
                        {this.componentsSwitch(current)}
                    </div>
                </Col>
                <Col span={4}/>
            </Row>
        );
    }
}

const propsToState = ({username, users, current}) => {
    return {
        username,
        users,
        current
    }
};
export default connect(propsToState)(Nav);
