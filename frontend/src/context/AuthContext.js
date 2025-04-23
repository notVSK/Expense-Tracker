import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../api/apiEndpoints';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);  // State for error handling
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(AUTH_API.PROFILE, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(AUTH_API.LOGIN, { username, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/');
      window.location.reload();  // This might cause an unnecessary reload, so consider removing this line
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid username or password.'); // Display error message
    }
  };

  const signup = async (username, password) => {
    try {
      const response = await axios.post(AUTH_API.SIGNUP, { username, password });
      console.log('Signup response:', response);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response && error.response.status === 409) {
        // Handle duplicate key error (e.g., email already exists)
        setError('User already exists.');  // Display error message
      }
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};
