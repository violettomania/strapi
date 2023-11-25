import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface submenuState {
  value: boolean;
}

const initialState: submenuState = {
  value: false,
};

export const submenuSlice = createSlice({
  name: 'submenu',
  initialState,
  reducers: {
    showSubmenu: (state) => {
      state.value = true;
    },
    hideSubmenu: (state) => {
      state.value = false;
    },
  },
});

export const { showSubmenu, hideSubmenu } = submenuSlice.actions;

export const selectSubmenu = (state: RootState) => state.submenu.value;

export default submenuSlice.reducer;
