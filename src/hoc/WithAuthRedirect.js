import {Redirect} from "react-router-dom";
import React from "react";

export const withAuthRedirect = (Component) => {
    return (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...props}/>
    }
}