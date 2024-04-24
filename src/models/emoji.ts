import { useState } from 'react';

const useEmoji = () => {
  const [EmojiKey, setEmojiKey] = useState<string>('emotes');
  return {
    EmojiKey,
    setEmojiKey,
  };
};

export default useEmoji;
