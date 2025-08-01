import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './routes/MainRotues';
import { useTheme } from './contexts/ThemeContext';


function App() {
  const { style } = useTheme(); // lấy style từ context

  return (
    <div style={style}>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
