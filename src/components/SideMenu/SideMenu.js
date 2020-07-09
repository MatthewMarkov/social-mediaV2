import React from "react";
import {Layout, Menu} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faUserCircle, faUsers} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import s from './SideMenu.module.scss'

const {Sider} = Layout
const SideMenu = () => (
    <Sider className={s.sideMenu}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <div className="logo" />
        <Menu className={s.menu} mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
                <NavLink to="/users"><FontAwesomeIcon icon={faUsers}/>Friends</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/messages"><FontAwesomeIcon icon={faComments}/>Messages</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to="/"><FontAwesomeIcon icon={faUserCircle}/>My profile</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
                Logout
            </Menu.Item>
        </Menu>
    </Sider>
)
export default SideMenu