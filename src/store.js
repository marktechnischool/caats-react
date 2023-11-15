import { configureStore } from "@reduxjs/toolkit";
import imagesInputReducerSlice from "./images/imagesInputReducerSlice";

export default configureStore({ reducer: {
    images: imagesInputReducerSlice
}})