import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import sideBarSliceSliceReducer from "./slices/sidebar/sidebarSlice";
import movieSliceSliceReducer from "./slices/movie/movieSlice";




export const store = configureStore({
  reducer: {
    sideBarSlice: sideBarSliceSliceReducer,
    movieSlice: movieSliceSliceReducer,

    // [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      // homeApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
