import React, {useEffect, useState} from 'react';
import {Row, Col, Layout, Menu, Spin, Affix} from "antd";
import NavBar from "./components/Navbar/Navbar";
import './App.scss'
import {Switch, Route} from "react-router-dom";
import ProfilePage from "./components/Profile_page/ProfilePage";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import LoginPage from "./components/LoginPage/LoginPage";
import SideMenu from "./components/SideMenu/SideMenu";
import PageHeader from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const {Footer} = Layout;


const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, [])
    if (!props.isFetchingCompleted) {
        return <Loader/>
    }
    return (
        <Layout className="app-wrapper">
            <PageHeader/>
            <Layout>
                <SideMenu/>
                <Switch>
                    <Route exact path="/" component={ProfilePage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route path="/profile/:id" component={ProfilePage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </Layout>
        </Layout>
    )
};

const mapStateToProps = (state) => ({
    isFetchingCompleted: state.app.isFetchingCompleted,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {initializeApp})(App);