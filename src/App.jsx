/**
 * App.jsx
 * -------
 * Root app component.
 * Wraps the page in Navbar + Footer and handles routing.
 *
 * To add new pages:
 *   1. Create the page in src/pages/
 *   2. Import it here
 *   3. Add a <Route path="/your-path" element={<YourPage />} />
 */
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
          {/* Brother: add new routes here as you build more pages */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
