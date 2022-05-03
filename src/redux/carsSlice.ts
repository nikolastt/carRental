import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICarProps{
    model: string;
    autoMaker: string;
    amount: string;
    typeFuel: string;
    category: string;
    img: string;
    seats: string;
    gear: string;
}

const initialState = {
    cars : <ICarProps[]> []
};

export const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        getCars: (state, action) => {
            return void{...state.cars = action.payload}
        }
    }
})

export const { getCars } = carsSlice.actions;
export default carsSlice.reducer;