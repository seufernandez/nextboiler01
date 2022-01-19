import { Box, Text } from '@chakra-ui/react';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello BoilerPlate</title>
      </Head>

      <Box
        display={{ md: 'flex' }}
        w="100%"
        h="calc(100vh - 10rem)"
        mx="auto"
        my="8"
        px="8"
        maxWidth={1080}
        justifyContent="center"
      >
        <Text>
          Hello Boilerpawdawdawdawdawdawdddddddddddddddddddddddddddddddd
          adwawdlate!
        </Text>
      </Box>
    </>
  );
}
