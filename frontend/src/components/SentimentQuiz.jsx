import { useState } from "react";
import backgroundImg from "../assets/bg1.png";

const SentimentQuiz = ({ onFinish }) => {
  const questions = [
    { text: "I got a gift from my friend!", answer: "Happy" },
    { text: "I lost my favorite toy.", answer: "Sad" },
    { text: "I can't wait for the party!", answer: "Excited" },
    { text: "My ice cream fell on the floor.", answer: "Sad" },
    { text: "I won the game!", answer: "Happy" },
  ];

  const options = ["Happy", "Sad", "Angry", "Excited", "Neutral"];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelected("");
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
      } else {
        onFinish(score + (option === questions[currentQ].answer ? 1 : 0));
      }
    }, 800); // short delay for feedback
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 space-y-6"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-purple-600">🎯 Mood Quiz</h1>

      {/* Instruction */}
      <p className="text-lg max-w-md text-center bg-white p-3 rounded-xl shadow-md">
        I will give you a sentence. Try to guess my mood! 🕵️‍♂️
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center space-y-4">
        <p className="text-lg font-semibold">"{questions[currentQ].text}"</p>
        <div className="flex flex-wrap justify-center gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className={`px-4 py-2 rounded-lg shadow-md border font-medium ${
                selected === opt
                  ? opt === questions[currentQ].answer
                    ? "bg-green-400 text-white"
                    : "bg-red-400 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <p className="font-medium">Score: {score}</p>
      </div>
    </div>
  );
};

export default SentimentQuiz;
