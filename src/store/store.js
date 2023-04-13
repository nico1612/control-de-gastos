import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { transaccionSlice } from "./transacciones/transaccionesSlice";


export default configureStore({
  reducer: {
    auth:authSlice.reducer,
    transaciones:transaccionSlice.reducer,
  },
})