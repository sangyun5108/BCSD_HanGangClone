import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getGoodReviewLecturesApi = createApi({
    reducerPath:'lectures',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.hangang.in'
    }),
    endpoints:(build)=>({
        getLectures:build.query({
            query:(departmentId) => ({url:`lectures?departmentId=${departmentId}&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C`})
        })
    })
})

export const {
    useGetLecturesQuery,
} = getGoodReviewLecturesApi;