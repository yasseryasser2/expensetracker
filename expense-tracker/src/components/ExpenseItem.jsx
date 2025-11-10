export default function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <h3>{expense.description}</h3>
        <p className="expense-category">{expense.category}</p>
        <p className="expense-date">{expense.date}</p>
      </div>
      <div className="expense-amount">
        <span>${expense.amount.toFixed(2)}</span>
      </div>
      <button className="delete-button" onClick={() => onDelete(expense.id)}>
        Delete
      </button>
    </div>
  );
}
