const ChatBubble = ({ sender, text, img }) => {
  const isBot = sender === "bot";

  return (
    <div className={`flex items-start mb-4 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
          <img src={img} alt="avatar" className="w-6 h-6 rounded-full" />
        </div>
      )}
      <div
        className={`px-3 py-2 rounded-2xl max-w-xs text-sm ${
          isBot ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
        }`}
      >
        {text}
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-300 ml-2 flex items-center justify-center">
          <img src={img} alt="avatar" className="w-6 h-6 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
