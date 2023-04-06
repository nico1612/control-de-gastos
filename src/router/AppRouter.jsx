import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../login/router";
import { ControlGastosRouter } from "../controlDeGastos/routes/ControlGastosRouter";
import { useSelector } from "react-redux";


export const AppRouter = () => {


    const {status} =useSelector(state=>state.auth)

  
    return (
      <Routes>
  
          {
            (status === 'authenticated')
             ? <Route path="/*" element={ <ControlGastosRouter /> } />
             : <Route path="/auth/*" element={ <AuthRouter /> } />
          }
  
          <Route path='/*' element={ <Navigate to='/auth/login' />  } />
  
          {/* Login y Registro */}
          {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
  
          {/* JournalApp */}
          {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
  
      </Routes>
    )
  }