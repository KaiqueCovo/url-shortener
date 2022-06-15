import React, { createRef } from 'react';

import { Input } from '@/components';
import { IShortenedUrl } from '@/interfaces';
import { Stack, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

interface IShortenedUrlProps {
  onShortenedUrl: (data: IShortenedUrl) => void;
}

export const ShortenedUrl = ({
  onShortenedUrl,
}: IShortenedUrlProps): React.ReactElement => {
  const inputRef = createRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const inputValue = inputRef.current?.value;

    if (!inputValue) {
      alert('DIGITE UMA URL');
      return;
    }

    onShortenedUrl({
      originalUrl: inputValue,
      shortenedUrl: 'http://curt.io/123',
    });

    inputRef.current.value = '';
  };

  return (
    <Stack
      as={'form'}
      direction={'column'}
      align={'center'}
      alignSelf={'center'}
      position={'relative'}
      width={{ base: '100%', sm: '2xl', md: '2xl' }}
      onSubmit={handleSubmit}
    >
      <InputGroup
        size={'md'}
        gap={{ base: 4, sm: 0 }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Input
          ref={inputRef}
          type={'url'}
          pr={32}
          placeholder={'Cole o link para encurtá-lo'}
          size={'lg'}
          width={'100%'}
          fontSize={{ base: 'sm', md: 'md' }}
        />
        <InputRightElement
          width={'auto'}
          h={'100%'}
          mr={{ base: 0, sm: 4 }}
          position={{ base: 'relative', sm: 'absolute' }}
        >
          <Button
            type={'submit'}
            bg={'primary'}
            color={'white'}
            size={{ base: 'lg', sm: 'sm' }}
            width={{ base: '100%', sm: 'auto' }}
            fontSize={{ base: 'md', sm: 'sm' }}
          >
            Encurtar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
