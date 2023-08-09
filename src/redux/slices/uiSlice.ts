import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// import rootState for useSelector
import { RootState } from "../store";

interface ui {
  isLoading: boolean;
  error: boolean;
}

const initialState: ui = {
  isLoading: false,
  error: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setIsLoading } = uiSlice.actions;
export const uiSelector = (state: RootState) => state.uiReducer;
export default uiSlice.reducer;
