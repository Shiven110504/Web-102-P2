import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ question, answer, imageUrl }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            {imageUrl && <img src={imageUrl} alt="flashcard" />}
            <p>{question}</p>
          </div>
          <div className="flashcard-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
