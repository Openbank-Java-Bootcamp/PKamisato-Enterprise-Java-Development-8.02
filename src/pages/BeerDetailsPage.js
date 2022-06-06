import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetailsPage() {
  const { id } = useParams();
  const [foundBeer, setFoundBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setFoundBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log("first", foundBeer);
  return (
    <div className="container-card">
      {foundBeer && (
        <div key={foundBeer._id} className="card-beer">
          <div className="item">
            <img className="item-img" src={foundBeer.image_url} alt="foundBeer" />
          </div>
          <div className="item">
            <h3>{foundBeer.name}</h3>
            <h5>{foundBeer.tagline}</h5>
            <p>First brewed: {foundBeer.first_brewed}</p>
            <p>Attenuation Level: {foundBeer.attenuation_level}</p>
            <p>Description: {foundBeer.description}</p>
            <p>Contributed by: {foundBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}
