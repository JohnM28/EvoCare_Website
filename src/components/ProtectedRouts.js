import React from "react";
import { Redirect, Route } from "react-router-dom";
const ProtectedRouts = ({ component: Component, ...rest }) => {
      const isAuthenticated = localStorage.getItem("token");
    
    
    console.log(isAuthenticated )

    return (
    <Route {...rest}
    render={(props) =>
       
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    
    />
    
    );
}
 
export default ProtectedRouts;