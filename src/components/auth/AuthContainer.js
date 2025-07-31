import React from 'react';

function AuthContainer({ title, children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
    padding: '20px',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    padding: '30px 25px',
    width: '100%',
    maxWidth: '700px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
};

export default AuthContainer;
