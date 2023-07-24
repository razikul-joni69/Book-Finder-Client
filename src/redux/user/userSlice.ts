import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import auth from "../../configs/firebase.config";

const googleProvider = new GoogleAuthProvider();

interface IUser {
    user: {
        name: string | null;
        email: string | null;
        photoUrl: string | null;
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
        photoUrl: null,
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

export const continueWithGoogle = createAsyncThunk(
    "user/continueWithGoogle",
    async () => {
        const data = await signInWithPopup(auth, googleProvider);
        return data.user;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                state.user.email = action.payload;
                state.user.name = action.payload;
                state.user.photoUrl = action.payload;
            } else {
                state.user.email = action.payload.email;
                state.user.name = action.payload.displayName;
                state.user.photoUrl = action.payload.photoURL;
            }
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.isError = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.name = action.payload.displayName;
                state.user.photoUrl = action.payload.photoURL;
                state.isLoading = false;
                state.isError = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
            });
    },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
