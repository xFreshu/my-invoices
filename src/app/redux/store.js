import { configureStore } from '@reduxjs/toolkit';
import InvoiceReducer from './features/invoices/invoicesSlice';

const store = configureStore({
  reducer: InvoiceReducer
});

export default store;
