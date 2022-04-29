import { configureStore } from '@reduxjs/toolkit'

import  filterByCategory  from './filterByCategorySlice'
import  carsSlice  from './carsSlice'

export const store = configureStore({
  reducer: {
      filterByCategory,
      carsSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch