// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
// import SideBar from '../../dashboard/sideBar';
// import './allUser.css';
// import Navbar from '../../dashboard/navBar';

// const AllUsers = () => {
//   const [adminUsers, setAdminUsers] = useState([]);
//   const [activeAdminUser, setActiveAdminUser] = useState(null); // Nuevo estado para almacenar el usuario activo

//   useEffect(() => {
//     const fetchAdminUsers = async () => {
//       try {
//         // Obtener todos los usuarios
//         const response = await axios.get('https://sdlt2.azurewebsites.net/api/Account/GetAllUsers');
//         const users = response.data;

//         // Filtrar los usuarios con el rol de administrador (RoleId = "admin")
//         const adminUsers = users.filter(user => user.RoleId === "admin");

//         // Buscar el usuario activo (puedes ajustar la condición según tus necesidades)
//         const activeUser = adminUsers.find(user => user.UserName === sessionStorage.getItem("userName"));
//         setActiveAdminUser(activeUser);

//         setAdminUsers(adminUsers);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAdminUsers();
//   }, []);

//   return (
//     <div>
//       <SideBar />
//       <Navbar />
//       <div className="dashboard-container">
//         <Paper className="container" style={{ backgroundColor: '#FFEBDE', padding: '20px' }}>
//           <Typography variant="h4" component="h1" align="center">
//             Usuarios Administradores
//           </Typography>
//           <List>
//             {adminUsers.map((user) => (
//               <ListItem key={user.Id}>
//                 <div className="user-container">
//                   <ListItemText
//                     primaryTypographyProps={{ variant: 'h6' }}
//                     primary={user.UserName}
//                     secondary={
//                       <React.Fragment>
//                         <span>Email: {user.Email}</span>
//                         <br />
//                         <span>Username: {user.UserName}</span>
//                       </React.Fragment>
//                     }
//                   />
//                   {activeAdminUser && activeAdminUser.Id === user.Id && ( // Mostrar un indicador para el usuario activo
//                     <span>Activo</span>
//                   )}
//                 </div>
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import SideBar from '../../dashboard/sideBar';
import './allUser.css';
import Navbar from '../../dashboard/navBar';

const AllUsers = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [activeAdminUserId, setActiveAdminUserId] = useState(null); // Nuevo estado para almacenar el ID del usuario activo

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        // Obtener todos los usuarios
        const response = await axios.get('https://sdlt2.azurewebsites.net/api/Account/GetAllUsers');
        const users = response.data;

        // Filtrar los usuarios con el rol de administrador (RoleId = "admin")
        const adminUsers = users.filter(user => user.RoleId === "admin");

        // Buscar el ID del usuario activo (puedes ajustar la condición según tus necesidades)
        const activeAdminUserId = adminUsers.find(user => user.UserName === sessionStorage.getItem("userName"))?.Id;
        setActiveAdminUserId(activeAdminUserId);

        setAdminUsers(adminUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdminUsers();
  }, []);

  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="dashboard-container">
        <Paper className="container" style={{ backgroundColor: '#FFEBDE', padding: '20px' }}>
          <Typography variant="h4" component="h1" align="center">
            Usuarios Administradores
          </Typography>
          <List>
            {adminUsers.map((user) => (
              <ListItem key={user.Id}>
                <div className="user-container">
                  <ListItemText
                    primaryTypographyProps={{ variant: 'h6' }}
                    primary={user.UserName}
                    secondary={
                      <React.Fragment>
                        <span>Email: {user.Email}</span>
                        <br />
                        <span>Username: {user.UserName}</span>
                      </React.Fragment>
                    }
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
};

export default AllUsers;

