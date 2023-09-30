import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Categories items={items} onCategory={setCategory} />
      <Menu items={items} category={category} />
    </div>
  );
}
export default App;
