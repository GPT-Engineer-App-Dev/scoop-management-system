import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Flavors() {
  const [flavors, setFlavors] = useState([]);
  const [newFlavor, setNewFlavor] = useState("");

  const addFlavor = () => {
    setFlavors([...flavors, newFlavor]);
    setNewFlavor("");
  };

  const deleteFlavor = (index) => {
    setFlavors(flavors.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Flavors</h1>
      <div className="mb-4">
        <Input
          type="text"
          value={newFlavor}
          onChange={(e) => setNewFlavor(e.target.value)}
          placeholder="New Flavor"
        />
        <Button onClick={addFlavor} className="ml-2">Add Flavor</Button>
      </div>
      <ul>
        {flavors.map((flavor, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {flavor}
            <Button variant="destructive" onClick={() => deleteFlavor(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Flavors;