import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    setInventory([...inventory, { item: newItem, quantity }]);
    setNewItem("");
    setQuantity(0);
  };

  const deleteItem = (index) => {
    setInventory(inventory.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Inventory</h1>
      <div className="mb-4">
        <Input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New Item"
        />
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
          className="ml-2"
        />
        <Button onClick={addItem} className="ml-2">Add Item</Button>
      </div>
      <ul>
        {inventory.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {item.item} - {item.quantity}
            <Button variant="destructive" onClick={() => deleteItem(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;