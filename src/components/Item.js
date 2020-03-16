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

   .tags {
      display: flex;
      flex-direction: column;
   }
`;

const Item = ({ item, toggleItem }) => {
   const tags = item.tags.map(tag => <b>{`${tag}`}</b>);
   return (
      <Card completed={item.completed} onClick={() => toggleItem(item.id)}>
         <h1>{item.name}</h1>
         <p>{item.completed ? "Complete" : "Not Complete"}</p>
         <div className="tags">Tags: {tags}</div>
      </Card>
   );
};

export default Item;
