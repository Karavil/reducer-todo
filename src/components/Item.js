import React from "react";

const Item = ({ item }) => {
   return (
      <>
         <h1>{item.name}</h1>
         <p>{item.completed ? "Complete" : "Not Complete"}</p>
      </>
   );
};

export default Item;
