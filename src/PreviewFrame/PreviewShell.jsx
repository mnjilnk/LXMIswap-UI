import { useState } from 'react';
import PreviewToolbar from './PreviewToolbar';
import PreviewViewport from './PreviewViewport';

export default function PreviewShell() {
  const [scene, setScene] = useState('HomeScreen');
  const [viewport, setViewport] = useState('mobile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [orientation, setOrientation] = useState('portrait');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <PreviewToolbar
        scene={scene}
        setScene={setScene}
        viewport={viewport}
        setViewport={setViewport}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        orientation={orientation}
        setOrientation={setOrientation}
      />
      <PreviewViewport
        scene={scene}
        viewport={viewport}
        isDarkMode={isDarkMode}
        orientation={orientation}
      />
    </div>
  );
}
