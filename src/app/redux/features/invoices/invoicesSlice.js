import { createSlice } from '@reduxjs/toolkit';

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
  ]
});

export default invoicesSlice.reducer;
