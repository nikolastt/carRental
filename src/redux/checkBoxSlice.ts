import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Object[] = [

]


export const checkBoxSlice = createSlice({
    name: 'isChecked',
    initialState,
    reducers: {
      checked: (state, action) => {             
        return [...state, {name: action.payload, checked:true}]
      },
      unChecked: (state, action: PayloadAction<React.ChangeEvent<HTMLInputElement>>) => {
        return {...state, name: '', checked: false}
      },
      
    },
  })
  

  export const { checked, unChecked } = checkBoxSlice.actions
  
  export default checkBoxSlice.reducer