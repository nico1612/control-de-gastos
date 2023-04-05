import { authSlice } from "./auth/authSlice";


export default configureStore({
    reducer: {
      auth:authSlice.reducer,
    },
  })