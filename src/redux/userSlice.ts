import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserProps {
  displayName: string;
  email: string;
  photoURL: string;
  id: string;
}

const initialState = {
  user: <IUserProps>{},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.user.displayName = action.payload?.displayName),
        (state.user.email = action.payload?.email),
        (state.user.photoURL = action.payload?.photoURL),
        (state.user.id = action.payload?.uid);
    },
    logOutUser: (state) => {
      state.user = <IUserProps>{};
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
