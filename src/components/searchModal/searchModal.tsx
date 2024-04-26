import nodataPng from '@/assets/stickers/nodata.png';
import searchPng from '@/assets/stickers/searching.png';
import { EMOJI_DATA } from '@/constants/emoji';
import { EmojiItemType } from '@/emoji';
import { Input, Modal } from 'antd';
import React from 'react';
import EmojiItem from '../emojiItem';
import styles from './index.less';

interface SearchModalProps {
  visible: boolean;
  setIsModalOpen: (visible: boolean) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  visible,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [keyWord, setKeyWord] = React.useState('');
  const [emojiList, setEmojiList] = React.useState<Array<EmojiItemType>>([]);

  const emojiListView = () => {
    return emojiList.map((item: any, index) => {
      return <EmojiItem item={item} key={index} itemKey={item.name} />;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
    if (e.target.value) {
      setEmojiList(
        EMOJI_DATA.filter((item: any) => item.name.includes(e.target.value)),
      );
    } else {
      setEmojiList([]);
    }
  };

  return (
    <div>
      <Modal
        title="搜索Emoji"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <div className={styles.searchbox}>
          <div className={styles.input}>
            <Input
              placeholder="输入名称搜索"
              onChange={handleInputChange}
              size="large"
              allowClear
              value={keyWord}
            />
          </div>
          {emojiList.length === 0 && (
            <div className={styles.nodata}>
              <img src={keyWord !== '' ? nodataPng : searchPng} alt="" />
              <div className={styles.text}>
                {keyWord !== '' ? '暂无数据' : '请输入关键词搜索'}
              </div>
            </div>
          )}
          {emojiList.length !== 0 && (
            <div className={styles.resBox}>
              <div className={styles.emojiBox}>{emojiListView()}</div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
export default SearchModal;
