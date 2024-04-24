import { useState } from 'react';

const useTheme = () => {
  const key = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState<string>(key);
  return {
    theme,
    setTheme,
  };
};

export default useTheme;
