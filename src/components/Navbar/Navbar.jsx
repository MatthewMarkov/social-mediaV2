import React from "react";
import {Affix, Col, Row} from "antd";
import {NavLink} from "react-router-dom";
import {
    MessageOutlined,
    UserOutlined
} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faComments, faUserCircle} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => (
    <Affix style={{position: 'absolute'}}>
        <Row>
            <Col>
                <NavLink to="/users"><FontAwesomeIcon icon={faUsers}/></NavLink>
            </Col>
            <Col>
                <NavLink to="/messages"><FontAwesomeIcon icon={faComments}/></NavLink>
            </Col>
            <Col>
                <NavLink to="/"><FontAwesomeIcon icon={faUserCircle}/></NavLink>
            </Col>
        </Row>
    </Affix>

);

export default NavBar