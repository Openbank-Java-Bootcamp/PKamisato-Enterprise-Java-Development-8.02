import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBeer from "../components/SearchBeer";

export default function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);
  return (
    <div className="container-card">
      <h3>BEERS</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card-beer">
          <div className="item">
            <img className="item-img" src={beer.image_url} alt="beer" />
          </div>
          <div className="item">
            <h3>{beer.name}</h3>
            <h5>{beer.tagline}</h5>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>More Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
