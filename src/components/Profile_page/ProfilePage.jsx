import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import UserInfo from "./Body/User_info/UserInfo";
import PageHeader from "./Header/Header";

const {  Footer, Sider, Content } = Layout;

const ProfilePage = () => (
    <Layout>
        <PageHeader/>
        <Content><UserInfo/></Content>
    </Layout>
);

export default ProfilePage;