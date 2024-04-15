// import { createSlice } from "@reduxjs/toolkit";
// import {user} from "../assets/data"

// const initialState = {
//     user: JSON.parse(window?.localStorage.getItem("user")) ?? user,
//     edit: false,
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         login(state, action) {
//             state.user = action.payload;
//             localStorage.setItem("user", JSON.stringify(action.payload));
//         },
//         logout(state) {
//             state.user = null;
//             localStorage?.removeItem("user");
//         },
//         updateProfile(state, action) {
//             state.edit = action.payload;
//         },
//     },
// });

// // Export the reducer
// export default userSlice.reducer;

// // Export the actions directly
// export const { login, logout, updateProfile } = userSlice.actions;

// // Action creators
// export function userLogin(user) {
//     return (dispatch) => {
//         dispatch(login(user));
//     };
// }

// export function Logout() {
//     return (dispatch) => {
//         dispatch(userSlice.actions.logout());
//     };
// }

// export function updateUserProfile(val) {
//     return (dispatch) => {
//         dispatch(userSlice.actions.updateProfile(val));
//     };
// }
