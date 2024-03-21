import { Image, Stack, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nicoleta Andreea Iancu!";
const bio1 = "A budding frontend developer";
const bio2 = "focusing on React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
        <Avatar src={require("../images/Profile_picture_nicoleta.jpg")} name="Nicoleta Iancu" size='xl'  />
        <Stack py={4} spacing={3} align="center">
            <Text fontSize="lg" as="b">Hello, I am Nicoleta Andreea Iancu!</Text>
            <Text fontSize="4xl" as="b">A budding frontend developer</Text>
            <Text fontSize="4xl" as="b">focusing on React</Text>
        </Stack>
    </FullScreenSection>
);

export default LandingSection;
