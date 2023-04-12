import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { transaccionSlice } from "./transacciones/transaccionesSlice";
import { categoriesSlice } from "./categories/categoriesSlice";


export default configureStore({
  reducer: {
    auth:authSlice.reducer,
    transaciones:transaccionSlice.reducer,
    categories:categoriesSlice.reducer
  },
})