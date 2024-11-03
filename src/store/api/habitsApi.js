import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const habitsApi = createApi({
    reducerPath: 'habits',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7154'}),
    endpoints: (builder) => {
        return {
        fetchHabit: builder.query({
            query: (id) => {
                return {
                    url: `/api/habits/${id}`,
                    method: 'GET'
                }
            }
        }),
        fetchHabits: builder.query({
            providesTags: ['Habits'],
            query: () => {
                return {
                    url: `/api/habits/`,
                    method: 'GET'
                }
            }
        }),
        searchHabits: builder.query({
            providesTags: ['Habits'],
            query: ({term, date}) => {
                return {
                    url: `/api/habits/search?term=${term}&date=${date}`,
                    method: 'GET'
                }
            }
        }),
        addHabit: builder.mutation({
            invalidatesTags: ['Habits'],
            query: ({name, habitType, iconId, startDate, isTimeBased, quantity, frequency, repeatMode, repeatDaysOfMonth, repeatDaysOfWeek, repeatInterval, reminderTimes, groupId}) => {
                return {
                    url: `/api/habits/`,
                    method: 'POST',
                    body: {name, habitType, iconId, startDate, isTimeBased, quantity, frequency, repeatMode, repeatDaysOfMonth, repeatDaysOfWeek, repeatInterval, reminderTimes, groupId}
                }
            }
        }),
        addDayResult: builder.mutation({
            invalidatesTags: ['Habits'],
            query: ({id, date, status, progress}) => {
                return {
                    url: `/api/habits/${id}`,
                    method: 'PATCH',
                    jsonContentType: 'application/json-patch+json',
                    body: [
                        {
                            "op": "add",
                            "path": "/dayResults/-",
                            "value": {
                                "Progress": progress,
                                "Status": status,
                                "Date": date
                            }
                        }
                    ]
                }
            }
        }),
        dailyUpdate: builder.mutation({
            invalidatesTags: ['Habits'],
            query: ({id, docs}) => {
                console.log(docs)
                return {
                    url: `/api/habits/${id}`,
                    method: 'PATCH',
                    jsonContentType: 'application/json-patch+json',
                    body: [...docs]
                }
            }
        }),
        
    }
}})

export const {useFetchHabitQuery, useFetchHabitsQuery, useSearchHabitsQuery, useAddHabitMutation, useAddDayResultMutation, useDailyUpdateMutation} = habitsApi;
export {habitsApi};