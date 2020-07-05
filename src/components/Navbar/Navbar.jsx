import React from "react";
import {Affix, Col, Row, Space} from "antd";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faComments, faUserCircle} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => (
        <Row justify="space-around">
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
);

export default NavBar