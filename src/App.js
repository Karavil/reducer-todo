import React, { useReducer, useState } from "react";
import { itemsReducer, initialItems } from "./reducers/itemsReducer";
import Item from "./components/Item";

function App() {
   const [items, itemsDispatch] = useReducer(itemsReducer, initialItems);
   const [newItem, setNewItem] = useState("");

   const itemCards = items.map(item => <Item item={item} />);

   return (
      <>
         <input type="text" />
         <button>Add Item</button>
         {itemCards}
      </>
   );
}

export default App;
