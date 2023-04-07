import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { TransaccionSlice } from "./transacciones/transaccionesSlice";


export default configureStore({
  reducer: {
    auth:authSlice.reducer,
    transaciones:TransaccionSlice.reducer
  },
})