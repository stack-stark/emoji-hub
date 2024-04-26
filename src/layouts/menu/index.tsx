import AboutDrawer from '@/components/aboutDrawer';
import { CLASSIFY } from '@/constants/classify';
import { useModel } from '@umijs/max';
import React from 'react';
import styles from './menu.less';

const MenuWidget: React.FC = () => {
  const { EmojiKey, setEmojiKey } = useModel('emoji');

  const classifySelect = (classify: string) => {
    setEmojiKey(classify);
  };

  const listItems = CLASSIFY.map((item, index) => (
    <div
      className={`${styles.items}  ${
        EmojiKey === item.id ? styles.itemsActive : ''
      }`}
      key={index}
      data-id={item.id}
      onClick={() => classifySelect(item.id)}
    >
      <div className={styles.emoji}>{item.icon}</div>
      <div className={styles.item}>{item.name}</div>
    </div>
  ));

  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const drawerOpenRun = () => {
    setDrawerVisible(true);
  };

  return (
    <div className={styles.menus}>
      <div className={styles.title}>分类</div>
      <div className={styles.itemsBox}>{listItems}</div>
      <div className={styles.menuFooter} onClick={() => drawerOpenRun()}>
        💖 关于本站 💖
      </div>
      <AboutDrawer
        visible={drawerVisible}
        setDrawerOpen={(val: boolean) => setDrawerVisible(val)}
      />
    </div>
  );
};

export default MenuWidget;
