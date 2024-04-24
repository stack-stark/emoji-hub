import emailDarkSvg from '@/assets/icons/dark/email.svg';
import githubDarkSvg from '@/assets/icons/dark/github.svg';
import webDarkSvg from '@/assets/icons/dark/web.svg';
import emailLightSvg from '@/assets/icons/light/email.svg';
import githubLightSvg from '@/assets/icons/light/github.svg';
import webLightSvg from '@/assets/icons/light/web.svg';
import { useModel } from '@umijs/max';
import React, { useMemo } from 'react';
import styles from './index.less';

// 定义获取SVG路径的函数
const getIconByTheme = (
  theme: string,
  icon: { dark: string; light: string },
) => {
  return theme === 'dark' ? icon.light : icon.dark;
};

const FooterWidget: React.FC = () => {
  const { theme } = useModel('theme');

  // 使用useMemo来避免不必要的重复计算和渲染
  const githubSvg = useMemo(
    () => getIconByTheme(theme, { dark: githubDarkSvg, light: githubLightSvg }),
    [theme],
  );
  const emailSvg = useMemo(
    () => getIconByTheme(theme, { dark: emailDarkSvg, light: emailLightSvg }),
    [theme],
  );
  const webSvg = useMemo(
    () => getIconByTheme(theme, { dark: webDarkSvg, light: webLightSvg }),
    [theme],
  );

  return (
    <div className={styles.footBox}>
      <div className={styles.icp}>
        © 2023-2024 stack-stark Powered by umi4
        生活不是二进制，除了0和1，还有其他选择 ❤
        <a
          href="http://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          粤ICP备17142461号-1
        </a>
      </div>
      <div className={styles.links}>
        <div className={styles.linkItem} title="Github">
          <a
            href="https://github.com/stack-stark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubSvg}
              alt=""
              onError={() => {
                console.log('Github SVG load failed');
              }}
            />
          </a>
        </div>
        <div className={styles.linkItem} title="访问我主页">
          <a href="https://asnyc.cn" target="_blank" rel="noopener noreferrer">
            <img
              src={webSvg}
              alt=""
              onError={() => {
                console.log('Web SVG load failed');
              }}
            />
          </a>
        </div>
        <div className={styles.linkItem} title="邮件联系我">
          <a
            href="mailto:tostack@163.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={emailSvg}
              alt=""
              onError={() => {
                console.log('Email SVG load failed');
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
