import { useContext, useEffect, useState } from 'react';

import Context from './providers/Context';
import HomePage from './pages/HomePage';

function App() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const { setIsDesktop } = useContext(Context);

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

  return <HomePage />;
}

export default App;
