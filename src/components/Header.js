import { Box, HStack } from "@chakra-ui/react";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: nicoletaandreea.iancu@gmail.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/NicoletaLazar",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/nicoleta-iancu-lazar-9b0457110/",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {
    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Handle header show/hide animation depending on the scroll direction
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        // Handle scroll events
        const handleScroll = () => {
            const currScrollPos = window.scrollY;
            const currHeaderElement = headerRef.current;

            if (!currHeaderElement) {
                return;
            }

            if (prevScrollPos > currScrollPos) {
                currHeaderElement.style.transform = "translateY(0)";
            } else {
                currHeaderElement.style.transform = "translateY(-200px)";
            }

            prevScrollPos = currScrollPos;
        };

        // Set up listeners for the scroll event
        window.addEventListener("scroll", handleScroll);

        // Remove listeners for the scroll event
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={headerRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack px={16} py={4} justifyContent="space-between" alignItems="center" spacing={2}>
                    <nav>
                        <HStack justifyContent="space-between" alignItems="flex-start" spacing={4}>
                            {socials.map((social) => (
                                <a href={social.url} target="_blank">
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a href="/#projects" onClick={() => handleClick("projects")}>
                                Projects
                            </a>
                            <a href="/#contact-me" onClick={() => handleClick("contactme")}>
                                Contace Me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
