import React from 'react';

import ListProductUser from '../../components/user/dashboard/ListProductUser';
import HeaderUser from '../../components/user/layout/UserHeader';
import FooterUser from '../../components/user/layout/UserFooter';
import { useState } from 'react';

function UserDashboard() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (kw) => {
    setKeyword(kw);
  };

  return (
    <div style={styles.container}>
      <HeaderUser onSearch={handleSearch} />
      <main style={styles.main}>
        <ListProductUser keyword={keyword} />
      </main>
      <FooterUser />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '20px 40px',
    backgroundColor: '#f9f9f9',
  },
};

export default UserDashboard;

