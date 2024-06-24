import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Styles from './main-layout.module.css';

function MainLayout({ children }) {
  return (
    <div className={Styles.Gird}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
