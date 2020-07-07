import {Field, reduxForm} from "redux-form";
import React from "react";
import {Button, Checkbox} from "antd";

const LoginPageForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor='email'>Email</label>
            <Field name='email' component='input' type='text'/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <Field name='password' component='input' type='text'/>
        </div>
        <div>
            <Field type='checkbox' name='rememberMe' component='input'/>remember me
        </div>
        <div>
            <button type='submit' >Login</button>
        </div>
    </form>
)

export const LoginPageFormContainer = reduxForm({form: 'login'})(LoginPageForm)