import {Avatar, Button, Col, Divider, Row} from "antd";
import React, {useState} from "react";
import UserIcon from './../../../../assets/user.png'
import s from './MainInfo.module.scss'


const MainUserInfo = ({profile, status}) => {
    const [isContactsShown, showContacts] = useState(false)
    return (
        <>
            <Row className={s.wrapper} justify="space-around" align="top">
                <Col className={s.firstCol}>
                    <img src={profile.photos.large || UserIcon}/>
                </Col>
                <Col className={s.secondCol}>
                    <Row>{profile.fullName}</Row>
                    <Row>{status}</Row>
                    <Divider/>
                    <Row>About me:{profile.aboutMe}</Row>
                    <Row>Looking for a job:{profile.lookingForAJob ? 'yes' : 'no'}</Row>
                    {profile.lookingForAJob ? (
                        <Row>
                            work status:
                            {profile.lookingForAJobDescription}
                        </Row>
                    ) : null}
                    <Row>{isContactsShown ? <Button onClick={() => {
                        showContacts(false)
                    }}>Hide contacts</Button> : <Button onClick={() => {
                        showContacts(true)
                    }}>Show contacts</Button>}</Row>
                    {isContactsShown ? <Contacts profile={profile}/> : null}
                </Col>
            </Row>
        </>
    )
}
export default MainUserInfo

const Contacts = ({profile}) => {
    return (
        <>
            <Row>Contacts:</Row>
            {Object.keys(profile.contacts)
                .map((key) => (
                    <Row>
                        {key}:{profile.contacts[key]}
                    </Row>
                ))}
        </>
    )
}