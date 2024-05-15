import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./UiStyles.css";
import { Tooltip } from "antd";

const BackButton = () => {
  return (
    <Tooltip title="Home">
        <div className="backButton">
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>
    </div>
    </Tooltip>
  );
};

export default BackButton;
