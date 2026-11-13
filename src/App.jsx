import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* add new routes here */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
