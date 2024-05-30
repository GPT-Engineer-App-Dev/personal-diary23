import { Container, Heading, Text, VStack, Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Personal Blog
          </Heading>
          <Text fontSize="lg">Sharing my thoughts, experiences, and journey through life.</Text>
        </Box>

        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1600812227435-d194ea36937d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzA2MTE5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Personal Portrait" mx="auto" mb={4} />
          <Text textAlign="center" fontSize="md">
            Hi, I'm [Your Name], a passionate blogger and tech enthusiast. Follow my journey as I share my life experiences, thoughts, and more.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a brief description of the first post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a brief description of the second post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 3</Heading>
              <Text mt={4}>This is a brief description of the third post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Follow Me
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
