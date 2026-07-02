import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  cursorVariant: 'default',
  scrollY: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setCursorVariant: (state, action) => {
      state.cursorVariant = action.payload;
    },
    setScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setCursorVariant, setScrollY } = uiSlice.actions;

export default uiSlice.reducer;
