import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useEffect, useMemo, useState } from 'react';

import { collection, getDocs } from "firebase/firestore";

import {db} from '../firebase/index'



export interface ICarProps{
    model: string;
    automaker: string;
    amount: string;
    typeFuel: string;
    category: string;
    img: string;
    seats: string;
    gear: string;
}


const initialState: ICarProps[] = [];

export const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        getCars: (state, action) => {
            return [state = action.payload]
        }
    }
})

export const { getCars } = carsSlice.actions

export default carsSlice.reducer