import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBox from "./components/chatBox";
import SentimentIntro from "./components/SentimentIntro";
import SentimentQuizWrapper from "./components/SentimentQuizWrapper"; // quiz wrapper
import Moodetective from "./components/moodetective";
import Conclusion from "./components/Conclusion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatBox />} />             {/* First page */}
        <Route path="/intro" element={<SentimentIntro />} /> {/* Sentiment Intro */}
        <Route path="/game1" element={<SentimentQuizWrapper />} /> {/* Quiz */}
        <Route path="/game2" element={<Moodetective />} />  {/* Moodetective */}
        <Route path="/conclusion" element={<Conclusion />} /> {/* Final page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
