export default function Filter({ currentFilter, onFilterChange }) {
  const categories = [
    "All",
    "Food",
    "Transportation",
    "Entertainment",
    "Bills",
    "Shopping",
    "Other",
  ];

  return (
    <div className="filter">
      <h3>Filter by category</h3>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              category === currentFilter ? "active" : ""
            }`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
