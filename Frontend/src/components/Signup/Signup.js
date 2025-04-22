import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 6 || password.length < 6) {
      setError('Username and password must be at least 6 characters long.');
      return;
    }

    signup(username, password).catch(() => {
      setError('Signup failed. Please try again.');
    });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      //backgroundImage: `url(${BACKGROUND_LOGIN_SIGNUP})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      maxWidth: '400px',
      width: '90%',
      backdropFilter: 'blur(10px)',
    },
    input: {
      width: '100%',
      padding: '14px',
      margin: '10px 0',
      borderRadius: '10px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '26px',
      color: '#333',
    },
    link: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '14px',
    },
    logo: {
      marginBottom: '20px',
    },
    logoImg: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      border: '2px solid #28a745',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img src={logo_kharcha_guru} alt="Logo" style={styles.logoImg} />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>New User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <p style={styles.link}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
