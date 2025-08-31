import { useState } from "react";

const SentimentInfo = () => {
  const [userText, setUserText] = useState("");
  const [mood, setMood] = useState("");

  const detectMood = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("happy") || lowerText.includes("love")) return "😊 Happy";
    if (lowerText.includes("sad") || lowerText.includes("lost")) return "😢 Sad";
    if (lowerText.includes("angry") || lowerText.includes("mad")) return "😡 Angry";
    return "😐 Neutral";
  };

  const handleAnalyze = () => setMood(detectMood(userText));

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl mb-4">Try detecting mood yourself!</h1>
      <input
        type="text"
        placeholder="Type a sentence..."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        className="border p-2 w-80 rounded mb-4"
      />
      <button onClick={handleAnalyze} className="px-4 py-2 bg-blue-500 text-white rounded">
        Detect Mood
      </button>
      {mood && <p className="mt-4 text-xl">Your Mood: {mood}</p>}

      <button
        onClick={() => window.location.href = "/game"}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg"
      >
        Next: Play Game
      </button>
    </div>
  );
};

export default SentimentInfo;
