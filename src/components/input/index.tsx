import React from 'react';

import { InputProps, Input as ChakraInput, forwardRef } from '@chakra-ui/react';

export const Input = forwardRef(
  (props: InputProps, ref): React.ReactElement => (
    <ChakraInput ref={ref} {...props} focusBorderColor='primary' />
  ),
);
