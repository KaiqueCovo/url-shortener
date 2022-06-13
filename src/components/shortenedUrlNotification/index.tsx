import React from 'react';

import { CopyIcon } from '@/components/icon';
import { Flex, Text, Button, Icon } from '@chakra-ui/react';

interface IShortenedUrlNotificationProps {
  originalUrl: string;
  shortenedUrl: string;
}

export const ShortenedUrlNotification = ({
  originalUrl,
  shortenedUrl,
}: IShortenedUrlNotificationProps): React.ReactElement => (
  <Flex
    alignItems='center'
    background='primary'
    justifyContent='space-between'
    color='white'
    p={4}
    borderRadius={10}
  >
    <Text fontSize={'sm'} fontWeight={700}>
      {originalUrl}
    </Text>
    <Flex alignItems='center'>
      <Text fontSize={'sm'} fontWeight={700}>
        {shortenedUrl}
      </Text>
      <Button
        ml={10}
        fontWeight={700}
        bg='orange.300'
        _hover={{
          bg: 'orange.400',
        }}
      >
        <Icon as={CopyIcon} w={6} h={6} />
      </Button>
    </Flex>
  </Flex>
);
