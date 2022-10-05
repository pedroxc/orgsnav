import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { Layout } from "./styles";
import layout from "../assets/images/layout.png";

export default function AppRouter() {
  return (
    <Router>
      <Layout src={layout} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
