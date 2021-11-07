import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Detail = () => {
  const [playerData, setPlayerData] = useState();
  const [playerId, setPlayerId] = useState();
  const [playerDemo, setPlayerDemo] = useState();
  const location = useLocation();

  const positionMap = {
    F: "Forward",
    "C-F": "Center-Forward",
    "G-F": "Guard-Forward",
    G: "Guard",
    "F-C": "Forward-Center",
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    setPlayerId(id);
  }, [location.pathname, location.search]);

  const getStats = async () => {
    let allStats;
    await axios
      .get(
        "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json"
      )
      .then((res) => {
        allStats = res.data.tpsts.pl;
      });

    if (allStats) {
      const foundMatch = allStats.find((stat) => stat.pid === playerId);
      setPlayerData(foundMatch);
    }
  };

  const getDemographics = async () => {
    let allDemos;
    await axios
      .get(
        "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json"
      )
      .then((res) => {
        allDemos = res.data.t.pl;
      });

    if (allDemos) {
      const demo = allDemos.filter((x) => x.pid === Number(playerId));
      setPlayerDemo(demo[0]);
    }
  };
  useEffect(() => {
    if (playerId) {
      getStats();
      getDemographics();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerId]);

  const renderPosition = (position) => {
    return positionMap[position];
  };

  return (
    <div className="details">
      <div className="deets-left">
        <img
          alt="player"
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`}
        />
      </div>
      <div className="deets-right">
        {!playerData || !playerDemo ? (
          <Skeleton />
        ) : (
          <>
            <div className="top-row">
              <div className="left">
                <h1>
                  {playerData.fn} {playerData.ln}
                </h1>
                <h3>{renderPosition(playerData.pos)}</h3>
              </div>
              <div className="right">
                <h1>{playerDemo.num}</h1>
              </div>
            </div>
            <div className="stats-row">
              <div className="quar-1">
                <h3>GAMES</h3>
                <h3>{playerData.tot.gp}</h3>
              </div>
              <div className="quar-2">
                <h3>PPG</h3>
                <h3>{playerData.avg.pts}</h3>
              </div>
              <div className="quar-3">
                <h3>RPG</h3>
                <h3>{playerData.avg.reb}</h3>
              </div>
              <div className="quar-4">
                <h3>STL</h3>
                <h3>{playerData.avg.stl}</h3>
              </div>
            </div>
            <div className="demographics">
              <div className="category">
                <p>Height:</p>
                <p>Weight:</p>
                <p>DOB:</p>
                <p>Prior to NBA:</p>
                <p>Years Pro:</p>
              </div>
              <div className="player-info">
                <p>{playerDemo.ht}</p>
                <p>{playerDemo.wt}</p>
                <p>{playerDemo.dob}</p>
                <p>{playerDemo.hcc}</p>
                <p>{playerDemo.y}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
