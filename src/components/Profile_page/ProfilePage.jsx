import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import UserInfo from "./Body/User_info/UserInfo";
import PageHeader from "./Header/Header";
import Posts from "./Body/Posts/Posts";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";

const {  Footer, Sider, Content } = Layout;

const ProfilePage = (props) => (
    <Layout>
        <PageHeader/>
        <Content>
            <UserInfo/>
            <Posts/>
        </Content>
    </Layout>
);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(ProfilePage);