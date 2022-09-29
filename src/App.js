import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";

import AllPokemon from "./Components/AllPokemon";
import SinglePokemon from "./Components/SinglePokemon";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<AllPokemon />} />
          <Route exact path="/Pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
