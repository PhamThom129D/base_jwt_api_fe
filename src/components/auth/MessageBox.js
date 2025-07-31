// src/components/MessageBox.js
import React from 'react';

function MessageBox({ message, type }) {
  if (!message) return null;
  const color = type === 'error' ? 'red' : 'green';

  return <p style={{ color }}>{message}</p>;
}

export default MessageBox;
