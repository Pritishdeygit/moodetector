import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBubble from "./ChatBubble";
import robotImg from "../assets/robot.png";
import backgroundImg from "../assets/bg1.png";
import childImg from "../assets/child.png";

const conversation = [
  { sender: "child", text: "Hey AI, I am feeling awesome today" },
  { sender: "bot", text: "OK, but Why?" },
  { sender: "child", text: "I won the quiz at my school today" },
  { sender: "bot", text: "Oh! That explains why you are so happy today" },
  { sender: "child", text: "Wait, you dont have a heart, how did you know I was happy?" },
  { sender: "bot", text: "From your words" },
  { sender: "child", text: "from my words? HOW?" },
  { sender: "bot", text: "Come, let us play a game to explain this" }
];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < conversation.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, conversation[index]]);
        setIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center space-y-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-full max-w-md h-[70vh] flex flex-col justify-end p-4 bg-white rounded-2xl shadow-lg border overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <ChatBubble
            key={i}
            sender={msg.sender}
            text={msg.text}
            img={msg.sender === "bot" ? robotImg : childImg}
          />
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition"
        >
          Back
        </button>

        {index === conversation.length && (
          <button
            onClick={() => navigate("/intro")}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
