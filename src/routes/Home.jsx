import { Flex, Menu, Space, Typography } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/intelispend-favicon-black.png";
import { UserOutlined } from "@ant-design/icons";
import { account } from "../firebase/Config";

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
            <Menu.Item key="setting:1">My Account</Menu.Item>
            <Menu.Item key="setting:2">Logout</Menu.Item>
          </SubMenu>
        ) : (
          <Link to="/login" className="HomeLogin">
            <button className="btn ">Login</button>{" "}
          </Link>
        )}
      </Menu>

      <section className="Home">
        <Flex vertical gap="3rem">
          <Typography.Title className="HomeTitle">
          Brightspend
          </Typography.Title>
          <Typography.Text className="HomeText">
            Optimizing Your Financial <br />
            Management. With Ai
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
      </section>
    </section>
  );
};

export default Home;
