import React from 'react';

import { InputProps, Input as ChakraInput } from '@chakra-ui/react';

export const Input = (props: InputProps): React.ReactElement => (
  <ChakraInput {...props} />
);
