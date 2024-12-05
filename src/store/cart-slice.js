import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemsToCart(state, action) {
            const newItems = action.payload; //get data
            const existingItem = state.items.find(item => item.id === newItems.is); //check if item already exists
            if (!existingItem) {
                state.items.push({
                    itemId: newItems.id,
                    price: newItems.price,
                    quantity: 1,
                    totalPrice: newItems.price,
                    name: newItems.name
                })
            } else { // adding more item and update price if click on existing item
                existingItem.quantity++,
                existingItem,totalPrice = existingItem.totalPrice + newItems.totalPrice;
            }
        }
    }
});

export const cartActions = cartSlice.actions; //export actions
export default cartSlice; //export slice