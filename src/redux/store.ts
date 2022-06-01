import { configureStore } from '@reduxjs/toolkit'

import  filterByCategory  from './filterByCategorySlice'
import  carsSlice  from './carsSlice'
import  userSlice from './userSlice'

export const store = configureStore({
  reducer: {
      filterByCategory,
      carsSlice,
      userSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch