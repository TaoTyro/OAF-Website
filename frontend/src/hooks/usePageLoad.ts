import { useEffect, useState } from 'react';

export function usePageLoad() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Also listen for actual page navigation
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoading };
}
