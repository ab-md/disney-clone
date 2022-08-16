import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:slug" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
