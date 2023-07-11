import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import PageNotFound from "./pages/PageNotFound";
// import Customize from "./pages/Customize";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
