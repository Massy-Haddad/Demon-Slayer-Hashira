import React from "react";

import "./Home.css";

import { BsBroadcast, BsFillPlayFill, BsSearch } from "react-icons/bs";
import { BiBody, BiBrain } from "react-icons/bi";
import {
  GiElectric,
  GiMetalHand,
  GiChemicalArrow,
  GiSpinningSword,
  GiCrossedSwords,
} from "react-icons/gi";

import demonslayer from "../img/demon-slayer.png";
import rengoku from "../img/characters/rengoku.png";
import ultimate from "../img/characters/rengoku-ultimate.png";
import katana from "../img/characters/rengoku-katana.png";

import fog from "../img/fog/smoke-4.png";

function Home(props) {
  return (
    <div className="home">
      <div className="info-section">
        <div className="info">
          <h1>Kyojuro</h1>
          <h3>Rengoku</h3>
          <br />
          <p>
            Rengoku was greatly enthusiastic in regard to his duties as a
            Hashira, and often came across as cheerfully eccentric. He was
            amiable, pure of hearth and boasted extraordinary technique and
            swordmanship stemming from strict practice and discipline.
          </p>
          <div className="stats">
            <div className="stat">
              <h2>8420</h2>
              <h3>pwr</h3>
            </div>
            <div className="stat">
              <h2>9210</h2>
              <h3>atk</h3>
            </div>
            <div className="stat">
              <h2>7790</h2>
              <h3>def</h3>
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="ultimate-skill">
            <div className="video">
              <BsFillPlayFill className="icon" />
              <img className="video-preview" src={ultimate} alt="Video" />
            </div>
            <div className="details bottom-right-cut">
              <div>
                <h1>Rengoku</h1>
                <h3>Ultimate Skill</h3>
              </div>
              <div className="ultimate-stats">
                <GiSpinningSword className="icon" />
                <h3>+ ATK x5</h3>
              </div>
            </div>
            <div className="search">
              <BsSearch className="search-icon" />
            </div>
          </div>
          <div className="ultimate-skill">
            <div className="breathing-overview">
              <div className="breathing">
                <img
                  className="breathing-logo"
                  src={demonslayer}
                  alt="Fire Breathing"
                />
                <h2>Fire breathing</h2>
                <h3>technique</h3>
              </div>
              <div className="breathing-skills">
                <GiCrossedSwords className="icon" />
                <h2>9 skills</h2>
              </div>
            </div>

            <div className="breathing-details">
              <div>
                <h1>Nichirin</h1>
                <h3>Katana</h3>
              </div>
            </div>

            <img className="katana" src={katana} alt="Katana Nichirin" />
          </div>
        </div>
      </div>

      <div className="character-section">
        <div className="character">
          <img
            className="character-logo"
            src={demonslayer}
            alt="Demon Slayer"
          />

          <img className="character-img" src={rengoku} alt="Rengoku" />

          <div className="ag-smoke-1 selector">
            <img src={fog} alt="Fog" />
          </div>
        </div>

        <div className="ability">
          <div className="ability-title">
            <p>ABILITY</p>
          </div>
          <div className="abilities">
            <div className="tooltip">
              <span className="tooltipText">Power</span>
              <BsBroadcast className="icon" />
            </div>
            <div className="tooltip">
              <span className="tooltipText">Power</span>
              <GiElectric className="icon" />
            </div>
            <div className="tooltip">
              <BiBody className="icon" />
              <span className="tooltipText">Power</span>
            </div>
            <div className="tooltip">
              <GiMetalHand className="icon" />
              <span className="tooltipText">Power</span>
            </div>
            <div className="tooltip">
              <GiChemicalArrow className="icon" />
              <span className="tooltipText">Power</span>
            </div>
            <div className="tooltip">
              <BiBrain className="icon" />
              <span className="tooltipText">Power</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
