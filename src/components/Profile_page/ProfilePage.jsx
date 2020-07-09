import React, {useEffect} from 'react';
import {Row, Col, Layout, Menu} from "antd";
import UserInfo from "./Body/User_info/UserInfo";
import Posts from "./Body/Posts/Posts";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import MainUserInfo from "./Body/Main_info/MainUserInfo";
import s from './ProfilePage.module.scss'
import {getProfile, getStatus} from "../../redux/profile-reducer";

const {Content} = Layout;

const ProfilePage = (props) => {

    useEffect(() => {
        let { userID } = this.props.match.params;
        if (!userID) {
            userID = this.props.authID;
            if (!userID) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    },[])
    return (<Content className={s.profilePage}>
            <MainUserInfo/>
            <UserInfo/>
            <Posts/>
        </Content>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getProfile,getStatus}), withAuthRedirect)(ProfilePage);