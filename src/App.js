import React, { useReducer, useState } from "react";
import { itemsReducer, initialItems } from "./reducers/itemsReducer";
import Item from "./components/Item";

function App() {
   const [items, itemsDispatch] = useReducer(itemsReducer, initialItems);
   const [itemName, setItemName] = useState("");
   const [itemTags, setTags] = useState("");

   const submitNewItem = () => {
      itemsDispatch({
         type: "ADD_ITEM",
         payload: {
            name: itemName,
            completed: false,
            id: Date.now(),
            tags: itemTags.replace(" ", "").split(",")
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
         To-Do task name:
         <input type="text" onChange={e => setItemName(e.target.value)} />
         Task tags (seperate by comma):
         <input type="text" onChange={e => setTags(e.target.value)} />
         <button onClick={submitNewItem}>Add Item</button>
         <button onClick={() => itemsDispatch({ type: "CLEAR_ITEMS" })}>
            Clear Items
         </button>
         {itemCards}
      </>
   );
}

export default App;
