import { configureStore } from "@reduxjs/toolkit";
// Reducer
import user from "./slices/user";
import glossary from "./slices/glossary";
import myPairs from "./slices/my-pairs";
import practice from "./slices/practice";

export default configureStore({
  reducer: {
    user,
    glossary,
    myPairs,
    practice
  }
})