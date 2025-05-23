import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Game from "./pages/Game";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
