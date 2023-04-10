import React, { useEffect, useState } from 'react';
import styles from '../styles/results.module.css';
// import { answer1, answer2, answer3, answer4, answer5 } from './questionnaire.js';

let results_answer1 = null;
let results_answer2 = null;
let results_answer3 = null;
let results_answer4 = null;
let results_answer5 = null;


export function set_results1(val){
  results_answer1 = val;
}
export function set_results2(val){
  results_answer2 = val;
}
export function set_results3(val){
  results_answer3 = val;
}
export function set_results4(val){
  results_answer4 = val;
}
export function set_results5(val){
  results_answer5 = val;
}


// let results_answer1;

const Results = () => {
  console.log(results_answer1);
  console.log(results_answer2);
  console.log(results_answer3);
  console.log(results_answer4);
  console.log(results_answer5);
  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.heading}>Results:</h1>
      <ul className={styles.list}>
        <li className={styles.item}>Your Extroversion Score: <span className={styles.score}>{results_answer1}</span></li>
        <li className={styles.item}>Your Agreeableness Score: <span className={styles.score}>{results_answer2}</span></li>
        <li className={styles.item}>Your Conscientiousness Score: <span className={styles.score}>{results_answer3}</span></li>
        <li className={styles.item}>Your Neuroticism Score: <span className={styles.score}>{results_answer4}</span></li>
        <li className={styles.item}>Your Openness to Experience Score: <span className={styles.score}>{results_answer5}</span></li>
      </ul>
    </div>
  );
};

export default Results;

