import { Card, Col, Empty, Flex, Row, Statistic, Typography } from "antd";
import "./StatisticsStyles.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const Statistics = () => {
  return (
    <div className="statistics">
      <Card>
        <Typography.Title level={2}>Stats</Typography.Title>
        <Card>
          <Flex justify="center" gap="1rem">
            <Card hoverable title="Expenditure rate">
              <Statistic
                
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>

            <Card hoverable title="Income rate">
              <Statistic
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Flex>
        </Card>
      </Card>
    </div>
  );
};

export default Statistics;
