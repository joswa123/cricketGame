import React, { useEffect } from "react";
import { useState } from "react";
import Aus from "./Aus";

function Game() {
  const [score, setScore] = useState(0);
  const [wicket, setWickets] = useState(0);
  const [target, setTarget] = useState();
  const [number, setNumber] = useState(0);
  const [players, setPlayers] = useState([
    { name: "Rohit sharma", score: 0 },
    { name: "shubam gill", score: 0 },
    { name: "virat kholi", score: 0 },
    { name: "suryakumar yadav", score: 0 },
    { name: "kl rahul", score: 0 },
    { name: "hardik pandya", score: 0 },
    { name: "jadeja", score: 0 },
    { name: "kuldeep yadav", score: 0 },
    { name: "mohammad shami", score: 0 },
    { name: "bumrah", score: 0 },
    { name: "siraj", score: 0 },
  ]);

  const ScoreRun = (min, max) => {
    const delivery = Math.floor(Math.random() * (max - min + 1) + min);
    if (delivery !== 5 && wicket !== 10) {
      setScore(score + delivery);
      updatePlayerScore(number, delivery);
    }
    if (delivery === 5 && wicket !== 10) {
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
    if (wicket === 10) {
      alert(`aus need ${score}`);
      setTarget(score);
    }
  }, [wicket, score]);

  return (
    <div>
      <div className="container d-flex justify-content-between bg-primary text-white ">
        <div className=" d-block">
          <h1 className="text-warning">Indian ScoreBoard</h1>
          <h2 className="ms-4 text-center">Name:India</h2>
          <h2 className="ms-4 text-center">Score:{score}</h2>
          <h2 className="ms-4 text-center">Wickets:{wicket}</h2>
          <h2 className="text-center">batsmen:{players[number].name}</h2>
          <button
            className="india  ms-5 bg-dark text-white"
            onClick={() => ScoreRun(0, 6)}
          >
            play
          </button>
        </div>
        <h2 className="text-warning">target:{target}</h2>
        <div>
          <Aus target={target}></Aus>
        </div>
        <div className="scorecard table   container bg-warning ">
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
    </div>
  );
}

export default Game;
