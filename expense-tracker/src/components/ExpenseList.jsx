import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses yet. Add one above!</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}
