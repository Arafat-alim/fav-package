import "./App.css";
// import About from "./Components/About";
// import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";

import HasFav from "./Components/Favourite/HasFav";
import AddFav from "./Components/Favourite/AddFav";
import AddFavorite from "./Components/Favourite/AddFavorite";
import Home from "./Components/Home";

function App() {
  return (
    <div className="container mt-5  ">
      <Routes>
        <Route path="/" element={<HasFav />} />
        <Route path="/addFav" element={<AddFav />} />
        {/* <Route path="/*" element={<Error404 />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
