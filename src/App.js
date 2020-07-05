import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'
import PageHeader from "./components/Header/Header";

const {  Footer, Sider, Content } = Layout;

const App = () => (
    <Layout>
        <PageHeader/>
        <Content>Content</Content>
        <Footer><NavBar/></Footer>

    </Layout>
);

export default App;