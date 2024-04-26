import logo from '@/assets/logo.png';
import { theme } from 'antd';
import React, { useState } from 'react';
import { useAntdConfigSetter } from 'umi';
import styles from './index.less';
const { darkAlgorithm, defaultAlgorithm } = theme;

import SearchModal from '@/components/searchModal/searchModal';
import { Switch } from 'antd';

const HeaderWidget: React.FC = () => {
  const key = localStorage.getItem('theme') || 'dark';
  const [themeValue, setthemeValue] = useState<boolean>(
    key === 'dark' ? true : false,
  );
  const setAntdConfig = useAntdConfigSetter();
  const themeChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setthemeValue(checked);
    const theme = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('theme-mode', theme);
    localStorage.setItem('theme', theme);
    setAntdConfig({
      theme: {
        algorithm: [checked ? darkAlgorithm : defaultAlgorithm],
      },
    });
    // window.location.reload();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const setIsModalOpenRun = (val: boolean) => {
    setIsModalOpen(val);
  };

  const searchModalShow = () => {
    console.log('searchModalShow');
    setIsModalOpen(true);
  };

  return (
    <div className={styles.headerBox}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.name}>
          <div>Emoji Hub</div>
          <div>
            <span style={{ fontSize: '14px' }}>
              全站开源的Emoji查找网址，点击即可复制 💯
            </span>
          </div>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.search} onClick={() => searchModalShow()}>
          🔎
        </div>
        <SearchModal
          visible={isModalOpen}
          setIsModalOpen={(val: boolean) => setIsModalOpenRun(val)}
        />
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
