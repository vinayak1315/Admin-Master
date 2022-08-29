import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import React, { useEffect } from 'react'

const ProtectRoute = ({ children }) => {
    // const { loading, isAuthenticated, user } = useSelector(state => state.auth)
    // useEffect(() => {
    //     if (!user) {
          
    //     }
    //   }, [isAuthenticated, loading]);
    // if (!loading && isAuthenticated) {
    //     if (user.statusCode === 200) {
    //       return children;
    //     }
    //   } else {
    //     return <Navigate to={"/login"} />;
    //   }
}

export default ProtectRoute