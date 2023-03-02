import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import WheelPage from "./page/WheelPage";
import ScratchPage from "./page/ScratchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wheel" element={<WheelPage />} />
        <Route path="/scratch" element={<ScratchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
