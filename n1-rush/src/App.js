import { useContext, useEffect, useState } from 'react';

import Context from './providers/Context';
import HomePage from './pages/HomePage';

function App() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const { setIsDesktop, setIsMoved } = useContext(Context);

  const handleResize = () => setWidthScreen(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (widthScreen < 900) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [widthScreen]);

  const handleScroll = () => setIsMoved(window.pageYOffset > 75);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <HomePage />;
}

export default App;
