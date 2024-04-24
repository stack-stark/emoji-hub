import logo from '@/assets/logo.png';
import React, { useState } from 'react';
import styles from './index.less';

import { Switch } from 'antd';

const HeaderWidget: React.FC = () => {
  const key = localStorage.getItem('theme') || 'dark';
  const [themeValue, setthemeValue] = useState<boolean>(
    key === 'dark' ? true : false,
  );
  const themeChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setthemeValue(checked);
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('theme-mode', theme);
    localStorage.setItem('theme', theme);
    // window.location.reload();
  };

  return (
    <div className={styles.headerBox}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.name}>Emoji Hub</div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.search}>🔎</div>
        <div className={styles.theme}>
          <Switch
            checkedChildren="🌘"
            unCheckedChildren="☀️"
            onChange={themeChange}
            value={themeValue}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
