import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to hash targets after page transitions settle; resets to top on route change.
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const changedPage = prevPath.current !== pathname;
    prevPath.current = pathname;
    if (!hash) return;
    const t = window.setTimeout(
      () => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      changedPage ? 700 : 40
    );
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
}