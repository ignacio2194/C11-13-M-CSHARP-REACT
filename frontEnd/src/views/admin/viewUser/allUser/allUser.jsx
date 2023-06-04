import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import SideBar from '../../dashboard/sideBar';
import './allUser.css';
import Navbar from '../../dashboard/navBar';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://sdlt2.azurewebsites.net/api/Account/GetAllUsers');
        const users = response.data;
        setAllUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="dashboard-container">
        <Paper className="container" style={{ backgroundColor: '#FFEBDE', padding: '20px' }}>
          <Typography variant="h4" component="h1" align="center">
            Todos los Usuarios
          </Typography>
          <List>
            {allUsers.map((user) => (
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
