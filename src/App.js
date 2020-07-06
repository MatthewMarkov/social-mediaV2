import React from 'react';
import {Row, Col, Layout, Menu} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'
import {Route} from "react-router-dom";
import ProfilePage from "./components/Profile_page/ProfilePage";

const {  Footer, Sider, Content } = Layout;

const App = () => (
    <Layout>
        <Route path="/" component={ProfilePage}/>
        <Footer><NavBar/></Footer>

    </Layout>
);

export default App;