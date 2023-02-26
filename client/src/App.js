import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ScratchPage from "./page/ScratchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scratch" element={<ScratchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
