import React from "react";
import { Link } from "react-router-dom";
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="card">
        <img className="card-img" src={beer} alt="Avatar" />
        <Link to="/beers">
          <h4>
            <b>Beer</b>
          </h4>{" "}
        </Link>
      </div>
      <div className="card">
        <img className="card-img" src={newBeer} alt="Avatar" />

        <Link to="beers/new">
          <h4>
            <b>New Beer</b>
          </h4>{" "}
        </Link>
      </div>
      <div className="card">
        <img className="card-img" src={randomBeer} alt="Avatar" />

        <Link to="/beers/random">
          <h4>
            <b>Random Beers</b>
          </h4>{" "}
        </Link>
      </div>
    </div>
  );
};
