import { configureStore } from '@reduxjs/toolkit'

import  filterByCategory  from './filterByCategory'

export const store = configureStore({
  reducer: {
      filterByCategory,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch