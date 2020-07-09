import React, {useEffect} from 'react';
import {Row, Col, Layout, Menu} from "antd";import Posts from "./Body/Posts/Posts";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import MainUserInfo from "./Body/Main_info/MainUserInfo";
import s from './ProfilePage.module.scss'
import {getProfile, getStatus} from "../../redux/profile-reducer";
import Loader from "../Loader/Loader";

const {Content} = Layout;

const ProfilePage = ({profile, status, isAuth, authID, getProfile, getStatus, ...props}) => {

    useEffect(() => {
        debugger
        let userID = props.match.params.id;
        if (!userID) {
            debugger
            userID = authID;
            if (!userID) {
                props.history.push('/login');
            }
        }
        getProfile(userID);
        getStatus(userID);
    }, [])
    if (!profile) {
        return <Loader/>
    }
    return (
        <Content className={s.profilePage}>
            <MainUserInfo profile={profile} status={status}/>
            <Posts/>
        </Content>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    statusError: state.profile.statusError,
    isAuth: state.auth.isAuth,
    authID: state.auth.id,
})

export default compose(connect(mapStateToProps, {getProfile, getStatus}), withAuthRedirect)(ProfilePage);