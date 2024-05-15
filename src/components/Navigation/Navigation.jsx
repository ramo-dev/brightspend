import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
import "./NavbarStyles.css";
import Logo from "../../assets/intelispend-favicon-black.png";

const { SubMenu } = Menu;

const Navbar = () => {
  return (
    <Menu mode="horizontal" className='Navbar'>
      <Menu.Item key="logo" className='logo'><img src={Logo} alt="" /></Menu.Item>
      {/* <Menu.Item key="mail" icon={<MailOutlined />} style={{ marginLeft: 'auto' }}>
        Settings
      </Menu.Item> */}
      <Menu.Item key="notification" icon={<BellOutlined />} style={{ marginLeft: 'auto' }}>
        Notifications
      </Menu.Item>
      <Menu.Item key="chat" icon={<MessageOutlined />} >
        Chat
      </Menu.Item>
      <SubMenu key="profile" icon={<UserOutlined />} title="Profile">
        <Menu.Item key="setting:1">My Account</Menu.Item>
        <Menu.Item key="setting:2">Logout</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;
