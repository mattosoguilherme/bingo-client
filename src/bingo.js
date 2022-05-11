import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Raffle from "./pages/Raffle";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Session from "./pages/Session";
import Award from "./pages/Award";
import Buy from "./pages/Buy";

const Bingo = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/session" element={<Session />} />
        <Route path="/session/:id" element={<Raffle />} />
        <Route path="/award/:id" element={<Award />} />
        <Route path="/buy/:id" element={<Buy />} />
      </Routes>
    </>
  );
};

export default Bingo;
