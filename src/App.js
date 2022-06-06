import "./App.css";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import BeerList from "./pages/BeerList";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage"
import AddNewBeerPage from "./pages/AddNewBeerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<BeerDetailsPage />} />
        <Route path="/beers/random" element={<RandomBeerPage />} />
        <Route path="/beers/new" element={<AddNewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
