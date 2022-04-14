import { configureStore } from '@reduxjs/toolkit'

import  checkBoxReducer  from './checkBoxSlice'

export const store = configureStore({
  reducer: {
      checkBox: checkBoxReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch