import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthRouter } from "../login";
import { ControlGastosRouter } from "../controlDeGastos";


export const AppRouter = () => {

  const {status} =useSelector(state=>state.auth)
  
  return (
    <Routes>

        {
          (status === 'authenticated')
            ? <Route path="/*" element={ <ControlGastosRouter/> } />
            : <Route path="/auth/*" element={ <AuthRouter/> } />
        }

      <Route path='/*' element={ <Navigate to='/auth/login' />  } />

    </Routes>
  )
}