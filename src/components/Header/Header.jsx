import React from 'react';
import {Row, Col, Layout, Avatar, Button, Input} from "antd";
import s from './Header.module.scss'
import logo from '../../assets/logo_for_header.png'
import { UserOutlined } from '@ant-design/icons';


const { Header } = Layout;

const PageHeader = () => (
    <Header className={s.header}>
        <Row className={s.wrapper} justify='space-around' align='middle'>
            <Col className={s.logo}><img src={logo} /></Col>
            <Col><Input placeholder='Search for user' prefix={<UserOutlined />}/></Col>
            <Col>Ava+name </Col>
        </Row>
    </Header>
);

export default PageHeader;