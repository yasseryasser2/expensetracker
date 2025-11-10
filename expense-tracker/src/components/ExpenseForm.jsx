import { useState } from "react";
export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !amount || !category || !date) {
      alert("Please fill out everything");
      return;
    }

    const expenseObject = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      date: date,
    };
    onAddExpense(expenseObject);

    setDescription("");
    setAmount("");
    setCategory("Food");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transportation</option>
          <option>Entertainment</option>
          <option>Bills</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}
