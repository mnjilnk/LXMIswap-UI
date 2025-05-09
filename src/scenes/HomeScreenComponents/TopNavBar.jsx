import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../../theme';

const componentModules = import.meta.glob('./TopNavBarComponents/*.jsx', { eager: true });
const loadedComponents = Object.values(componentModules).map((mod) => mod.default);

export default function TopNavBar() {
  return (
    <ChakraProvider theme={customTheme}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {loadedComponents.length > 0 ? (
          loadedComponents.map((Component, i) => <Component key={i} />)
        ) : (
          <div style={{ opacity: 0.5 }}>No components loaded in TopNavBar</div>
        )}
      </div>
    </ChakraProvider>
  );
}
