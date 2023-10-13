import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Login from "./components/Pages/Login/Login";
import Home from "./components/Pages/Home/Home";
import Details from "./components/Pages/Details/Details";
import AddCart from "./components/Pages/AddCart/AddCart";

function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Details" element={<Details />}></Route>
        <Route path="/AddCart" element={<AddCart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
