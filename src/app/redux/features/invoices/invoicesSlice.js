import { createSlice, current } from '@reduxjs/toolkit';

const date = new Date();
const fullName = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
export const invoicesSlice = createSlice({
  name: 'Invoices',
  initialState: [],
  reducers: {
    addInvoiceDraft: (state, action) => {
      const newInvoice = {
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        contractor: action.payload.contractor,
        status: 'Draft',
        dateDue: fullName,
        invoicePrice: +action.payload.invoicePrice
      };
      state.push(newInvoice);
    },
    addInvoicePending: (state, action) => {
      const newInvoice = {
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        contractor: action.payload.contractor,
        status: 'Pending',
        dateDue: fullName,
        invoicePrice: +action.payload.invoicePrice
      };
      state.push(newInvoice);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload.id);
    },
    changeStatusOfInvoice: (state, action) => {
      const index = state.findIndex((invoice) => invoice.id === action.payload.id);
      state[index].status = 'Paid';
    },
    saveInvoice: (state, action) => {
      const index = state.findIndex((invoice) => invoice.id === action.payload.id);
      state[index].contractor = action.payload.contractor;
      state[index].invoicePrice = +action.payload.invoicePrice;
      state[index].dateDue = action.payload.dateDue;
      state[index].status = 'Pending';
    }
  }
});

export const {
  addInvoiceDraft,
  addInvoicePending,
  deleteInvoice,
  changeStatusOfInvoice,
  saveInvoice
} = invoicesSlice.actions;

export default invoicesSlice.reducer;
