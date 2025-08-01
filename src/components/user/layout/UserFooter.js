import React from 'react';

function FooterUser() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '40px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    color: '#555',
  },
};

export default FooterUser;
