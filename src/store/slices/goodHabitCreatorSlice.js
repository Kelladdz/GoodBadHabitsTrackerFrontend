import { createSlice } from '@reduxjs/toolkit';
import { HABIT_TYPES } from '../../constants/habits-properties';
import { remove, repeat } from 'lodash';

const goodHabitCreatorSlice = createSlice({
    name: 'goodHabitCreator',
    initialState: { 
        name: '',
        iconIndex: 0,
        habitType: 0,
        quantity: 60,
        isTimeBased: true,
        frequency: 1,
        repeatMode: 1,
        repeatDaysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        repeatDaysOfMonth: [],
        repeatInterval: null,
        startDate: new Date().toISOString().substring(0, 10),
        groupId: null
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeIcon: (state, action) => {
            state.iconIndex = action.payload;
        },
        changeHabitType: (state, action) => {
            state.habitType = action.payload;
        },
        changeQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        changeIsTimeBased: (state, action) => {
            state.isTimeBased = action.payload;
        },
        changeFrequency: (state, action) => {
            state.frequency = action.payload;
        },
        changeRepeatMode: (state, action) => {
            state.repeatMode = action.payload;
        },
        addRepeatDayOfWeek: (state, action) => {
            state.repeatDaysOfWeek.push(action.payload);
            state.repeatDaysOfWeek.sort();
        },
        removeRepeatDayOfWeek: (state, action) => {
            remove(state.repeatDaysOfWeek, (day) => day === action.payload);
            state.repeatDaysOfWeek.sort();
        },
        clearRepeatDaysOfWeek: (state) => {
            state.repeatDaysOfWeek = [];
        },
        addRepeatDayOfMonth: (state, action) => {
            state.repeatDaysOfMonth.push(action.payload);
            state.repeatDaysOfMonth.sort();
        },
        removeRepeatDayOfMonth: (state, action) => {
            remove(state.repeatDaysOfMonth, (day) => day === action.payload);
            state.repeatDaysOfMonth.sort();
        },
        clearRepeatDaysOfMonth: (state) => {
            state.repeatDaysOfMonth = [];
        },
        changeRepeatInterval: (state, action) => {
            state.repeatInterval = action.payload;
        },
        changeStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        changeGroup: (state, action) => {
            console.log('action.payload', action.payload);
            state.groupId = action.payload;
        },
        resetForm: (state) => {
            state.name = '';
            state.iconIndex = 0;
            state.habitType = 0;
            state.quantity = 1;
            state.isTimeBased = true;
            state.frequency = 1;
            state.repeatMode = 1;
            state.repeatDaysOfWeek = [0, 1, 2, 3, 4, 5, 6];
            state.repeatDaysOfMonth = [];
            state.repeatInterval = [];
            state.startDate = new Date().toISOString().substring(0, 10);
            state.groupId = null;
        }
}});

export const {
    changeName, 
    changeIcon,
    changeHabitType, 
    changeQuantity, 
    changeIsTimeBased, 
    changeFrequency,
    changeRepeatMode, 
    addRepeatDayOfWeek, 
    removeRepeatDayOfWeek, 
    clearRepeatDaysOfWeek,
    addRepeatDayOfMonth, 
    removeRepeatDayOfMonth,
    clearRepeatDaysOfMonth,
    changeRepeatInterval,
    changeStartDate,
    changeGroup,
    resetForm} = goodHabitCreatorSlice.actions;
export const goodHabitCreatorReducer = goodHabitCreatorSlice.reducer;