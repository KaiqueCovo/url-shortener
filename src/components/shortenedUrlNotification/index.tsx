import React from 'react';

import { CopyIcon } from '@/components/icon';
import { IShortenedUrl } from '@/interfaces';
import { Flex, Text, Button, Icon } from '@chakra-ui/react';

export const ShortenedUrlNotification = ({
  originalUrl,
  shortenedUrl,
}: IShortenedUrl): React.ReactElement => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => {
        console.log(`${shortenedUrl} was copied to clipboard.`);
      })
      .catch((err) => {
        console.error(`Error copying text to clipboard: ${err}`);
      });
  };

  return (
    <Flex
      background={'primary'}
      justifyContent={'space-between'}
      color={'white'}
      p={4}
      borderRadius={10}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 4, sm: 8 }}
      alignItems={{ base: 'start', sm: 'center' }}
    >
      <Text textAlign={'start'} fontSize={'sm'} fontWeight={700} noOfLines={1}>
        {originalUrl}
      </Text>
      <Flex
        width={'100%'}
        justifyContent={'flex-end'}
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 4, sm: 8 }}
        alignItems={{ base: 'start', sm: 'center' }}
      >
        <Text fontSize={'sm'} fontWeight={700}>
          {shortenedUrl}
        </Text>
        <Button
          fontWeight={700}
          bg={'orange.300'}
          width={{ base: '100%', sm: 'auto' }}
          _active={{ bg: 'orange.400' }}
          _hover={{
            bg: 'orange.400',
          }}
          onClick={handleCopy}
        >
          <Icon as={CopyIcon} w={6} h={6} />
        </Button>
      </Flex>
    </Flex>
  );
};
