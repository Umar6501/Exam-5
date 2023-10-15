import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
// import Login from "./components/Pages/Login/Login";
// import Home from "./components/Pages/Home/Home";
// import Details from "./components/Pages/Details/Details";
// import AddCart from "./components/Pages/AddCart/AddCart";
// import EditCart from "./components/Pages/AddCart/EditCart";
import Loading from "./components/Loading";
const Login = lazy(() => import("./components/Pages/Login/Login"));
const Home = lazy(() => import("./components/Pages/Home/Home"));
const Details = lazy(() => import("./components/Pages/Details/Details"));
const AddCart = lazy(() => import("./components/Pages/AddCart/AddCart"));
const EditCart = lazy(() => import("./components/Pages/AddCart/EditCart"));
import Not_Found from "./components/Not-Found";

function App() {
  return (
    <Router>
      <Header />
      <SideBar />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Login />
            </Suspense>
          }
        />
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route
          path="/Home"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Home />
            </Suspense>
          }
        />
        {/* <Route path="/Home" element={<Home />}></Route> */}
        <Route
          path="/Details/:id"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <Details />
            </Suspense>
          }
        />
        {/* <Route path="/Details/:id" element={<Details />}></Route> */}
        <Route
          path="/AddCart"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <AddCart />
            </Suspense>
          }
        />
        {/* <Route path="/AddCart" element={<AddCart />}></Route> */}
        <Route
          path="/EditCart/:id"
          element={
            <Suspense fallback={<Loading></Loading>}>
              <EditCart />
            </Suspense>
          }
        />
        {/* <Route path="/EditCart/:id" element={<EditCart />}></Route> */}
        <Route path="/1000*" element={<Not_Found />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
