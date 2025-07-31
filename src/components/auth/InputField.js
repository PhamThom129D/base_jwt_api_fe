
import React from 'react';

function InputField({ label, type = 'text', name, value, onChange }) {
  return (
    <div style={{ marginTop: 10 }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`Nhập ${label.toLowerCase()}....`}
        value={value}
        onChange={onChange}
        required
        style={{ width: '100%', padding: 6, marginTop: 10 , borderRadius: 4, border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default InputField;
