import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
name: 'contacts',
initialState: [],
reducers: {
    addContact: (state, action) => {
    state.push(action.payload);
    },
    removeContact: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload.id);
    if (index !== -1) {
        state[index] = action.payload;
    }
    }
}
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;

const store = configureStore({
reducer: {
    contacts: contactsSlice.reducer,
},
});

export default store;
