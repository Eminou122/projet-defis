import { useState } from 'react';
import '../style/App.css';

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const correctAnswer = "It's open-source and free ✅";

  const answers = [
    { text: "It's owned by Microsoft", correct: false },
    { text: "It's open-source and free ✅", correct: true },
    { text: "It only runs on Apple hardware ❌", correct: false },
    { text: "It has limited software options", correct: false },
  ];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer.text);
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    // Ici tu pourras passer à la question suivante
    alert("Question suivante ! (à coder)");
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <button className="close-btn">✕</button>
        <div className="title">Quiz Défi</div>
        <button className="help-btn">?</button>
      </header>

      {/* Progress & Timer */}
      <div className="progress-section">
        <div className="question-counter">Question 3/10</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "30%" }}></div>
        </div>
        <div className="timer">00:45</div>
      </div>

      {/* Robot Image */}
      <div className="robot-container">
        <img 
          src="https://images.unsplash.com/photo-1612940301352-06bc2c111f20?w=400&h=400&fit=crop&crop=center" 
          alt="Robot" 
          className="robot-img"
        />
      </div>

      {/* Question */}
      <h1 className="question">
        What is a key benefit of using Linux?
      </h1>

      {/* Answers */}
      <div className="answers">
        {answers.map((ans, index) => {
          const isSelected = selectedAnswer === ans.text;
          const isCorrect = ans.correct;
          let className = "answer";

          if (showResult) {
            if (isCorrect) className += " correct";
            else if (isSelected && !isCorrect) className += " wrong";
            else className += " disabled";
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleAnswerClick(ans)}
              disabled={showResult}
            >
              {ans.text}
            </button>
          );
        })}
      </div>

      {/* Result */}
      {showResult && selectedAnswer === correctAnswer && (
        <div className="result correct-result">
          <h2>Correct!</h2>
          <p>Open-source empowers users and promotes digital independence.</p>
        </div>
      )}

      {showResult && selectedAnswer !== correctAnswer && selectedAnswer !== null && (
        <div className="result wrong-result">
          <h2>Oups ! Mauvaise réponse</h2>
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default App;