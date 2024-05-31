import { createReducer } from '@reduxjs/toolkit';
import { setContents } from '../actions/data';

const initialState = {
    contents: []
};

const dataReducer = createReducer(initialState, (builder) => {
    builder.addCase(setContents, (state, action) => {
        state.contents = action.payload;
    });
});

export default dataReducer;
