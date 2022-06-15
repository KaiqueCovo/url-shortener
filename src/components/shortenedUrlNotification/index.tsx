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
    direction={{ base: 'column', md: 'row' }}
    gap={{ base: 4, sm: 8 }}
    alignItems={{ base: 'start', sm: 'center' }}
    background={'primary'}
    justifyContent={'space-between'}
    color={'white'}
    p={4}
    borderRadius={10}
  >
    <Text textAlign={'start'} fontSize={'sm'} fontWeight={700} noOfLines={1}>
      {originalUrl}
    </Text>
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 4, sm: 8 }}
      width={'100%'}
      justifyContent={'flex-end'}
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
      >
        <Icon as={CopyIcon} w={6} h={6} />
      </Button>
    </Flex>
  </Flex>
);
