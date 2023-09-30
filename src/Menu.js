import React, { useEffect, useState } from "react";

const Menu = ({ items, category }) => {
  const [menu, setMenu] = useState([]);

  function getCurrentMenu(currentCategory) {
    return items.filter((item) => item.category === currentCategory);
  }

  useEffect(
    function () {
      if (category === "all") {
        setMenu((menu) => [...items]);
      }
      if (category !== "all") {
        setMenu((menu) => getCurrentMenu(category));
      }
    },
    [category]
  );

  return (
    <div>
      <h1>{category}</h1>
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

function MenuItem({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <img style={{ width: "200px" }} src={item.img} alt="dl" />;
      <h4>{item.category}</h4>
      <p>{item.desc}</p>
    </div>
  );
}

export default Menu;
