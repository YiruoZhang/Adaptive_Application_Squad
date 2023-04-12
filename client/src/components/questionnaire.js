import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import styles from '../styles/questionnaire.module.css';
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate()
  const { state } = useLocation();
  const { userInfo } = state;
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
    },
    // {
    //   text: '6. Do not talk a lot',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '7. Am interested in people',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '8. Leave my belongings around',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //   text: '9. Am relaxed most of the time',
    //   options: [
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //   ],
    // },{
    //     text: '10. Have difficulty understanding abstract ideas',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },    
    //   {
    //     text: '11. Feel comfortable around people',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '12. Insult people',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '13. Pay attention to details',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '14. Worry about things',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '15. Have a vivid imagination',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '16. Keep in the background',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '17. Sympathize with others feelings',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '18. Make a mess of things',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '19. Seldom feel blue',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '20. Am not interested in abstract ideas',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '21. Start conversations',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '22. Am not interested in other peoples problems',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '23. Get chores done right away',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '24. Am easily disturbed',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '25. Have excellent ideas',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },{
    //     text: '26. Have little to say',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '27. Have a soft heart',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '28. Often forget to put things back in their proper place',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '29. Get upset easily',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '30. Do not have a good imagination',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '31. Talk to a lot of different people at parties',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '32. Am not really interested in others',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '33. Like order',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '34. Change my mood a lot',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '35. Am quick to understand things',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '36. Do not like to draw attention to myself',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '37. Take time out for others',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '38. Shirk my duties',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '39. Have frequent mood swings',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '40. Use difficult words',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '41. Do not mind being the center of attention',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '42. Feel others emotions',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '43. Follow a schedule',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
  
    //   {
    //     text: '44. Get irritated easily',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '45. Spend time reflecting on things',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '46. Am quiet around strangers',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '47. Make people feel at ease',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '48. Am exacting in my work',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '49. Often feel blue',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
    //   {
    //     text: '50. Am full of ideas',
    //     options: [
    //       { text: '1', value: 1 },
    //       { text: '2', value: 2 },
    //       { text: '3', value: 3 },
    //       { text: '4', value: 4 },
    //       { text: '5', value: 5 },
    //     ],
    //   },
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
      console.log(choices);
      
      const agreeableness = choices[2];
      const conscientiousness = choices[3];
      const extraversion = choices[1];
      const neuroticism = choices[4];
      const openness = choices[0];

      console.log(agreeableness);
      console.log(conscientiousness);
      console.log(extraversion);
      console.log(neuroticism);
      console.log(openness);

      userInfo.set('agreeableness', agreeableness);
      userInfo.set('conscientiousness', conscientiousness);
      userInfo.set('extraversion', extraversion);
      userInfo.set('neuroticism', neuroticism);
      userInfo.set('openness', openness);


      // const agreeableness = 14 + choices[2] - choices[7] + choices[12] - choices[17] + choices[22] - choices[27] + choices[32] - choices[37] + choices[42] + choices[47];
      // const conscientiousness = 38 - choices[3] + choices[8] - choices[13] + choices[18] - choices[23] - choices[28] - choices[33] - choices[38] - choices[43] - choices[48];
      // const extraversion = 14 - choices[1] + choices[6] - choices[11] + choices[16] - choices[21] + choices[26] - choices[31] + choices[36] + choices[41] + choices[46];
      // const neuroticism = 9 + choices[4] - choices[9] + choices[14] - choices[19] + choices[24] - choices[29] + choices[34] + choices[39] + choices[44] + choices[49];
      // const openness = 20 + choices[0] - choices[5] + choices[10] - choices[15] + choices[20] - choices[25] + choices[30] - choices[35] + choices[40] - choices[45];
      
      // console.log(agreeableness/8);
      // console.log(conscientiousness/8);
      // console.log(extraversion/8);
      // console.log(neuroticism/8);
      // console.log(openness/8);

      // userInfo.set('agreeableness', agreeableness/8);
      // userInfo.set('conscientiousness', conscientiousness/8);
      // userInfo.set('extraversion', extraversion/8);
      // userInfo.set('neuroticism', neuroticism/8);
      // userInfo.set('openness', openness/8);

      console.log("Data from questionnaire:", userInfo);
      navigate('/end', { state: { userInfo } });
    }else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const currentQuestion = questions[questionIndex];
    
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <h5 className={styles.headline}>
            Please choose how much you agree with the statement:
            <br />
            1 = disagree / 2= slightly disagree / 3 = neutral / 4 = slightly agree / 5 = agree
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
            </div>
          </div>
        )}


        </div>
      </div>
    </div>
  );
}