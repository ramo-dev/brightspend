import React from "react";
import { Card, Flex, Typography } from "antd";
import { useState } from "react";
import "./TransactionStyles.css";

const AllTransactions = () => {
  const [transactions, setTransaction] = useState([]);

  return (
    <Flex>
      <div className="AllTransactions" wrap>
        <Flex vertical gap="1rem">
          <Card>
            <Typography.Title level={2}>Today</Typography.Title>

            <Flex gap="1rem" justify="start">
              <div className="box">
                <img
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                  alt="transactionIcon"
                  className="transactionIcon"
                />
              </div>
              <Flex justify="space-around" align="center" className="TransactionBox">
                <Flex vertical justify="start">
                  <span className="transactionTitle">Drinks</span>
                  <span className="transactionDescription">some Description</span>
                </Flex>
                <Flex vertical justify="end" style={{textAlign : "end", marginLeft: 'auto'}}>
                  <span className="transactionTitle">-300/Ksh</span>
                  <span className="transactionTime">10:00 Am</span>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Typography.Title level={2}>Yesterday</Typography.Title>
            <Card>
              <Flex>
                <div className="box"></div>
              </Flex>
            </Card>
          </Card>
          <Card>
            <Typography.Title level={2}>Earlier</Typography.Title>
            <Card>
              <Flex>
                <div className="box"></div>
              </Flex>
            </Card>
          </Card>
          
        </Flex>
      </div>
    </Flex>
  );
};

export default AllTransactions;
