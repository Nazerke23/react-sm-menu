import React from "react";

const Categories = ({ items, onCategory }) => {
  const arrayOfCategories = items.map((item) => item.category);
  const categorySet = new Set(arrayOfCategories);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <button onClick={() => onCategory("all")}>All</button>
      {Array.from(categorySet).map((category) => (
        <button key={category} onClick={() => onCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
