import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '@store/store';

const initialState: any = {
    events: [],
};

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
    },
});

export const { addEvent } = appointmentSlice.actions;

export const selectEvents = (state: AppState) => state.events;

export default appointmentSlice.reducer;
