import React from 'react';
import './App.scss';
import {Row, Col, Layout, Menu} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
    <Layout className="app-wrapper">
        <Header className="header">
            <Row justify="space-around">
                <Col>Avatar</Col>
                <Col>Info</Col>
                <Col>Menu</Col>
            </Row>
        </Header>
        <Content>Content</Content>
        <Footer><NavBar/></Footer>

    </Layout>
);

export default App;