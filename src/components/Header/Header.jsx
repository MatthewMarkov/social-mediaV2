import React from 'react';
import {Row, Col, Layout, Avatar, Button} from "antd";
import s from './Header.module.scss'

const { Header } = Layout;

const PageHeader = () => (
    <Header className={s.header}>
        <Row justify={'space-around'}>
            <Col>Logo</Col>
            <Col>Search users</Col>
            <Col>Ava+name </Col>
        </Row>
    </Header>
);

export default PageHeader;