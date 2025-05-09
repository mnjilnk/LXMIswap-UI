// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const overrides = {
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
};

const customTheme = extendTheme(overrides);
export default customTheme;
