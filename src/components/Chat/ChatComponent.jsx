import React, { useEffect, useState } from "react";
import { Card, Input, Button, Spin, Flex, Empty, Tooltip } from "antd";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitization
import "./ChatComponent.css";
import { Link } from "react-router-dom";

const ChatComponent = () => {
  const [myText, setMyText] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tooltip, showTooltip] = useState(true);


//   UseEffect to show tooltip
  useEffect(() => {
    setConversation([]);
    const timer = setTimeout(() => {
      showTooltip(false);
    }, 3000);

    //    cleanUp code after mount
    return () => {
      clearTimeout(timer);
    };
  }, []);


//   function to wake up server
  async function getAiResponse(myText = "hello") {
    setLoading(true);
    try {
      const resp = await fetch("https://brightspendai.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText: myText }),
      });
      const data = await resp.json();
      if (data.BrightSpendAI) {
        const sanitizedResponse = DOMPurify.sanitize(data.BrightSpendAI); // Sanitize HTML
        setConversation((prev) => [
          ...prev,
          { type: "ai", text: sanitizedResponse },
        ]);
      } else {
        console.error("Unexpected response structure:", data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

//   function to handle submit

  function handleSubmit(e) {
    e.preventDefault();
    if (myText.trim() !== "") {
      setConversation((prev) => [...prev, { type: "user", text: myText }]);
      getAiResponse(myText);
      setMyText(""); // Clear the input after sending
    }
  }


//   function to handle text input
  function handleYourText(e) {
    setMyText(e.target.value);
  }

  return (
    <Flex justify="center">
      <div className="chat-card">
        <Flex>
          <Link to="/dashboard">
            {" "}
            <Tooltip title="home" open={tooltip}>
              <CloseOutlined className="closeNewCategoryBtn" />
            </Tooltip>
          </Link>

          <h2>BrightSpendAI</h2>
        </Flex>
        <div className="chat-container">
          <Card className="response-card">
            {conversation.length > 0 ? (
              conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`message-bubble ${
                    msg.type === "ai" ? "ai-response" : "my-response"
                  }`}
                >
                  {msg.type === "ai" ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              ))
            ) : (
              <Empty
                description={<div><p>Don't be shy send a Text To Talk</p><p> to BrightSpend Ai</p></div>}
                className="EmptyChatbotDesc"
              />
            )}

            {loading ? (
              <div className="loading-bubble">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
              </div>
            ) : null}
          </Card>
          <form onSubmit={handleSubmit} className="chat-form">
            <Tooltip title="click here to begin chat" open={tooltip}>
              <Input
                className="chat-input input"
                placeholder="Type your message..."
                value={myText}
                onChange={handleYourText}
              />
            </Tooltip>
            <Button type="primary" htmlType="submit" className="chat-button">
              Send
            </Button>
          </form>
        </div>
      </div>
    </Flex>
  );
};

export default ChatComponent;
