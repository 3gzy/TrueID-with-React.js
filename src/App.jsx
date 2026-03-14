import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
