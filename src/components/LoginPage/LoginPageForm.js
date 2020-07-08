import {Field, reduxForm} from "redux-form";
import React from "react";
import {renderField, validate, warn} from "./LoginPageFormValidation";

const LoginPageForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='email' component={renderField} type='text' label='email'/>
        </div>
        <div>
            <Field name='password' component={renderField} type='text' label='password'/>
        </div>
        <div>
            <Field type='checkbox' name='rememberMe' component='input'/>remember me
        </div>
        <div>
            <button type='submit' >Login</button>
        </div>
    </form>
)

export const LoginPageFormContainer = reduxForm({form: 'login', validate, warn})(LoginPageForm)