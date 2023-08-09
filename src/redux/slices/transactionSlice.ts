import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// imported model
import { Transaction } from "../../models/transactionModel";

// imported rootstate for useSelector
import { RootState } from "../store";

const initialState: Transaction = {
  amountReceived: 0,
  amountSent: 0,
  transactionFee: 0,
  conversionRate: 0,
  operationName: "",
  paymentMethod: "",
  redirectUrl: "",
  responseError: [],
  transactionRef: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setAmountSent: (state, action: PayloadAction<number>) => {
      state.amountSent = action.payload;
    },
    setAmountReceived: (state, action: PayloadAction<number>) => {
      state.amountReceived = action.payload;
    },
    setTransactionFee: (state, action: PayloadAction<number>) => {
      state.transactionFee = action.payload;
    },
    setConversionRate: (state, action: PayloadAction<number>) => {
      state.conversionRate = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  setAmountReceived,
  setAmountSent,
  setTransactionFee,
  setConversionRate,
  setPaymentMethod,
} = transactionSlice.actions;
export const transactionSelector = (state: RootState) =>
  state.transactionReducer;
export default transactionSlice.reducer;
