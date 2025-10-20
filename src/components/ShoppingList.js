import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  const itemsToDisplay = itemsList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddItem(newItem) {
    setItemsList([...itemsList, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={search} onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;