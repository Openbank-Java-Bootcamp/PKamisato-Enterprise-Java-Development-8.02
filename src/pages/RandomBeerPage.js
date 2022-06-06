import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("first", randomBeer);
  return (
    <div className="container-card">
      {randomBeer && (
        <div key={randomBeer._id} className="card-beer">
          <div className="item">
          <img  className="item-img" src={randomBeer.image_url} alt="randomBeer" />
          </div> 
          <div className="item">
          <h3>{randomBeer.name}</h3>
          <h5>{randomBeer.tagline}</h5>
          <p>First brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}
