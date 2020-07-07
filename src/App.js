import React, {useEffect, useState} from 'react';
import {Row, Col, Layout, Menu, Spin, Affix} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'
import {Redirect, Route} from "react-router-dom";
import ProfilePage from "./components/Profile_page/ProfilePage";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import LoginPage from "./components/LoginPage/LoginPage";

const {  Footer, Sider, Content } = Layout;


const App = (props) => {
    useEffect(() => {
        debugger
        props.initializeApp()
    },[])
    if (!props.isFetchingCompleted) {
        debugger
        return <div className="spinner"><Spin size="large" /></div>
    }
    return (
    <Layout className="app-wrapper">
        {!props.initialized &&  <Redirect to="/login"/>}
        <Route exact path="/" component={ProfilePage}/>
        <Route path="/login" component={LoginPage}/>
        <Footer><NavBar/></Footer>
    </Layout>
)};

const mapStateToProps = (state) => ({
    isFetchingCompleted: state.app.isFetchingCompleted,
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);