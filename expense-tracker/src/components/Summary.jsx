export default function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals[expense.category] = expense.amount;
    }
  });

  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="total">
        <h3>Total Expenses</h3>
        <p>${total.toFixed(2)}</p>
      </div>
      <h3>By Category</h3>
      <div className="category-breakdown">
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <div key={category} className="category-item">
            <span>{category}</span>
            <span>${amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
