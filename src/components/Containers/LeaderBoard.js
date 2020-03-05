import React from "react";
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {Avatar, Badge, Card} from "antd";


class LeaderBoard extends React.Component {
    render() {
        const {users} = this.props;
        return (
        /* TODO: Users should be ordered in descending order based on the sum of the number of questions they’ve asked and
         the number of questions they’ve answered. The more questions you ask and answer, the higher up you move */
            Object.keys(users).map((user, index) => (
                <Card key={index} title={users[user].name}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <div className="img">
                            <Avatar size={64} src={users[user].avatarURL}/>
                        </div>
                        <div className="main">
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <span>Answered Questions </span>
                                    <span style={{
                                        marginLeft: '5px'
                                    }}> {Object.keys(users[user].answers).length}</span>
                                </div>
                                <hr/>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <span>Created Questions</span>
                                    <span>{users[user].questions.length}</span>
                                </div>
                            </div>
                        </div>
                        <div className="score">
                            <div>Score</div>
                            <hr/>
                            <Badge count={25}/>
                        </div>
                    </div>
                </Card>
            ))
        );
    }
}

const propsToState = ({users}) => {
    return {
        users
    }
};
export default connect(propsToState)(LeaderBoard);



