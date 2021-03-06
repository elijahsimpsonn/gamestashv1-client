import React, { useContext } from "react";
import { GamestashContext } from "../../context/GamestashContext";
import "./GameCard.css";
import Main from "../../api/Main";
import { useHistory } from "react-router-dom";

const GameCard = (props) => {
  const { deleteGame } = useContext(GamestashContext);
  let history = useHistory();

  const handleDelete = async (id) => {
    try {
      await Main.delete(`/games/${id}`);
      deleteGame(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    history.push(`/games/${id}/update`);
  };

  return (
      <div className="game-card">
        <span>{props.title}</span>
        <br />
        <span>{props.condition}</span>
        <br />
        <button area-label="Edit" onClick={() => handleUpdate(props.id)}>Edit</button>
        <button area-label="Delete" onClick={() => handleDelete(props.id)}>Delete</button>
      </div>
  );
};

export default GameCard;
