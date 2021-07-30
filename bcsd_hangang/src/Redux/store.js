import { configureStore } from "@reduxjs/toolkit";
import { getGoodReviewLecturesApi } from "../RTKquery/getGoodReviewLecturesAPI";

export const store = configureStore({
    reducer:{
        [getGoodReviewLecturesApi.reducerPath]:getGoodReviewLecturesApi.reducer
    }
})