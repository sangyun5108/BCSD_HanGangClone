import { configureStore } from "@reduxjs/toolkit";
import { getGoodReviewLecturesApi } from "../API/getGoodReviewLecturesAPI";

export const store = configureStore({
    reducer:{
        [getGoodReviewLecturesApi.reducerPath]:getGoodReviewLecturesApi.reducer
    }
})