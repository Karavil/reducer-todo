export const initialItems = [
   {
      name: "Learn about reducers",
      completed: false,
      id: 3892987589
   },
   {
      name: "Learn about reducers",
      completed: false,
      id: 3892987589
   }
];

export const itemsReducer = (items, action) => {
   switch (action.type) {
      case "ADD_ITEM":
         return [...items, ...action.payload];
      case "DELETE_ITEM":
         return items.filter(item => item.id !== action.payload);
      default:
         return items;
   }
};
