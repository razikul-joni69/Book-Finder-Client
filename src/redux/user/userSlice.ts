import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../configs/firebase.config";

interface IUser {
    user: {
        name: string | null;
        email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

interface IUserCredentials {
    email: string;
    password: string;
}

const initialState: IUser = {
    user: {
        name: null,
        email: null,
    },
    isLoading: false,
    isError: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }: IUserCredentials) => {
        const data = await signInWithEmailAndPassword(auth, email, password);
        return data.user;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
