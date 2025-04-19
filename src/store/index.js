import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux"; // Adicionado para combinar os reducers corretamente
import gameReducer from "./gameSlice";
import generalReducer from "./generalSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["game", "general"],
};

const rootReducer = combineReducers({
  game: gameReducer,
  general: generalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
