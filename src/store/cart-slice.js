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
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    itemId: newItems.id,
                    price: newItems.price,
                    quantity: 1,
                    totalPrice: newItems.totalPrice,
                    name: newItems.name
                })
            } else { // adding more item and update price if click on existing item
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItems.totalPrice;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem === 1) {
                state.items = state.items.filter(item => item.id === id); //keeping all items except deleting one
            } else {
                existingItem.quantity--;
            }

        }
    }
});

export const cartActions = cartSlice.actions; //export actions
export default cartSlice; //export slice