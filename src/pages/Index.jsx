import React from "react";
import { Box, Container, Heading, Text, Button, Flex, Image, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaLaptopCode, FaRocket, FaEnvelope, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <HStack align="start">
      <Flex shrink={0}>
        <Icon as={icon} boxSize={5} mt={1} mr={2} />
      </Flex>
      <VStack align="start">
        <Heading size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text>{text}</Text>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  return (
    <Container maxW="6xl" p={5}>
      <VStack spacing={10} as="section" my={16} textAlign="center">
        <Heading as="h1" size="2xl">
          Your Web Development Partners
        </Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
          We bring your ideas to life with professional web design and development services.
        </Text>
        <Button colorScheme="blue" size="lg" leftIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>

      <VStack spacing={8} as="section" my={16} textAlign="left">
        <Heading as="h2" size="xl">
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
          <Feature icon={FaLaptopCode} title="Custom Development" text="Tailored solutions that fit your unique business needs." />
          <Feature icon={FaRocket} title="Performance Optimization" text="Speed up your website for better user engagement." />
        </Flex>
      </VStack>

      <VStack spacing={8} as="section" my={16} textAlign="left">
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Flex justify="space-between" wrap="wrap">
          <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="outline">
            Email Us
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline">
            Twitter
          </Button>
          <Button leftIcon={<FaLinkedinIn />} colorScheme="linkedin" variant="outline">
            LinkedIn
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline">
            GitHub
          </Button>
        </Flex>
      </VStack>

      <Box as="footer" textAlign="center" py={10}>
        <Text>&copy; {new Date().getFullYear()} Your Web Development Partners. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
