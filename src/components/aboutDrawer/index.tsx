import { Drawer, Tag } from 'antd/es';
import React from 'react';
import styles from './index.less';

interface AboutDrawerProps {
  visible: boolean;
  setDrawerOpen: (visible: boolean) => void;
}

const AboutDrawer: React.FC<AboutDrawerProps> = ({
  visible,
  setDrawerOpen,
}) => {
  return (
    <Drawer
      title={null}
      placement="right"
      onClose={() => setDrawerOpen(false)}
      open={visible}
      width={1000}
      closeIcon={false}
    >
      <div className={styles.aboutDrawer}>
        <div className={styles.infoBox}>
          <div className={styles.title}>📰 关于本站 </div>
          <div className={styles.info}>
            <p>
              📒 这是一个使用 umi4 构建的全站开源的
              emoji查找网站，通过分类展示各种
              emoji，支持搜索功能，点击即可复制到剪切板。
            </p>
            <p>
              🔌 配合 vscode 插件
              <a
                href="https://marketplace.visualstudio.com/items?itemName=stack-stark-code.fast-emoji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag color="magenta"> 快捷 Emoji</Tag>
              </a>
              ，可以快速查看以及在vscode中使用 emoji。
            </p>
            <p>
              🪧 Emoji收集于互联网，本站不拥有Emoji版权，请勿用于违法法规内容。
            </p>
            <p>
              🔗 本站采用MIT协议全站开源于
              <a
                href="https://github.com/stack-stark/emoji-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag color="cyan">Github</Tag>
              </a>
            </p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.title}>🔌 关于快捷emo插件</div>
          <div className={styles.info}>
            <p>
              这是一个在编辑区输入匹配前缀（默认值：000，可配置）+ emoji
              名字（中文）就可以生成 emoji 的 vs code 插件，内置三千多个
              emoji，可以让我们快速生成 emoji！
            </p>

            <h4>
              <strong>📄 空白区插入</strong>
            </h4>

            <p>
              直接输入前缀（默认值：000）+emoji 名字，就可以生成
              emoji，例如：000 龙 即可生成 🐉
            </p>

            <img
              src="https://img.kuaiyouyi.com/disk/2024/4/26/9cd47aa4a3391d09621ac419be47ff45.gif"
              alt=""
            />

            <h4 style={{ marginTop: '8px' }}>
              <strong>📑 内容区插入</strong>
            </h4>

            <p>
              输入前缀（默认值：000）+ 名字然后空格，就可以生成
              emoji，例如：000+龙+空格 即可生成 🐉
            </p>

            <img
              src="https://img.kuaiyouyi.com/disk/2024/4/26/b9f472fc86b69c5760165eeaede469b4.gif"
              alt=""
            />

            <p style={{ marginTop: '8px' }}>
              <span style={{ marginRight: '8px' }}> 🏷️ </span>
              <a
                href="https://github.com/stack-stark/fast-emoji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag color="geekblue">Github 源码</Tag>
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=stack-stark-code.fast-emoji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag color="purple">插件安装</Tag>
              </a>
            </p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.title}>✌️ 关于我 </div>
          <div className={styles.info}>
            <p>我的邮箱</p>
            <p>我的Github</p>
            <p>我的主页</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
export default AboutDrawer;
