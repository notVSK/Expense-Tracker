
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for error message
  const { login } = useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');  // Set error message
    }
  };


  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      //backgroundImage: `url(${BACKGROUND_LOGIN_SIGNUP})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(6px)',
      position: 'relative',
      zIndex: 1,
    },
    form: {
      background: 'rgba(255, 255, 255, 0.85)',
      padding: '45px 35px',
      borderRadius: '25px',
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25)',
      maxWidth: '420px',
      width: '90%',
      animation: 'slideIn 0.6s ease',
      transition: 'all 0.3s ease-in-out',
    },
    input: {
      width: '100%',
      padding: '14px',
      margin: '14px 0',
      borderRadius: '12px',
      border: '1px solid #ced4da',
      fontSize: '16px',
      boxSizing: 'border-box',
      transition: 'all 0.3s',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#FF00FF',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '20px',
      transition: '0.3s ease',
      boxShadow: '0 6px 12px rgba(255, 0, 255, 0.3)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#343a40',
      fontSize: '28px',
      fontWeight: 'bold',
      animation: 'fadeInDown 0.5s ease',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: '24px',
      color: '#6c757d',
      fontSize: '15px',
      fontStyle: 'italic',
      animation: 'fadeIn 0.6s ease',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    logoImg: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      border: '2px solid white',
      animation: 'bounceIn 0.8s ease',
    },
    link: {
      textAlign: 'center',
      marginTop: '22px',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s',
    },
    error: {
      color: '#ff4d4f',
      textAlign: 'center',
      marginBottom: '10px',
      fontWeight: '500',
    },
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img
          src={logo_kharcha_guru}
          alt="KharchaGuru Logo"
          style={styles.logoImg}
        />
       </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subtitle}>Streamline your expense management...</p>
        {error && <p style={styles.error}>{error}</p>}
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
        <button type="submit" style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#218838')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF00FF')}
        >
          Login

        </button>
        <p style={styles.link}>
          New here? <Link to="/signup" style={{ color: '#007bff' }}>Create an Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;