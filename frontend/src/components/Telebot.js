import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // You may need to install axios: npm install axios
import logo from  '../assets/logo.png';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const str_time = `${hour}:${minute}`;
    const rawText = inputText;

    const userHtml = (
      <div key={messages.length} className="user-message">
        <div className="message">{rawText}</div>
        <div className="timestamp">{str_time}</div>
      </div>
    );

    setMessages([...messages, userHtml]);
    setInputText("");

    try {
      const response = await axios.post("/api/chatbot", { message: rawText });
      const botHtml = (
        <div key={messages.length + 1} className="bot-message">
          <div className="message">{response.data.message}</div>
          <div className="timestamp">{response.data.timestamp}</div>
        </div>
      );

      setMessages([...messages, botHtml]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div className="chat" style={{ maxWidth: "600px", width: "100%" }}>
          <div className="card" style={{ backgroundColor: "#f0f8ff", borderRadius: "15px" }}>
            <div className="card-header msg_head" style={{ backgroundColor: "#6495ed", color: "#fff", borderRadius: "15px 15px 0 0" }}>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src={logo}
                    className="rounded-circle user_img_msg"
                    alt="bot_avatar"
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                  />
                  <span className="online_icon"></span>
                </div>
                <div className="user_info" style={{ marginLeft: "10px" }}>
                  <h4>ChatBot</h4>
                  <p>Ask me anything!</p>
                </div>
              </div>
            </div>
            <div className="card-body msg_card_body" style={{ maxHeight: "200px", overflowY: "auto" }}>
              {messages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="card-footer" style={{ backgroundColor: "#f0f8ff", borderRadius: "0 0 15px 15px" }}>
              <form className="input-group" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="msg"
                  value={inputText}
                  placeholder="Type your message..."
                  autoComplete="off"
                  className="form-control type_msg"
                  style={{ borderRadius: "15px 0 0 15px" }}
                  onChange={(e) => setInputText(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button type="submit" className="input-group-text send_btn" style={{ borderRadius: "0 15px 15px 0" }}>
                    <i className="fas fa-location-arrow"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
