import React from "react";
import {Button, Layout} from "antd";
import {LoginPageFormContainer} from "./LoginPageForm";
import {logIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './LoginPage.module.scss'

const {Header, Footer, Content} = Layout


const LoginPage = (props) => {
    const onSubmit = (loginData) => {
        props.logIn(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha)
    }
/*
    if (props.isAuth) {return <Redirect to='/'/>}
*/
    return (
        <Layout className={s.wrapper}>
            <Header>
                Please, enter your data to log in
            </Header>
            <Content>
                <LoginPageFormContainer onSubmit={onSubmit}/>
                <div>Have not sigh up yet?</div>
                <Button type='primary' href='https://social-network.samuraijs.com/signUp' target='_blank'>SignUp</Button>
            </Content>
        </Layout>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn})(LoginPage)