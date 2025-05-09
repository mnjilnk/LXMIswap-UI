import { useState, useEffect } from 'react';
import sceneRegistry from './SceneRegistry';

const deviceFrames = {
  mobile: {
    portrait: { width: 375, height: 667 },
    landscape: { width: 667, height: 375 },
  },
  tablet: {
    portrait: { width: 768, height: 1024 },
    landscape: { width: 1024, height: 768 },
  },
  desktop: {
    landscape: { width: 1280, height: 800 },
  },
};

export default function PreviewViewport({ scene, viewport, isDarkMode, orientation }) {
  const SceneComponent = sceneRegistry[scene];
  const safeOrientation = viewport === 'desktop' ? 'landscape' : orientation;
  const { width, height } = deviceFrames[viewport][safeOrientation];
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      // measure actual toolbar height
      const toolbarEl = document.getElementById('previewToolbar');
      const toolbarHeight = toolbarEl?.offsetHeight || 50; 

      const padding = 32; // total side/bottom padding
      const availableWidth = window.innerWidth - padding;
      const availableHeight = window.innerHeight - toolbarHeight - padding;

      const scaleWidth = availableWidth / width;
      const scaleHeight = availableHeight / height;
      // 5% breathing room
      const nextScale = Math.min(scaleWidth, scaleHeight, 1) * 0.95;
      setScale(nextScale);
    }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [width, height]);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? '#111' : '#f0f0f0',
        overflow: 'auto',
        padding: '16px'
      }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          border: '1px solid #999',
          borderRadius: '12px',
          backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
          color: isDarkMode ? '#eee' : '#000',
          boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          overflow: 'auto',
          transition: 'transform 0.3s ease',
        }}
      >
        {SceneComponent ? (
          <SceneComponent />
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.5 }}>No scene loaded</div>
        )}
      </div>
    </div>
  );
}
