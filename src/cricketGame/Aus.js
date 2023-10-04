import React from "react";
import { useState, useEffect } from "react";

function Aus({ target }) {
  const [score, setScore] = useState(0);
  const [wicket, setWickets] = useState(0);
  const [number, setNumber] = useState(0);
  const [players, setPlayers] = useState([
    { name: "david warner", score: 0 },
    { name: "Mitchell Marsh", score: 0 },
    { name: "steve smith", score: 0 },
    { name: "Marnus Labuschagne", score: 0 },
    { name: "Alex Carey ", score: 0 },
    { name: "Marcus Stoinis", score: 0 },
    { name: " Glenn Maxwell", score: 0 },
    { name: "Pat Cummins", score: 0 },
    { name: "Mitchell Starc", score: 0 },
    { name: " Josh Hazlewood", score: 0 },
    { name: "Adam Zampa", score: 0 },
  ]);

  const ScoreRun = (min, max) => {
    const delivery = Math.floor(Math.random() * (max - min + 1) + min);

    if (delivery !== 5 && wicket !== 10 && score < target) {
      setScore(score + delivery);
      updatePlayerScore(number, delivery);
    }
    if (delivery === 5 && wicket !== 10 && score < target) {
      setWickets(wicket + 1);
      changeBatsmen();
    }
  };

  const changeBatsmen = () => {
    if (number < 10) {
      setNumber(number + 1);
    } else {
      alert("allbatsmen are out.innigs over");
    }
  };

  const updatePlayerScore = (playerIndex, runs) => {
    const updatedPlayers = [...players];
    updatedPlayers[playerIndex].score += runs;
    setPlayers(updatedPlayers);
  };

  useEffect(() => {
    if (wicket === 10 && score < target) {
      alert(`india wins the match`);
    }
    if (score > target) {
      alert("australis wins the match");
    }
    if (score === target && wicket === 10) {
      alert("match draw");
    }
  }, [wicket, score, target]);

  return (
    <div>
      <div className="d-flex">
        <div className="app d-block text-white">
          <h1 className="text-warning">Australian ScoreBoard </h1>

          <h2 className="text-center">Name:Australia</h2>
          <h2 className="text-center"> Score:{score}</h2>
          <h2 className="text-center">Wickets:{wicket}</h2>
          <h2>batsmen:{players[number].name}</h2>
          <button
            className="play bg-dark text-white mb-5"
            onClick={() => ScoreRun(0, 6)}
          >
            Play
          </button>
        </div>
      </div>
      <div className="table container bg-warning">
        <table>
          <thead>
            <tr>
              <th>playername:</th>
              <th className="ms-5">score:</th>
            </tr>
            <tbody>
              {players.map((player, index) => (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td className="ms-5">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Aus;
