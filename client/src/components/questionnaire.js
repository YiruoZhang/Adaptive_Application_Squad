

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from '../styles/questionnaire.module.css';
import { useNavigate } from 'react-router-dom'
import {set_results1} from './Results.js';
import {set_results2} from './Results.js';
import {set_results3} from './Results.js';
import {set_results4} from './Results.js';
import {set_results5} from './Results.js';

// export function exportQuizResults(answer1, answer2, answer3, answer4, answer5) {
//   return {
//     answer1,
//     answer2,
//     answer3,
//     answer4,
//     answer5,
//   };
// }


export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [answer3, setAnswer3] = useState(0);
  const [answer4, setAnswer4] = useState(0);
  const [answer5, setAnswer5] = useState(0);
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate()

  const questions = [
    {
      text: '1. Am the life of the party',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },
    {
      text: '2. Feel little concern for others',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },
    {
      text: '3. Am always prepared',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },
    {
      text: '4. Get stressed out easily',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },
    {
      text: '5. Have a rich vocabulary',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },{
      text: '6. Do not talk a lot',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },{
      text: '7. Am interested in people',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },{
      text: '8. Leave my belongings around',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },{
      text: '9. Am relaxed most of the time',
      options: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
    },
    

  ];

  const handleAnswer = (value) => {
    const newChoices = [...choices];
    newChoices[questionIndex] = value;
    setChoices(newChoices);
    setIsAnswered(true);
  };

  const getMaxAnswerText = (maxAnswer, answer1, answer2, answer3, answer4, answer5) => {
    if (maxAnswer === answer1) {
      return "Extroversion";
    } else if (maxAnswer === answer2) {
      return "Agreeableness";
    } else if (maxAnswer === answer3) {
      return "Conscientiousness";
    } else if (maxAnswer === answer4) {
      return "Neuroticism";
    } else if (maxAnswer === answer5) {
      return "Openness to Experience";
    }
  };
  
  const handleNext = () => {
    setIsAnswered(false);
    let maxAnswer = 0; 
    if (questionIndex === questions.length - 1) {
      // console.log('hih');
      const answer1 = 20 + choices[0] - choices[5] ;
      const answer2 = 14 - choices[1] + choices[6] ;
      const answer3 = 14 + choices[2] - choices[7] ;
      const answer4 = 38 - choices[3] + choices[8] ;
      const answer5 = 9 + choices[4] - choices[9] ;
      // const answer1 = 20 + choices[0] - choices[5] + choices[10] - choices[15] + choices[20] - choices[25] + choices[30] - choices[35] + choices[40] - choices[45];
      // const answer2 = 14 - choices[1] + choices[6] - choices[11] + choices[16] - choices[21] + choices[26] - choices[31] + choices[36] + choices[41] + choices[46];
      // const answer3 = 14 + choices[2] - choices[7] + choices[12] - choices[17] + choices[22] - choices[27] + choices[32] - choices[37] + choices[42] + choices[47];
      // const answer4 = 38 - choices[3] + choices[8] - choices[13] + choices[18] - choices[23] - choices[28] - choices[33] - choices[38] - choices[43] - choices[48];
      // const answer5 = 9 + choices[4] - choices[9] + choices[14] - choices[19] + choices[24] - choices[29] + choices[34] + choices[39] + choices[44] + choices[49];

      setAnswer1(answer1);
      setAnswer2(answer2);
      setAnswer3(answer3);
      setAnswer4(answer4);
      setAnswer5(answer5);
      // console.log(answer1);
      
      set_results1(answer1);
      set_results2(answer2);
      set_results3(answer3);
      set_results4(answer4);
      set_results5(answer1);

      //results_answer1= answer1;
      //console.log(results_answer1);
      // const quizResults = exportQuizResults(answer1, answer2, answer3, answer4, answer5);

      
      // console.log(quizResults);
      maxAnswer = Math.max(answer1, answer2, answer3, answer4, answer5);
      const maxAnswerText = getMaxAnswerText(maxAnswer, answer1, answer2, answer3, answer4, answer5);
      toast.success(`Your highest trait is ${maxAnswerText}, your Score of is ${maxAnswerText} is ${maxAnswer}.`);
    }else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  

  const currentQuestion = questions[questionIndex];
  
  // module.exports = data;

  
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <div className={styles.quiz}>
          <h5 className={styles.headline}>
            Please choose how much you agree with the statement:
            <br />
            1 = disagree, 2 = slightly disagree, 3 = neutral, 4 = slightly agree, and 5 = agree
          </h5>
          <h5 className={styles.question}>
            {currentQuestion.text}
          </h5>
          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className={styles.option} onClick={() => handleAnswer(option.value)}>
                {option.text}
              </div>
            ))}
          </div>
          {isAnswered && (
          <div className={styles.feedback}>
            <div className={styles.answer}>{`Your choice: ${choices[questionIndex]}`}</div>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={handleNext}>
                {questionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
              <button className={styles.button} type='button' onClick={() => navigate('/results')} style={{marginLeft: '1rem'}}>
                <span className={styles.buttonText}>Results</span>
              </button>
            </div>
          </div>
        )}


        </div>
      </div>
    </div>
  );
}



  // {
    //   text: '10. Have difficulty understanding abstract ideas',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },    
    // {
    //   text: '11. Feel comfortable around people',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '12. Insult people',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '13. Pay attention to details',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '14. Worry about things',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '15. Have a vivid imagination',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '16. Keep in the background',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '17. Sympathize with others feelings',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '18. Make a mess of things',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '19. Seldom feel blue',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '20. Am not interested in abstract ideas',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '21. Start conversations',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '22. Am not interested in other peoples problems',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '23. Get chores done right away',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '24. Am easily disturbed',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '25. Have excellent ideas',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '26. Have little to say',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '27. Have a soft heart',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '28. Often forget to put things back in their proper place',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '29. Get upset easily',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '30. Do not have a good imagination',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '31. Talk to a lot of different people at parties',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '32. Am not really interested in others',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '33. Like order',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '34. Change my mood a lot',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '35. Am quick to understand things',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '36. Do not like to draw attention to myself',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '37. Take time out for others',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '38. Shirk my duties',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '39. Have frequent mood swings',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '40. Use difficult words',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '41. Do not mind being the center of attention',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '42. Feel others emotions',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '43. Follow a schedule',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },

    // {
    //   text: '44. Get irritated easily',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '45. Spend time reflecting on things',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '46. Am quiet around strangers',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '47. Make people feel at ease',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '48. Am exacting in my work',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '49. Often feel blue',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
    // {
    //   text: '50. Am full of ideas',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },
  

