import React from 'react';
import {Row, Col, Layout, Avatar, Button} from "antd";
import s from './Header.module.scss'

const { Header } = Layout;

const PageHeader = () => (
    <Header className={s.header}>
        <Row justify="space-around" align="middle">
            <Col><Avatar size="large"/></Col>
            <Col>
                <Row>Name</Row>
                <Row>Status</Row>
            </Col>
            <Col>Menu</Col>
        </Row>
        <Row justify="center">
            <Button type="primary">Edit page</Button>
        </Row>
    </Header>
);

export default PageHeader;