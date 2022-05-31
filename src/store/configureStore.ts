import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../app/counterSlice";
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from "react-redux";


export const store = configureStore({
      reducer: {
             counter: counterSlice.reducer
      }
})

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<Appdispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;