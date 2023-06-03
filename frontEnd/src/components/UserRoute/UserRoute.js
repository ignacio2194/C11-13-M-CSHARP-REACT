import React from 'react'
import { Route, useNavigate } from 'react-router-dom';
import Home from '../../views/home/home';
 export const UserRoute = ({  element: Element, ...rest }) => {
   const isAdmin = JSON.parse(sessionStorage.getItem('rol'));
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {isAdmin==='user' ? <Route {...rest} element={<Home />} /> : navigate('/admin/dashboard')}
    </React.Fragment>
  );
};

export default UserRoute
