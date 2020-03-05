import React from "react";
import {Avatar, Button, Menu} from 'antd';
import 'antd/dist/antd.css';
import {HomeOutlined, LogoutOutlined, DashboardOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthenticatedUser} from "../../redux/actions/users";
import {toggleNav} from '../../redux/actions/nav';

class Nav extends React.Component {


    render() {
        const {username, users, dispatch, current} = this.props;
        return (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Menu style={{
                            textAlign: 'center'
                        }} onClick={(e) => (dispatch(toggleNav(e.key)))} selectedKeys={[current]}
                              mode="horizontal">
                            <Menu.Item key="home">
                                <Link to='/'><HomeOutlined/> home</Link>
                            </Menu.Item>
                            <Menu.Item key="newQuestion">
                                <Link to='/add'><QuestionCircleOutlined/> New Question</Link>
                            </Menu.Item>
                            <Menu.Item key="leaderBoard">
                                <Link to='/leaderboard'>  <DashboardOutlined/> Leader Board</Link>
                            </Menu.Item>
                        </Menu>
                        <div>
                            <Avatar
                                src={users[username].avatarURL}/>
                            <span> Hello, {users[username].name}</span>

                            <Button type='primary' style={{
                                marginTop: '10px',
                                marginLeft: '15px'
                            }} onClick={() => {
                                dispatch(dispatch(toggleNav('home')));
                                dispatch(setAuthenticatedUser(null))
                            }} to='/login'>
                                <LogoutOutlined/>logout
                            </Button>
                        </div>
                    </div>
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
