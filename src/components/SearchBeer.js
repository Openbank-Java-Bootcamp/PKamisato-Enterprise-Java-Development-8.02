import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function SearchBeer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { query } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q={query}`)
      .then((response) => {
        console.log("response.data", response.data);
        setSearchParams(response.data);
      });
  }, []);

  return (
    <div>
      {searchParams.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <h5>{beer.tagline}</h5>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}
