import { createSlice } from '@reduxjs/toolkit';

const date = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const t1 = months[date.getMonth()];
const currentDay = `${date.getDate()} ${t1} ${date.getFullYear()}`;

export const invoicesSlice = createSlice({
  name: 'Invoices',
  initialState: [
    {
      id: 'RT3080',
      dateDue: '19 Aug 2021',
      contractor: 'Jensen Huang',
      invoicePrice: 1800.9,
      status: 'Paid'
    },
    {
      id: 'WW5010',
      dateDue: '20 Aug 2021',
      contractor: 'Alex Grim',
      invoicePrice: 556.0,
      status: 'Draft'
    },
    {
      id: 'SS2120',
      dateDue: '21 Aug 2021',
      contractor: 'Alysa Werner',
      invoicePrice: 14002.33,
      status: 'Pending'
    }
  ],
  reducers: {
    addInvoiceDraft: (state, action) => {
      const newInvoice = {
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        contractor: action.payload.contractor,
        status: 'Draft',
        dateDue: currentDay,
        invoicePrice: +action.payload.invoicePrice
      };
      state.push(newInvoice);
    },
    addInvoicePending: (state, action) => {
      const newInvoice = {
        id: Math.random().toString(36).substring(7).toLocaleUpperCase(),
        contractor: action.payload.contractor,
        status: 'Pending',
        dateDue: currentDay,
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
