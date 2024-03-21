import { Button, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack style={{ backgroundColor: "white", color: "black", borderRadius: "20px" }}>
            <Image src={imageSrc} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3" pt={6} pl={6} pr={6}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
            </Stack>
            <HStack p={2} style={{ width: "100%" }}>
                <Button variant="ghost" colorScheme="blue">
                    <HStack>
                        <Text>See more</Text>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Button>
            </HStack>
        </VStack>
    );
};

export default ProjectCard;
