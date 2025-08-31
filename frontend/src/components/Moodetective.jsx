import { useState } from "react";
import Sentiment from "sentiment";
import { useNavigate, useLocation } from "react-router-dom";

import backgroundImg from "../assets/bg1.png";
const sentiment = new Sentiment();

const Moodetective = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const quizScore = location.state?.quizScore ?? 0;

  const analyzeMood = () => {
    if (!input.trim()) return;

    setLoading(true);

    const analysis = sentiment.analyze(input);
    let mood = "😐 Neutral";
    let moodText = "You seem neutral. 😐";

    if (analysis.score > 0) {
      mood = "😊 Happy";
      moodText = "Yay! You sound happy. 😊";
    } else if (analysis.score < 0) {
      mood = "😞 Sad";
      moodText = "Oh no! You sound sad. 😞";
    }

    setResult({ mood, moodText });
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center p-6 text-center space-y-6 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-purple-600">🎮 Moodetective Game</h1>

      {/* Quiz score card */}
      <div className="bg-white p-4 rounded-xl shadow-md w-80 text-center">
        <p className="text-lg font-semibold">🎯 Your Quiz Score:</p>
        <p className="text-2xl font-bold text-green-500">{quizScore} / 5</p>
      </div>

      {/* Instruction text */}
      <p className="text-lg max-w-md">
        Now let me try to guess the feelings by your sentence! 🕵️‍♂️
      </p>

      <input
        type="text"
        placeholder="Type your sentence..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded-lg w-80 text-black"
      />

      <button
        onClick={analyzeMood}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "⏳ Analyzing..." : "🔍 Detect Mood"}
      </button>

      {result && (
        <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md w-80 text-center space-y-2">
          <p className="text-2xl font-bold">{result.mood}</p>
          <p>{result.moodText}</p>

          {/* Button to go to conclusion */}
          <button
            onClick={() =>
              navigate("/conclusion", { state: { quizScore: quizScore } })
            }
            className="mt-2 px-6 py-2 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-600"
          >
            🎓 See Conclusion
          </button>
        </div>
      )}

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500"
        >
          ⬅️ Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600"
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
};

export default Moodetective;
