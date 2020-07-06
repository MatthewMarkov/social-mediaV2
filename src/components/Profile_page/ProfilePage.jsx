import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import UserInfo from "./Body/User_info/UserInfo";
import PageHeader from "./Header/Header";
import Posts from "./Body/Posts/Posts";

const {  Footer, Sider, Content } = Layout;

const ProfilePage = () => (
    <Layout>
        <PageHeader/>
        <Content>
            <UserInfo/>
            <Posts/>
        </Content>
    </Layout>
);

export default ProfilePage;