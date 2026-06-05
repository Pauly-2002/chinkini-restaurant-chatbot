import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa";

import { BsEmojiSmile } from "react-icons/bs";

import { IoMdClose } from "react-icons/io";

import { MdRestaurantMenu, MdSupportAgent } from "react-icons/md";

import { FaClipboardList } from "react-icons/fa";

import { BiSolidFoodMenu } from "react-icons/bi";

import sendChatToAI from "../../services/chatServices" 

const ChatbotWidget = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 Welcome to Online Relate Bot",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const [openChat, setOpenChat] = useState(false);

  if (!openChat) {
    return (
      <button
        onClick={() => {
          console.log("OPEN CHAT CLICKED");
          setOpenChat(true);
        }}
        className="fixed bottom-5 right-5 bg-[#CC0000] text-white p-5 rounded-full shadow-2xl hover:scale-110 duration-300"
      >
        <MdSupportAgent size={32} />
      </button>
    );
  }

  const sendMessage = async() => {
    console.log("SEND MESSAGE CLICKED 🚀");
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = input
    setInput("");

    try{
       const chatResult = await sendChatToAI(currentMessage);
         setMessages((prev) => [
        ...prev,
        {
          text: chatResult?.reply || "No response from server",
          sender: "bot",
        },
      ]);
    } catch(error){
      console.log(error)
      setMessages((prev)=>[
        ...prev,
        {text:"Server error ❌",
      sender:"bot",}
      ]
      )
    }
  };

  // QUICK BUTTON ACTIONS

  const addBotFlow = (userText, botText) => {
    setMessages((prev) => [
      ...prev,
      {
        text: userText,
        sender: "user",
      },
      {
        text: botText,
        sender: "bot",
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 w-[370px] h-[650px] bg-white rounded-3xl shadow-2xl border overflow-hidden flex flex-col">
      {/* HEADER */}

      <div className="bg-[#cc0000f5] text-white px-5 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg">Chikini Monie Bot</h1>

          <p className="text-sm text-green-100">Online</p>
        </div>

        <button
          onClick={() => setOpenChat(false)}
          className="hover:rotate-90 duration-300"
        >
          <IoMdClose size={24} />
        </button>
      </div>

      {/* CHAT AREA */}

      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 flex flex-col gap-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
              msg.sender === "user"
                ? "bg-[#cc0000f5] text-white self-end"
                : "bg-white text-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* QUICK ACTION BUTTONS */}

      <div className="px-3 py-3 border-t bg-white">
        <div className="flex flex-wrap gap-2">
          {/* ORDER */}

          <button
            onClick={() =>
              addBotFlow("Order", "What would you like to order today? 🍔")
            }
            className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm hover:scale-105 duration-200"
          >
            <FaClipboardList />
            Order
          </button>

          {/* RESERVATION */}

          <button
            onClick={() =>
              addBotFlow(
                "Reservation",
                "Please choose your reservation date 📅"
              )
            }
            className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:scale-105 duration-200"
          >
            <MdRestaurantMenu />
            Reservation
          </button>

          {/* MENU */}

          <button
            onClick={() => addBotFlow("Menu", "Here is today's menu 🍕🍟🥤")}
            className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm hover:scale-105 duration-200"
          >
            <BiSolidFoodMenu />
            Menu
          </button>

          {/* TICKET */}

          <button
            onClick={() =>
              addBotFlow("Ticket", "Please describe your issue or complaint 🎫")
            }
            className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm hover:scale-105 duration-200"
          >
            🎫 Ticket
          </button>

          {/* CUSTOMER SUPPORT */}

          <button
            onClick={() =>
              addBotFlow(
                "Customer Support",
                "Connecting you to customer support 👨‍💻"
              )
            }
            className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm hover:scale-105 duration-200"
          >
            <MdSupportAgent />
            Support
          </button>
        </div>
      </div>

      {/* INPUT AREA */}

      <div className="border-t bg-white px-3 py-3">
        <div className="flex items-center gap-2">
          {/* EMOJI */}

          <button className="text-gray-500 hover:text-green-600 duration-200">
            <BsEmojiSmile size={22} />
          </button>

          {/* ATTACHMENT */}

          <button className="text-gray-500 hover:text-green-600 duration-200">
            <FaPaperclip size={20} />
          </button>

          {/* INPUT */}

          <input
            type="text"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 border rounded-full px-4 py-3 outline-none text-sm"
          />

          {/* SEND */}

          <button
            onClick={sendMessage}
            className="bg-[#cc0000c9] cursor-pointer hover:bg-[#CC0000] text-white p-3 rounded-full duration-200"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
