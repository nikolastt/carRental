import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

interface ICheckBoxName {
  name: string;
  checked: boolean;
}

const initialState: Object[] = [];


export const checkBoxSlice = createSlice({
    name: 'isChecked',
    initialState,
    reducers: {
      checked: (state, action) => {             
        return [...state, action.payload]
      },
      unChecked: (state, action) => {
        return [...state.filter(item => item !== action.payload)]        
      },      
    },
  })
  

  export const { checked, unChecked } = checkBoxSlice.actions
  
  export default checkBoxSlice.reducer