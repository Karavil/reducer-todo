import React, { useReducer, useState } from "react";
import { itemsReducer, initialItems } from "./reducers/itemsReducer";
import Item from "./components/Item";

function App() {
   const [items, itemsDispatch] = useReducer(itemsReducer, initialItems);
   const [itemName, setItemName] = useState("");

   const submitNewItem = () => {
      itemsDispatch({
         type: "ADD_ITEM",
         payload: {
            name: itemName,
            completed: false,
            id: Date.now()
         }
      });
   };

   const toggleItem = itemID => {
      itemsDispatch({
         type: "TOGGLE_ITEM",
         payload: itemID
      });
   };

   const itemCards = items.map(item => (
      <Item item={item} key={item.id} toggleItem={toggleItem} />
   ));

   return (
      <>
         <input type="text" onChange={e => setItemName(e.target.value)} />
         <button onClick={submitNewItem}>Add Item</button>
         {itemCards}
      </>
   );
}

export default App;
