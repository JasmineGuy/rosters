import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ id, first, last, pos, num }) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/details?id=${id}`);
    // history.push(`/properties?id=${category}`);
  };
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <div className="top-card">
        <img
          alt="player"
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`}
        />
      </div>
      <div className="bottom-card">
        <div className="bottom-left">
          <h3 className="name">
            {first} {last}
          </h3>
          <p>{pos}</p>
        </div>
        <div className="bottom-right">
          <h1>{num}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
