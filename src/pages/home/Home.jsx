import Navbar from './components/Navbar';
import Settings from '@/components/Settings';
import AnimatedCursor from '@/components/AnimatedCursor';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/contexts/theme';
import Banner from './components/Banner/Banner';
import { useSmoothScroll } from '@/hooks/useSmooth';
import Brand from './components/Brand/Brand';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cursorStyle, setCursorStyle] = useState('default');

  useSmoothScroll();

  useEffect(() => {
    document.body.setAttribute('data-cursor', cursorStyle);
  }, [cursorStyle]);

  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <Banner />
      <Brand id="brands" />

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <Settings
          theme={theme}
          setTheme={toggleTheme}
          setCursorStyle={setCursorStyle}
        />
      </div>

      {/* Animated Cursor */}
      {cursorStyle === 'animated' && <AnimatedCursor />}
    </div>
  );
}

export default Home; 