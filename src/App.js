import React, { useReducer, useState } from "react";
import { itemsReducer, initialItems } from "./reducers/itemsReducer";

import styled, { createGlobalStyle } from "styled-components";

import Item from "./components/Item";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Global = createGlobalStyle`
   * {
      box-sizing: border-box;
   }
   body {
      margin: 0;
   }
`;
const Container = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;

   box-shadow: 0 0 10px black;
`;

const InputContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: flex-end;
   width: 700px;
   padding: 20px 0 40px;
`;

const ItemContainer = styled.div`
   background: black;
   padding: 5px 0;
`;

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
            tags:
               itemTags.length > 0 ? itemTags.replace(" ", "").split(",") : []
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
         <Global />
         <Container>
            <InputContainer>
               <TextField
                  label="Task name"
                  onChange={e => setItemName(e.target.value)}
               />
               <TextField
                  label="Tags"
                  onChange={e => setTags(e.target.value)}
               />
               <Button onClick={submitNewItem}>Add Item</Button>
               <Button onClick={() => itemsDispatch({ type: "CLEAR_ITEMS" })}>
                  Clear Items
               </Button>
            </InputContainer>
         </Container>
         {itemCards.length > 0 ? (
            <ItemContainer>{itemCards}</ItemContainer>
         ) : (
            <></>
         )}
      </>
   );
}

export default App;
