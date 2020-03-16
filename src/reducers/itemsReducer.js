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
      case "CLEAR_ITEMS":
         return [];
      case "ADD_TAGS":
         return items.map(item => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  tags: [...item.tags, ...action.payload.tags]
               };
            }
            return item;
         });
      default:
         return items;
   }
};
