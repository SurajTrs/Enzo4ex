import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window to the top on every route change
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant jump to top. Change behavior to 'smooth' if preferred.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
