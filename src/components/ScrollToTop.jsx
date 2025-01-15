import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div onClick={() => window.scrollTo(0, 0)}>
      Click anywhere to scroll to the top
    </div>
  );
};

export default ScrollToTop;