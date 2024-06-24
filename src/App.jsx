import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Flavors from "./pages/Flavors.jsx";
import Inventory from "./pages/Inventory.jsx";
import Sales from "./pages/Sales.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/flavors" element={<Flavors />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/sales" element={<Sales />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;