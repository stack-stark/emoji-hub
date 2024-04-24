import { Outlet } from '@umijs/max';
import React from 'react';
import FooterWidget from './footer/index';
import HeaderWidget from './header';
import styles from './index.less';
import MenuWidget from './menu';

export default function Page() {
  const setTheme = () => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('theme-mode', theme);
  };
  setTheme();
  return (
    <div className={styles.pageLayout}>
      <div className={styles.header}>
        <HeaderWidget />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <MenuWidget />
        </div>
        <div className={styles.right}>
          <div className={styles.coreContent} id="coreContent">
            <Outlet />
          </div>
          <div className={styles.footer}>
            <FooterWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
