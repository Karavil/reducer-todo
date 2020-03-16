import React from "react";
import styled from "styled-components";

const Card = styled.div`
   box-sizing: border-box;
   background: black;
   color: white;
   padding: 20px;

   opacity: ${({ completed }) => (completed ? "0.2" : "1")};

   &:hover {
      cursor: pointer;
   }
`;

const Item = ({ item, toggleItem }) => {
   return (
      <Card completed={item.completed} onClick={() => toggleItem(item.id)}>
         <h1>{item.name}</h1>
         <p>{item.completed ? "Complete" : "Not Complete"}</p>
      </Card>
   );
};

export default Item;
