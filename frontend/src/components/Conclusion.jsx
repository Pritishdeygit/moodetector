import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/bg1.png";

const Conclusion = () => {
  const navigate = useNavigate();

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
      <h1 className="text-4xl font-bold text-purple-600 mt-6">🎉 Congratulations! 🎉</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl space-y-4">
        <p className="text-lg">
          You have completed the <span className="font-bold text-blue-600">Moodetective</span> game! 🕵️‍♂️
        </p>

        <p className="text-lg">
          Throughout this game, we learned how to understand feelings from words. 
          When someone writes a sentence, like “I got a gift!” or “I lost my toy 😭”, we can detect if they are happy, sad, angry, or neutral. 
        </p>

        <p className="text-lg">
          This process of looking at words in a sentence to understand emotions is called <span className="font-bold text-green-600">Sentiment Analysis</span> 📊.
        </p>

        <p className="text-lg">
          Sentiment analysis is used in many places:  
        </p>
        <ul className="list-disc list-inside text-left px-4">
          <li>Understanding how people feel about products or movies 🌟</li>
          <li>Chatbots knowing how to respond kindly 🤖</li>
          <li>Analyzing social media posts 📱</li>
          <li>Helping companies improve based on customer emotions ❤️</li>
        </ul>

        <p className="text-lg">
          By playing this game, you now know how AI can read words and guess feelings!  
          It’s like having a little detective inside your computer that understands emotions. 🕵️‍♂️💡
        </p>

        <p className="text-lg">
          Keep exploring, observe words carefully, and try to guess the feelings in sentences around you!  
          The more you practice, the better you become at understanding emotions.
        </p>
      </div>

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

export default Conclusion;
