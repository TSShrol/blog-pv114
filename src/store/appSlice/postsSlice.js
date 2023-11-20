import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Learninп Redux Toolkit",
        content: "Welcome to the React Redux Quick Start tutorial! This tutorial will briefly introduce you to React Redux and teach you how to start using it correctly."
    },
    {
        id: 2,
        title: "Learning createSlice...",
        content: "Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice."
    }
];

const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
      
    }
});


export default postsSlice.reducer;

