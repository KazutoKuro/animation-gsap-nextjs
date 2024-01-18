import Image from "next/image";
import { Inter } from "next/font/google";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1}>
        (4xl) In love with React & Next
      </Heading>
      <Text fontSize="6xl">(6xl) In love with React & Next</Text>
      <Text fontSize="sm">(sm) In love with React & Next</Text>
    </>
  );
}
