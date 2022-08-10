import React from 'react';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    // const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    if(user){
        return  children
    }
    return  <Navigate to="/"></Navigate>
    
  
}

export default ProtectedRoute;
