import { createSlice } from '@reduxjs/toolkit' 


const initialState: Object[] = [];


export const filterByCategorySlice = createSlice({
    name: 'isChecked',
    initialState,
    reducers: {
      addCategory: (state, action) => {             
        return [...state, action.payload]
      },
      removeCategory: (state, action) => {
        return [...state.filter(item => item !== action.payload)]        
      },      
    },
  })
  

  export const { addCategory, removeCategory } = filterByCategorySlice.actions
  
  export default filterByCategorySlice.reducer