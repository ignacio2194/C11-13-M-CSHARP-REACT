import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { createFilter } from "redux-persist-transform-filter";

const paymentFilter = createFilter("payment", ["Id"]);

const persistConfig = {
  key: "root",
  storage,
  transforms: [paymentFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

const resetStore = () => {
  persistor.purge();
  return new Promise((resolve, reject) => {
    persistor
      .flush()
      .then(() => {
        console.log("Persistor purged successfully");
        resolve();
      })
      .catch((error) => {
        console.error("Failed to purge persistor:", error);
        reject(error);
      });
  });
};

export { store, persistor, resetStore };
