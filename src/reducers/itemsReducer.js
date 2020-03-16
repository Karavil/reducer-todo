export const initialItems = [];

export const itemsReducer = (items, action) => {
   switch (action.type) {
      case "ADD_ITEM":
         return [...items, action.payload];
      case "DELETE_ITEM":
         return items.filter(item => item.id !== action.payload);
      case "TOGGLE_ITEM":
         return items.map(item => {
            if (item.id === action.payload) {
               return {
                  ...item,
                  completed: !item.completed
               };
            }
            return item;
         });
      default:
         return items;
   }
};
