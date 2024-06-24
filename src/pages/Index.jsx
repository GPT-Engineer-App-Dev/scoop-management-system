import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Ice Cream Parlor Management System</h1>
      <div className="space-x-4">
        <Link to="/flavors">
          <Button variant="outline">Manage Flavors</Button>
        </Link>
        <Link to="/inventory">
          <Button variant="outline">Manage Inventory</Button>
        </Link>
        <Link to="/sales">
          <Button variant="outline">Track Sales</Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;