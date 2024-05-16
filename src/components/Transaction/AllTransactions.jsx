// import React from "react";
import { Card, Empty, Flex, Typography } from "antd";
// import { useState } from "react";
import "./TransactionStyles.css";
import Meta from "antd/es/card/Meta";
import { transactionsDummy } from "./Dummydata";
import { useEffect, useState } from "react";

const AllTransactions = () => {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    setTransaction(transactionsDummy);
  });

  return (
    <Flex>
      <div className="AllTransactions" wrap>
        <Flex vertical gap="1rem">
          <Card>
            <Typography.Title level={2}>Today</Typography.Title>
            <Flex vertical gap="1rem">
              {transactions.map((item) => (
                <Card hoverable key={item}>
                  <Flex gap="1rem">
                    <span className="emojiTransac">{item.emoji}</span>

                    <Flex style={{ width: "100%" }} justify="space-between">
                      <Flex vertical>
                        <Meta avatar={""} title={item.title}/>
                        <p>{item.description}</p>
                      </Flex>

                      <Meta avatar={""} title={item.amount} description={item.time} ellipsis={true}/>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Card>

          <Card>
            <Typography.Title level={2}>Yesterday</Typography.Title>
            <Card>
              <Flex justify="center">
                {/* <div className="box"></div> */}
                <Empty />
              </Flex>
            </Card>
          </Card>
          <Card>
            <Typography.Title level={2}>Earlier</Typography.Title>
            <Card>
              <Flex justify="center">
                {/* <div className="box"></div> */}
                <Empty />
              </Flex>
            </Card>
          </Card>
        </Flex>
      </div>
    </Flex>
  );
};

export default AllTransactions;
