import { useEffect, useState } from 'react';

const useScrollToBottom = (ref) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      // Check if the user has scrolled to the bottom
      setIsAtBottom(scrollHeight - (scrollTop + clientHeight) < 30);
    };

    const container = ref.current;
    container.addEventListener('scroll', handleScroll);
    // Initial check in case the content is already at the bottom
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isAtBottom;
};

export default useScrollToBottom;
