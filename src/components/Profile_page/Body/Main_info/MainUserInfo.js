import {Avatar, Button, Col, Row} from "antd";
import React from "react";

const MainUserInfo = () => (
    <>
        <Row justify="space-around" align="middle">
            <Col><Avatar size="large"/></Col>
            <Col>
                <Row>Name</Row>
                <Row>Status</Row>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row justify="center">
            <Button type="primary">Edit page</Button>
        </Row>
    </>
)
export default MainUserInfo