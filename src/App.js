import React, {useEffect, useState} from 'react';
import {Row, Col, Layout, Menu, Spin, Affix} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'
import {Route} from "react-router-dom";
import ProfilePage from "./components/Profile_page/ProfilePage";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

const {  Footer, Sider, Content } = Layout;


const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    },[])
    if (!props.initialized) {
        return <div className="spinner"><Spin size="large" /></div>
    }
    return (
    <Layout className="app-wrapper">
        <Route path="/" component={ProfilePage}/>
        <Footer><NavBar/></Footer>
    </Layout>
)};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);