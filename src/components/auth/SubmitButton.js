import React from 'react';

const SubmitButton = ({ text }) => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <button
      type="submit"
      style={{
        padding: '12px 30px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '25px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={e => (e.target.style.backgroundColor = '#0056b3')}
      onMouseOut={e => (e.target.style.backgroundColor = '#007bff')}
    >
      {text}
    </button>
  </div>
);

export default SubmitButton;
