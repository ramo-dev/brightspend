import { Card, DatePicker, Flex, Input, Segmented, Select, Tooltip } from "antd";
import "./CategoryStyles.css";
import {
  CloseOutlined,
  LoadingOutlined,
  PlusOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";




const Category = ({openCategory}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addCat, setAddCat] = useState(false);
  const [transLoader, setTransLoader] = useState(false);


  function addCategory(e) {
    e.preventDefault();
    setTransLoader(true);
    const timer = setTimeout(() => {
      setAddCat(true);
      toast.success("Transaction added Successfully");
      setTransLoader(false);
      setOpenPopup(!openPopup);
    }, 500);
    return () => clearTimeout(timer);
  }


  return (
    <motion.div
    className={`TransacrionContainer`}
    initial={{ transform: "translateY(500px)" }}
    animate={{ transform: "translateY(0)" }}
    transition={{ duration: 0.6 }}
  >
        <Card
          title="New Category"
          extra={
            <CloseOutlined
              onClick={openCategory}
              className="closeNewTransBtn"
            />
          }
          className="CategoryPopPup"
        >

          <form action="" onSubmit={addCategory}>
            <Flex vertical gap="1rem" justify="flex-end">
              <Segmented
                options={["Expense", "Income", "Investment"]}
                block
                className="SelectCategory"
                default={true}
              />
              <Flex>
                
                <Tooltip title="Add Category" >
                <PlusOutlined className="AddCategoryBtn" />
                
                </Tooltip>
              </Flex>
              <Input
                placeholder="Transaction Description"
                variant="filled"
                suffix={<ProfileOutlined />}
                className="description"
              />
              <button className="btn" type="submit">
                {transLoader ? <LoadingOutlined /> : "New Category"}
              </button>
            </Flex>
          </form>
        </Card>
</motion.div>
  )
}

export default Category