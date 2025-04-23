import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function App() {
  return (
    <Box p={8}>
      <Heading size="lg">LXMIswap UI Starter</Heading>

      <Text mt={4}>
        React + Chakra UI is wired up. Time to import designs from
        Figma and start building.
      </Text>

      <Button mt={6} colorScheme="teal">
        Get Started
      </Button>
    </Box>
  );
}
