import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to handle system theme changes
    const handleSystemChange = (event: MediaQueryListEvent) => {
      //if (!isManual) {
      setIsDarkMode(event.matches);
      //}
    };

    // Set initial theme based on system preference
    setIsDarkMode(mediaQuery.matches);

    // Listen for system changes
    mediaQuery.addEventListener('change', handleSystemChange);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [isManual]);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

  // Toggle manual control
  const toggleDarkMode = () => {
    console.log("toggleDarkMode")
    //setIsManual(true);  
    setIsDarkMode((prev) => !prev);
  };

  // Reset to system preference
  const resetToSystem = () => {
    //setIsManual(false);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
  };

  return { isDarkMode, toggleDarkMode, resetToSystem };
}

export default useDarkMode;