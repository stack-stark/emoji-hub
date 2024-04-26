import { useCallback } from 'react';

const useCopyToClipboard = () => {
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard: ', error);
      return false;
    }
  }, []);

  return { copy };
};

export default useCopyToClipboard;
