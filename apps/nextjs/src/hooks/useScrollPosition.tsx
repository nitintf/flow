import { useState, useEffect } from 'react';

interface ScrollPositionProps {
  threshold: number;
}

const useScrollPosition = ({ threshold }: ScrollPositionProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
};

export default useScrollPosition;
