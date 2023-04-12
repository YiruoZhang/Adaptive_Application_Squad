import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useLocation } from "react-router-dom";
import Select from 'react-select';

import styles from '../styles/Username.module.css';

export default function End() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userInfo } = state;
  const [response, setResponse] = useState(null)
  const [player1, setPLayer1] = useState(null)
  const [player2, setPLayer2] = useState(null)
  const [player3, setPLayer3] = useState(null)
  const [player4, setPLayer4] = useState(null)

  const formattedData = {
    name: userInfo.get('name') || "",
    email: userInfo.get('email') || "",
    schedule_start: userInfo.get('timeStart') || "",
    schedule_end: userInfo.get('endTime') || "",
    traits: {
      agreeableness: userInfo.get('agreeableness') || "",
      conscientiousness: userInfo.get('conscientiousness') || "",
      extraversion: userInfo.get('extraversion') || "",
      neuroticism: userInfo.get('neuroticism') || "",
      openness: userInfo.get('openness') || "",
    },
    account: {
      name: userInfo.get('account') || "",
    },
    role: userInfo.get('role') || "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [showMatches, setShowMatches] = useState(false);

  const getResults = () => {
    setIsLoading(true);
    fetch('http://localhost:8080/register-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formattedData)
    })
    .then(response => response.json())
    .then(data => {

      setResponse(data);
      setPLayer1(data.matches.four_player_team[0]);
      setPLayer2(data.matches.four_player_team[1]);
      setPLayer3(data.matches.four_player_team[2]);
      setPLayer4(data.matches.four_player_team[3]);

      console.log(data);
      console.log(player1);
      console.log(player2);
      console.log(player3);
      console.log(player4);

      setIsLoading(false);
      setShowMatches(true);
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  }
  

  if(!showMatches) {

    return (
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
  
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Your profile</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Explore More by connecting with us.
              </span>
            </div>
  
            <div className="title flex flex-col items-center">
              <div className={styles.on}>
                <h2 className={styles.fieldValue}>{formattedData.name}</h2>
                <p className={styles.fieldValue}>{formattedData.email}</p>
                <p className={styles.fieldName}>Schedule: <span className={styles.fieldValue}>{formattedData.schedule_start}</span> to <span className={styles.fieldValue}>{formattedData.schedule_end}</span></p>
              </div>
              <div className={styles.on}>
                <h3 className={styles.fieldName}>Traits:</h3>
                  <ul>
                      <li><span className={styles.fieldName}>Agreeableness: </span><span className={styles.fieldValue}>{formattedData.traits.agreeableness}</span></li>
                      <li><span className={styles.fieldName}>Conscientiousness: </span><span className={styles.fieldValue}>{formattedData.traits.conscientiousness}</span></li>
                      <li><span className={styles.fieldName}>Extraversion: </span><span className={styles.fieldValue}>{formattedData.traits.extraversion}</span></li>
                      <li><span className={styles.fieldName}>Neuroticism: </span><span className={styles.fieldValue}>{formattedData.traits.neuroticism}</span></li>
                      <li><span className={styles.fieldName}>Openness: </span><span className={styles.fieldValue}>{formattedData.traits.openness}</span></li>
                  </ul>
              </div>
              <div className={styles.on}>
                  <h3 className={styles.fieldName}>Account:</h3>
                  <p className={styles.fieldValue}>{formattedData.account.name}</p>
              </div>
              <div className={styles.on}>
                  <h3 className={styles.fieldName}>Role:</h3>
                  <p className={styles.fieldValue}>{formattedData.role}</p>
              </div>
          </div>
          
          <div className="title flex flex-col items-center">
              <button className={`${styles.btn} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={getResults}>
                  {isLoading ? 'Loading...' : 'Let\'s Go!'}
              </button>
          </div>
      </div>
    </div>
  </div>
  );

  } else {

    return (
      
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
  
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Here are your matches</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Add them on League of Legends, play togheter, and enjoy!!!
              </span>
            </div>
  
            <div className="title flex flex-col items-center">
              <table className="table-auto border border-gray-400">
                <thead>
                <tr>
          <th className="text-lg">Username</th>
          <th className="text-lg">Account level</th>
          <th className="text-lg">Rank</th>
          <th className="text-lg">Tier</th>
          <th className="text-lg">Role</th>
          <th className="text-lg">Wins</th>
          <th className="text-lg">Losses</th>
          <th className="text-lg">Traits</th>
          <th className="text-lg">Schedule</th>
          <th className="text-lg">Region</th>
        </tr>
                </thead>
                <tbody>
                  <tr className="bg-teal-400">
                    <td>{response.account.name}</td>
                    <td>{response.account.summonerLevel}</td>
                    <td>{response.stats.queueStats[0].rank}</td>
                    <td>{response.stats.queueStats[0].tier}</td>
                    <td>{response.role}</td>
                    <td>{response.stats.queueStats[0].wins}</td>
                    <td>{response.stats.queueStats[0].losses}</td>
                    <td>
                      <ul>
                        <li>Agreeableness: {response.traits.agreeableness}</li>
                        <li>Conscientiousness: {response.traits.conscientiousness}</li>
                        <li>Extraversion: {response.traits.extraversion}</li>
                        <li>Neuroticism: {response.traits.neuroticism}</li>
                        <li>Openness: {response.traits.openness}</li>
                      </ul>
                    </td>
                    <td>{response.schedule_start}-{response.schedule_end}</td>
                    <td>eur</td>
                  </tr>
  
                  <tr className="bg-teal-400 border rounded" style={{ borderColor: 'blue', borderWidth: '3px' }}>
                    <td>{player1.username}</td>
                    <td>{player1.account_LEVEL}</td>
                    <td>{player1.rank}</td>
                    <td>{player1.tier}</td>
                    <td>{player1.role}</td>
                    <td>{player1.wins}</td>
                    <td>{player1.losses}</td>
                    <td>
                      <ul>
                        <li>Agreeableness: {player1.agreeableness}</li>
                        <li>Conscientiousness: {player1.conscientiousness}</li>
                        <li>Extraversion: {player1.extraversion}</li>
                        <li>Neuroticism: {player1.neuroticism}</li>
                        <li>Openness: {player1.openness}</li>
                      </ul>
                    </td>
                    <td>{player1.schedule_TIME_START}-{player1.schedule_TIME_END}</td>
                    <td>{player1.request_REGION}</td>
                  </tr>
  
                  <tr className="bg-teal-200">
                    <td>{player2.username}</td>
                    <td>{player2.account_LEVEL}</td>
                    <td>{player2.rank}</td>
                    <td>{player2.tier}</td>
                    <td>{player2.role}</td>
                    <td>{player2.wins}</td>
                    <td>{player2.losses}</td>
                    <td>
                      <ul>
                        <li>Agreeableness: {player2.agreeableness}</li>
                        <li>Conscientiousness: {player2.conscientiousness}</li>
                        <li>Extraversion: {player2.extraversion}</li>
                        <li>Neuroticism: {player2.neuroticism}</li>
                        <li>Openness: {player2.openness}</li>
                      </ul>
                    </td>
                    <td>{player2.schedule_TIME_START}-{player2.schedule_TIME_END}</td>
                    <td>{player2.request_REGION}</td>
                  </tr>
  
                  <tr className="bg-teal-200">
                    <td>{player3.username}</td>
                    <td>{player3.account_LEVEL}</td>
                    <td>{player3.rank}</td>
                    <td>{player3.tier}</td>
                    <td>{player3.role}</td>
                    <td>{player3.wins}</td>
                    <td>{player3.losses}</td>
                    <td>
                      <ul>
                        <li>Agreeableness: {player3.agreeableness}</li>
                        <li>Conscientiousness: {player3.conscientiousness}</li>
                        <li>Extraversion: {player3.extraversion}</li>
                        <li>Neuroticism: {player3.neuroticism}</li>
                        <li>Openness: {player3.openness}</li>
                      </ul>
                    </td>
                    <td>{player3.schedule_TIME_START}-{player3.schedule_TIME_END}</td>
                    <td>{player3.request_REGION}</td>
                  </tr>
  
                  <tr className="bg-teal-200">
                    <td>{player4.username}</td>
                    <td>{player4.account_LEVEL}</td>
                    <td>{player4.rank}</td>
                    <td>{player4.tier}</td>
                    <td>{player4.role}</td>
                    <td>{player4.wins}</td>
                    <td>{player4.losses}</td>
                    <td>
                      <ul>
                        <li>Agreeableness: {player4.agreeableness}</li>
                        <li>Conscientiousness: {player4.conscientiousness}</li>
                        <li>Extraversion: {player4.extraversion}</li>
                        <li>Neuroticism: {player4.neuroticism}</li>
                        <li>Openness: {player4.openness}</li>
                      </ul>
                    </td>
                    <td>{player4.schedule_TIME_START}-{player4.schedule_TIME_END}</td>
                    <td>{player4.request_REGION}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
      </div>
      );
    

  }

}
