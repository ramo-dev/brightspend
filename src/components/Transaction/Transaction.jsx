import {
  Card,
  DatePicker,
  Flex,
  Input,
  Segmented,
  Select,
  Tooltip,
} from "antd";
import "./TransactionStyles.css";
import {
  CloseOutlined,
  EditOutlined,
  LoadingOutlined,
  PlusOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import AllTransactions from "./AllTransactions";
import Statistics from "./Statistics";
import moment from "moment";
import { motion } from "framer-motion";

import { account } from "../../firebase/Config";
import { useNavigate } from "react-router-dom";
import Category from "./Category";

const Transaction = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cost, setCost] = useState(0);
  const [addTrans, setAddTrans] = useState(false);
  const [transLoader, setTransLoader] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [autoPopup, setAutoPopup] = useState(true);

  function handleNewTransactionPopup() {
    setLoading(true);
    const timer = setTimeout(() => {
      setOpenPopup(!openPopup);
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }

  function addTransaction(e) {
    e.preventDefault();
    setTransLoader(true);
    const timer = setTimeout(() => {
      setAddTrans(true);
      toast.success("Transaction added Successfully");
      setTransLoader(false);
      setOpenPopup(!openPopup);
    }, 500);
    return () => clearTimeout(timer);
  }

  function showCategoryPopup() {
    setShowCategory(!showCategory);
  }


 useEffect(()=>{
  setAutoPopup(openPopup);
  setTimeout(() => {
    setAutoPopup(false);
  }, 2000);
 },[openPopup])
  

  return (
    <>
      <section className="Transaction">
        <Toaster richColors position="top-right" />
        <Statistics />
        <AllTransactions />

        {/* Transaction Popuup */}
        {openPopup && (
          <motion.div
            className={`TransacrionContainer`}
            initial={{ transform: openPopup && "translate(-300px)" }}
            animate={{ transform: "translate(0)" }}
            transition={{ duration: 0.3 }}
          >
            <Card
              title="New Transaction"
              extra={
                <CloseOutlined
                  onClick={handleNewTransactionPopup}
                  className="closeNewTransBtn"
                />
              }
              className="card"
            >
              <span className="Cost">{cost}.ksh</span>

              <br />
              <form action="" onSubmit={addTransaction}>
                <Flex vertical gap="1rem" justify="flex-end">
                  <DatePicker className="datePicker" defaultValue={moment.isDate()} />
                  <Input
                    min={1}
                    placeholder="Enter Amount"
                    className="costInput"
                    type="number"
                    onChange={(e) => setCost(e.target.value)}
                    addonAfter={<>{".ksh"}</>}
                    required
                  />
                  <Segmented
                    options={["Expense", "Income", "Investment"]}
                    block
                    className="SelectCategory"
                    default={true}
                  />
                  <Flex>
                    <Select
                      defaultValue="Category"
                      variant="filled"
                      style={{
                        width: 120,
                      }}
                      options={[
                        {
                          value: "disabled",
                          label: "Category",
                          disabled: true,
                        },
                        {
                          value: "Food",
                          label: "Food",
                        },
                        {
                          value: "Bills",
                          label: "Bills",
                        },
                        {
                          value: "Travel",
                          label: "Travel",
                        },
                      ]}
                      className="type"
                    />
                    <Tooltip
                      title="New Category"
                      open={autoPopup}
                      placement="top"
                    >
                      <PlusOutlined
                        className="AddCategoryBtn"
                        onClick={showCategoryPopup}
                      />
                      {showCategory ? (
                        <Category openCategory={showCategoryPopup} />
                      ) : (
                        ""
                      )}
                    </Tooltip>
                  </Flex>
                  <Input
                    placeholder="Transaction Description"
                    variant="filled"
                    suffix={<ProfileOutlined />}
                    className="description"
                  />
                  <button className="btn" type="submit">
                    {transLoader ? <LoadingOutlined /> : "Add Transaction"}
                  </button>
                </Flex>
              </form>
            </Card>
          </motion.div>
        )}
      </section>
      {!openPopup ? (
        <button
          className="btn newTransactionBtn"
          onClick={handleNewTransactionPopup}
        >
          {loading ? <LoadingOutlined /> : <EditOutlined />}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Transaction;
