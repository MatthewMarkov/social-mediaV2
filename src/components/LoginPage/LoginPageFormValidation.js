import React from "react";

export const validate = (values) => {
    debugger
    const errors = {}
    if (!values.email) {
        errors.email = 'required'
    }
    if (!values.password) {
        errors.password = 'required'
    }
    return errors
}
export const warn = (values) => {
    debugger
    const warnings = {}
    if (!values.email) {
        return
    } else if (values.email.length > 15) {
        warnings.email = 'seems that your email is too long'
    }
    if (!values.password) {
        return
    } else if (values.password.length > 10) {
        warnings.password = 'wow, you`ve got really good password!'
    }
    return warnings
}
export const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => {
    debugger
 return (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
 )}