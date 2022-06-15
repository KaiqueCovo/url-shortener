import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#00E8BB',
      },
    },
  },
  colors: {
    primary: '#00E8BB',
  },
});
