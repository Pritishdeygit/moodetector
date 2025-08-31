import { useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImg from "../assets/bg1.png";

const SentimentIntro = () => {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const question = {
    text: "I lost my toy 😭. Guess my mood",
    correct: "Sad",
    options: ["Happy", "Sad", "Angry"],
  };

  const handleAnswer = (option) => {
    setQuizAnswer(option);
    if (option === question.correct) {
      setFeedback("✅ Correct! This sounds Sad.");
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center p-6 text-center space-y-6 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",          // make image cover entire div
        backgroundPosition: "center",     // center the image
        backgroundRepeat: "no-repeat",    // avoid repeating
      }}
    >
      <h1 className="text-3xl font-bold text-blue-600">Moodetective 🤖</h1>

      <p className="text-lg max-w-xl">
        Hi! I’m <span className="font-bold text-purple-600">Moodetective 🤖</span>.  
        I try to understand how people feel by looking at their words.  
      </p>

      <div className="space-y-4 max-w-xl text-left bg-gray-50 p-4 rounded-xl shadow-md">
        <p>Example: “I love ice cream 🍦” → 😊 (Happy)</p>
        <p>Example: “I feel sad today 😢” → 😢 (Sad)</p>
      </div>

      <div className="p-4 bg-gray-100 rounded-xl shadow-md max-w-md">
        <p className="mb-3 font-semibold">{question.text}</p>
        <div className="flex justify-center space-x-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`px-4 py-2 rounded-lg shadow-md ${
                quizAnswer === option
                  ? "bg-blue-500 text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && <p className="mt-3 font-medium">{feedback}</p>}
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500"
        >
          ⬅️ Back
        </button>
        <button
          onClick={() => navigate("/game1")} // updated to go to the quiz
          className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default SentimentIntro;
