import EmojiItem from '@/components/emojiItem';
import { CLASSIFY } from '@/constants/classify';
import { useModel } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const CORE_CONTENT_ID = 'coreContent';

const HomePage: React.FC = () => {
  const { EmojiKey } = useModel('emoji');
  const toTopRun = () => {
    const dom = document.getElementById(CORE_CONTENT_ID);
    dom?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    toTopRun();
  }, [EmojiKey]);

  const getEmojiItems = () => {
    const emojis = CLASSIFY.find((item) => item.id === EmojiKey);
    if (!emojis) return null;

    return emojis.children.map((item, index) => {
      return (
        <EmojiItem item={item} key={index} itemKey={item.name} />
      );
    });
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // 定义滚动事件处理函数
    const dom = document.getElementById(CORE_CONTENT_ID);
    const handleScroll = () => {
      if (dom) {
        // 获取当前滚动条的位置
        const scrollTop = dom?.scrollTop || 0;
        // 根据 scrollTop 的值设置 isVisible 的状态
        setIsVisible(scrollTop > 200);
      }
    };
    // 给 coreContent div 添加滚动监听事件
    dom?.addEventListener('scroll', handleScroll);
    // 组件卸载时移除事件监听器
    return () => {
      dom?.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.emojiBox}>{getEmojiItems()}</div>
      {isVisible && (
        <div className={styles.toTop} onClick={() => toTopRun()}>
          ⬆️
        </div>
      )}
    </div>
  );
};

export default HomePage;
