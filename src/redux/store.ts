import { configureStore } from "@reduxjs/toolkit";
import formReducer from './slices/formStateSlice'
import stepsReducer from './slices/stepsSlice'

export const store = configureStore({
  reducer: {
    formState: formReducer,
    steps: stepsReducer,
  }, 
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch