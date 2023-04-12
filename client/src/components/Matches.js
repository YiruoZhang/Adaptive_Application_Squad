import React from 'react';

const Table = ({ matches }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Summoner Name</th>
          <th>Champion ID</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {matches.four_player_team.map(match => (
          <tr key={match.user_id}>
            <td>{match.user_id}</td>
            <td>{match.summoner_name}</td>
            <td>{match.champion_id}</td>
            <td>{match.rank}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;