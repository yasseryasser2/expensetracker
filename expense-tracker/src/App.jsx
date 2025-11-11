import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  function handleFilterChange(category) {
    setFilter(category);
  }

  function getFilteredExpenses() {
    return filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);
  }

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="app">
      <header>
        <h1>💰 Expense Tracker</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <Filter currentFilter={filter} onFilterChange={handleFilterChange} />
        </aside>

        <div className="content">
          <ExpenseForm onAddExpense={addExpense} />
          <Summary expenses={expenses} />
          <ExpenseList
            expenses={getFilteredExpenses()}
            onDelete={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
