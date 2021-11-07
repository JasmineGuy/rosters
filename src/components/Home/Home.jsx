import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="splash">
        <div className="left-splash">
          <h1 className="title">NETS VS CAVALIERS</h1>
          <h4 className="game">Wed, Nov 17 | 7:30 PM | YES Network</h4>

          <div className="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://seatgeek.com/cavaliers-at-nets-tickets/11-17-2021-brooklyn-new-york-barclays-center/nba/5475705?utm_source=brooklynnets.com&utm_medium=Web&utm_campaign=FY22_BKN_SGT_HeroSlider_SGT-20211117%2FCLEBKN"
            >
              <button className="buy">BUY NOW</button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://seatgeek.com/brooklyn-nets-tickets?game_type=home&utm_source=brooklynnets.com&utm_medium=web&utm_campaign=FY22_BKN_SGT_HeroSlider_ViewSchedule%3Frel%3DBKN_HERO"
            >
              <button className="schedule">SEE SCHEDULE</button>
            </a>
          </div>
        </div>
        <div className="right-splash"></div>
      </div>
    </div>
  );
};

export default Home;
