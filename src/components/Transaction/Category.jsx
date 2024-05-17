import {
  Card,
  DatePicker,
  Flex,
  Input,
  Segmented,
  Select,
  Space,
  Tooltip,
} from "antd";
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
import EmojiPicker from "emoji-picker-react";

const Category = ({ openCategory }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addCat, setAddCat] = useState(false);
  const [transLoader, setTransLoader] = useState(false);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [newCategory, setNewcategory] = useState([]);

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
      className={`NewCategoryContainer`}
      initial={{ transform: "translateY(500px)" }}
      animate={{ transform: "translateY(0)" }}
      transition={{ duration: 0.6 }}
    >
      <Card
        title="New Category"
        extra={
          <CloseOutlined onClick={openCategory} className="closeNewCategoryBtn" />
        }
        className="CategoryPopPup"
      >
       <Card>
       <span className="capsule">{emoji}<Space/>{categoryName}</span>
       </Card>
        <form action="" onSubmit={addCategory} style={{ width: "300px" }}>
        
          <Flex vertical gap="1rem" justify="flex-end">
            <Flex>
              <Input
                placeholder="Your Category Name"
                variant="filled"
                suffix={<ProfileOutlined />}
                className="description"
                onChange={e => setCategoryName(e.target.value)}
                onClick={() => setEmojiPicker(false)}
              />
              <span
                className="AddCategoryBtn EmojiBtn"
                onClick={() => setEmojiPicker(!emojiPicker)}
                
              >
                {"🍔"}
              </span>
            </Flex>

            <motion.div
              initial={{ transform: openPopup && "translate(-300px)" }}
              animate={{ transform: "translate(0)" }}
              transition={{ duration: 0.3 }}
              className="EmojiPicker"
            >
              <Flex>
                <EmojiPicker
                  onEmojiClick={(e) => setEmoji(e.emoji)}
                  skinTonesDisabled
                  reactions={true}
                  height={350}
                  open={emojiPicker}
                  lazyLoadEmojis={true}
                />
              </Flex>
            </motion.div>

            <button className="btn" type="submit">
              {transLoader ? <LoadingOutlined /> : "New Category"}
            </button>
          </Flex>
        </form>
      </Card>
    </motion.div>
  );
};

export default Category;
