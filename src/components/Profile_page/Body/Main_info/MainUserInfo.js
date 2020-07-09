import {Avatar, Button, Col, Row} from "antd";
import React from "react";
import UserIcon from './../../../../assets/user.png'
import s from './MainInfo.module.scss'

const MainUserInfo = (props) => (
    <>
        <Row className={s.wrapper} justify="space-around" align="middle">
            <Col className={s.firstCol}>
                <img src={props.profile.photos.large || UserIcon}/>
            </Col>
            <Col className={s.secondCol}>
                <Row>Name</Row>
                <Row>Status</Row>
                <Row><Button>Show additional info</Button></Row>
            </Col>
        </Row>
    </>
)
export default MainUserInfo