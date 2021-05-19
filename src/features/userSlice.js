import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData:null
    },
    reducers: {
        setIsSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        }
    }
})

export const { setIsSignedIn, setUserData, setSearchInput, setBlogData } = userSlice.actions;
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectuserData = (state) => state.user.userData;
export const selectsearchInput = (state) => state.user.searchInput;
export const selectblogData = (state) => state.user.blogData;

export default userSlice.reducer;