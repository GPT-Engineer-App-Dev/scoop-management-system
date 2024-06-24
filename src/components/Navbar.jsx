import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="link" className="text-white">Home</Button>
        </Link>
        <Link to="/flavors">
          <Button variant="link" className="text-white">Flavors</Button>
        </Link>
        <Link to="/inventory">
          <Button variant="link" className="text-white">Inventory</Button>
        </Link>
        <Link to="/sales">
          <Button variant="link" className="text-white">Sales</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;