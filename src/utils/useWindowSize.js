import { useState, useEffect } from 'react';
function useWindowSize(){
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobile:undefined,
    isTablet:undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
        if (typeof window !== 'undefined'){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth <= 767,
                isTablet: window.innerWidth <= 1023,
            });
        }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default useWindowSize;