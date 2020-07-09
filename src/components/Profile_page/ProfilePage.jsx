import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import UserInfo from "./Body/User_info/UserInfo";
import Posts from "./Body/Posts/Posts";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import MainUserInfo from "./Body/Main_info/MainUserInfo";
import s from './ProfilePage.module.scss'

const {Content } = Layout;

const ProfilePage = (props) => (
        <Content className={s.profilePage}>
            <MainUserInfo/>
            <UserInfo/>
            <Posts/>
        </Content>
);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(ProfilePage);