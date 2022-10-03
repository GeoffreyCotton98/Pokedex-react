import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AllPokemon from "./Components/AllPokemon";
import SinglePokemon from "./Components/SinglePokemon";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<AllPokemon />} />
          <Route exact path="/Pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
