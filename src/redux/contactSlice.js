import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialValues,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({
        id: nanoid(4),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
