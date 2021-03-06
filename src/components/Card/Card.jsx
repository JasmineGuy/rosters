import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ id, first, last, pos, num }) => {
  let history = useHistory();

  const positionMap = {
    F: "Forward",
    "C-F": "Center-Forward",
    "G-F": "Guard-Forward",
    G: "Guard",
    "F-C": "Forward-Center",
  };
  const renderPosition = (position) => {
    return positionMap[position];
  };

  const handleClick = (id) => {
    history.push(`/details?id=${id}`);
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
          <p className="gray">{renderPosition(pos)}</p>
        </div>
        <div className="bottom-right">
          <h1>{num}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
