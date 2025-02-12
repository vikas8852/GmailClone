import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
const store=configureStore({
    reducer:{
        // eslint-disable-next-line no-undef
        app:appSlice

    }
});
export default store