import useCopyToClipboard from '@/hooks/useCopy';
import { message } from 'antd';
import React from 'react';
import styles from './index.less';

interface EmojiItemProps {
  item: {
    emoji: string;
    name: string;
  };
  itemKey: string;
}

const EmojiItem: React.FC<EmojiItemProps> = ({ item, itemKey }) => {
  const { copy } = useCopyToClipboard();

  const handleClick = async (text: string) => {
    try {
      const success = await copy(text); // 将固定文本替换为传入的text参数
      if (success) {
        message.success('复制成功'); // 显示复制成功的提示
      } else {
        message.error('复制失败'); // 显示复制失败的提示
      }
    } catch (error) {
      console.error('复制到剪贴板时发生错误:', error);
      message.error('复制过程中发生错误'); // 显示复制过程中发生错误的提示
    }
  };

  return (
    <div
      className={styles.emojiItem}
      key={itemKey}
      title={item.name}
      onClick={() => handleClick(item.emoji)}
    >
      <div className={styles.emoji}>{item.emoji}</div>
      <div className={styles.name}>{item.name}</div>
    </div>
  );
};
export default EmojiItem;
