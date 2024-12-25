import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar';
import Settings from '@/components/Settings';
import AnimatedCursor from '@/components/AnimatedCursor';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/contexts/theme';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cursorStyle, setCursorStyle] = useState('default');

  useEffect(() => {
    document.body.setAttribute('data-cursor', cursorStyle);
  }, [cursorStyle]);

  return (
    <div className="relative">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Home</h1>
        <Button>Click me</Button>
      </div>

      {/* Settings Component */}
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