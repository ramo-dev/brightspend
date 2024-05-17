import { Link } from "react-router-dom";
import "./PageNotFoundStyles.css";
import { Result } from "antd";

const PageNotFoundComponent = () => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/"><button className="btn Btn404">Back Home</button></Link>}
  />
  );
};

export default PageNotFoundComponent;
