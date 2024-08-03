import { useEffect, useState } from 'react';

const useScrollToBottom = (ref) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      // Check if the user has scrolled to the bottom
      setIsAtBottom(scrollHeight - (scrollTop + clientHeight) < 15);
    };

    const container = ref.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isAtBottom;
};

export default useScrollToBottom;
