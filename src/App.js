import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllPokemon from "./Components/AllPokemon";
import SinglePokemon from "./Components/SinglePokemon";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="backGround"></div>
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
