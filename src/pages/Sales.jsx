import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Sales() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState("");
  const [amount, setAmount] = useState(0);

  const addSale = () => {
    setSales([...sales, { sale: newSale, amount }]);
    setNewSale("");
    setAmount(0);
  };

  const deleteSale = (index) => {
    setSales(sales.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Track Sales</h1>
      <div className="mb-4">
        <Input
          type="text"
          value={newSale}
          onChange={(e) => setNewSale(e.target.value)}
          placeholder="New Sale"
        />
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="ml-2"
        />
        <Button onClick={addSale} className="ml-2">Add Sale</Button>
      </div>
      <ul>
        {sales.map((sale, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {sale.sale} - ${sale.amount}
            <Button variant="destructive" onClick={() => deleteSale(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;