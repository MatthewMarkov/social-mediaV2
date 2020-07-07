import React from "react";
import {Layout} from "antd";
import {LoginPageFormContainer} from "./LoginPageForm";
import {logIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const {Header, Footer, Content} = Layout


const LoginPage = (props) => {
    const onSubmit = (loginData) => {
        debugger
        props.logIn(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha)
    }
    return (
        <Layout>
            <Header>
                Please, enter your data to log in
            </Header>
            <Content>
                <LoginPageFormContainer onSubmit={onSubmit}/>
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
}


export default connect(null, {logIn})(LoginPage)