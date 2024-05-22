import { Flex, Menu, Space, Typography } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/intelispend-favicon-black.png";
import {
  LogoutOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { account } from "../firebase/Config";
// import Meta from "antd/es/card/Meta";
import { signOut } from "firebase/auth";
import HomeMockup from "../assets/brightSpendMockup1_so.png";

const Home = () => {
  const [user, setUser] = useState(null);

  // Check if there is a User
  useEffect(() => {
    const unsubscribe = account.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <section>
      <Menu mode="horizontal" className="HomeNavbar">
        <Menu.Item key="logo" className="logo HomeLogo">
          <Link>
            <img src={Logo} alt="" />
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="mail" icon={<MailOutlined />} style={{ marginLeft: 'auto' }}>
        Settings
      </Menu.Item> */}
        {user ? (
          <SubMenu
            key="profile"
            icon={<UserOutlined />}
            title="Profile"
            style={{ marginLeft: "auto" }}
          >
            <Menu.Item key="setting:1" icon={<UserOutlined />}>
              <Link to="/dashboard">My Account</Link>
            </Menu.Item>
            <Menu.Item key="chat" icon={<MessageOutlined />}>
              <Link to="/dashboard/chat">Chat with Ai</Link>
            </Menu.Item>

            <Menu.Item key="setting:2" icon={<LogoutOutlined />}>
              <span onClick={() => account.signOut()}>Logout</span>
            </Menu.Item>
          </SubMenu>
        ) : (
          <>
            <Link to="/login" className="HomeLogin">
              <button className="btn ">Login</button>{" "}
            </Link>
          </>
        )}
      </Menu>

      <section className="Home">
        <Flex justify="space-between" align="center">
        <Flex vertical gap="2rem" className="HeroHome">
          <Typography.Title className="HomeTitle">
            Get
            Full Control of Your Spendings
          </Typography.Title>
          <Typography.Text className="HomeText">
            A powerful Tool that can help you stay organized and manage expenses Efficiently.
            Take control of your expenses and achieve your goal with our new interface
          </Typography.Text>
          {user ? (
            <Link to="/dashboard">
              <button className="btn">Go to Dashboard</button>
            </Link>
          ) : (
            <Link to="/register">
              <button className="btn">
                Get Started <Space />
                {">"}
              </button>
            </Link>
          )}
        </Flex>
        <img src={HomeMockup} alt="BrightSpendDemo" className="HomeMockup1" />
        </Flex>
      </section>
    </section>
  );
};

export default Home;
