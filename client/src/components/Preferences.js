import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from '../styles/questionnaire.module.css';
import { Link, useNavigate } from 'react-router-dom'

export default function Preferences({ onFinish }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [choices, setChoices] = useState([]);
  const [result, setResult] = useState('');
  const navigate = useNavigate()

  const questions = [
    {
      text: '1. Do you prefer to play in the morning, afternoon or evening?',
      options: [
        { text: 'Morning', value: 'morning' },
        { text: 'Afternoon', value: 'afternoon' },
        { text: 'Evening', value: 'evening' },
      ],
    },
    {
      text: '2. What language do you prefer to speak?',
      options: [
        { text: 'English', value: 'english' },
        { text: 'French', value: 'french' },
        { text: 'Chinese', value: 'chinese' },
        { text: 'Italian', value: 'italian' },
        { text: 'German', value: 'german' },
      ],
    },
  ];

  const handleAnswer = (value) => {
    const newChoices = [...choices];
    newChoices[questionIndex] = value;
    setChoices(newChoices);
    setIsAnswered(true);
  };

  const handleNext = () => {
    setIsAnswered(false);
    if (questionIndex === questions.length - 1) {
      // Calculate result
      const resultText = `Thank you!`;
      setResult(resultText);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleFinish = () => {
    // Pass the choices to the higher-level component
    onFinish(choices);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <div className={styles.quiz}>
          {result ? (
            <div className={styles.feedback}>
              <p>Thank you</p>
            </div>
          ) : (
            <>
              {isAnswered && (
                <div className={styles.feedback}>
                  <div className={styles.answer}>{`Your choice: ${choices[questionIndex]}`}</div>
                  <button className={styles.button} type="button" onClick={handleNext}>
                    {questionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </div>
              )}
              {!isAnswered && (
                <>
                  <h3 className={styles.question}>{questions[questionIndex].text}</h3>
                  <div className={styles.options}>
                    {questions[questionIndex].options.map((option) => (
                      <button
                        key={option.value}
                        className={styles.option}
                        type="button"
                        onClick={() => handleAnswer(option.value)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                  <button
                    className={styles.button}
                    type="button"
                    onClick={handleNext}
                    disabled={!isAnswered}
                  >
                    {questionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {result && (
        <div className="flex justify-center items-center" style={{ marginTop: '3rem' }}>
          <button className={styles.button} onClick={handleFinish}>
            Finish Quiz
          </button>
        </div>
      )}
    </div>
  );
  
}
export const choices = [];

// export default Preferences;