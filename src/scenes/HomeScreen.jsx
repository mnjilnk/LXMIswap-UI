import React from 'react';

// Dynamically import all components from HomeScreenComponents folder
const componentModules = import.meta.glob('./HomeScreenComponents/*.jsx', { eager: true });

// Extract components from modules
const loadedComponents = Object.values(componentModules).map((mod) => mod.default);

export default function HomeScreen() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: '16px',
      boxSizing: 'border-box'
    }}>
      {loadedComponents.length > 0 ? (
        loadedComponents.map((Component, index) => (
          <div key={index} style={{ width: '100%', marginBottom: '16px' }}>
            <Component />
          </div>
        ))
      ) : (
        <div style={{ opacity: 0.5, textAlign: 'center' }}>
          No components loaded
        </div>
      )}
    </div>
  );
}
