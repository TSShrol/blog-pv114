import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: '1',
        title: "Learninп Redux Toolkit",
        content: "Welcome to the React Redux Quick Start tutorial! This tutorial will briefly introduce you to React Redux and teach you how to start using it correctly.",
        userId: 2

    },
    {
        id: '2',
        title: "Learning createSlice...",
        content: "Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.",
        userId: 1
    }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // postAdded: {  //"posts/postAdded"   postAdded()
        //     reducer(state, action) {
        //         state.push(action.payload)
        //     },
        //     prepare(title, content) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 content
        //         }
        //         }
        //     }
        // }
        postAdded: (state, action) =>{
            console.log(action.payload);
            state.push(action.payload);
        }

    }
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;





