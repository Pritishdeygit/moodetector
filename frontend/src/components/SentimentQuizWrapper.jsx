import { useNavigate } from "react-router-dom";
import SentimentQuiz from "./SentimentQuiz";

const SentimentQuizWrapper = () => {
  const navigate = useNavigate();

  const handleFinish = (score) => {
    // Redirect to Moodetective with quiz score
    navigate("/game2", { state: { quizScore: score } });
  };

  return <SentimentQuiz onFinish={handleFinish} />;
};

export default SentimentQuizWrapper;
