import { useEffect, useRef } from "react";

import { useIntersection } from "react-use";

import { gsap } from "gsap";

import ReactGA from "react-ga4";

import { Text, Flex, Container, Image, Box } from "@chakra-ui/react";

import photo from "../assets/about_me/foto_3.png";
import frontEndSkils from "../assets/about_me/front-end.png";
import designSkils from "../assets/about_me/design.png";
import otherSkils from "../assets/about_me/others.png";
import backendSkils from "../assets/about_me/backend.png";
import darthVader from "../assets/about_me/darth-vader-icon.png";
import ghostbusters from "../assets/about_me/ghostbusters.png";
import robot from "../assets/about_me/robot-2.png";
import sega from "../assets/about_me/sega.png";
import photowebp from "../assets/about_me/foto_3.webp";
import frontEndSkilswebp from "../assets/about_me/front-end.webp";
import designSkilswebp from "../assets/about_me/design.webp";
import otherSkilswebp from "../assets/about_me/others.webp";
import backendSkilswebp from "../assets/about_me/backend.webp";
import darthVaderwebp from "../assets/about_me/darth-vader-icon.webp";
import ghostbusterswebp from "../assets/about_me/ghostbusters.webp";
import robotwebp from "../assets/about_me/robot-2.webp";
import segawepb from "../assets/about_me/sega.webp";

const AboutPage = () => {
  const intersectionRefGhost = useRef(null);
  const intersectionRefRobot = useRef(null);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "about" });
  }, []);

  const intersectionGhost = useIntersection(intersectionRefGhost, {
    root: null,
    rootMargin: "150px",
    threshold: 1,
  });
  const intersectionRobot = useIntersection(intersectionRefRobot, {
    root: null,
    rootMargin: "150px",
    threshold: 1,
  });

  const fadeInGhost = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -200,
      x: -200,
      rotation: "360",
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOutGhost = (element) => {
    gsap.to(element, 1, {
      rotation: "0",
      y: -200,
      x: -220,

      ease: "power4.out",
    });
  };
  const fadeInRobot = (element) => {
    gsap.to(element, 1, {
      //   x: 800,
      //   y: 10,
      right: 170,
      ease: "sine.out",
    });
  };
  const fadeOutRobot = (element) => {
    gsap.to(element, 1, {
      //   x: 500,

      right: 0,
      ease: "sine.out",
    });
  };

  const fadeInSega = (element) => {
    gsap.to(element, 1, {
      //   x: 800,
      //   y: 10,
      rotation: "360",
      ease: "power1.out",
    });
  };
  const fadeOutSega = (element) => {
    gsap.to(element, 1, {
      //   x: 500,
      rotation: "345",
      ease: "power1.out",
    });
  };

  intersectionGhost && intersectionGhost.intersectionRatio < 1
    ? fadeOutGhost(".fadeIn")
    : // Not reched
      fadeInGhost(".fadeIn"); // rechead so animate

  intersectionGhost && intersectionGhost.intersectionRatio < 1
    ? fadeOutSega(".sega")
    : // Not reched
      fadeInSega(".sega"); // rechead so animate

  intersectionRobot && intersectionRobot.intersectionRatio < 1
    ? fadeOutRobot(".robot")
    : // Not reched
      fadeInRobot(".robot"); // rechead so animate

  return (
    <>
      <Container
        maxW="1600px"
        height={["auto"]}
        mt={["50px", "80px"]}
        mb={["50px", "100px"]}
      >
        <Flex
          justifyContent={["space-between"]}
          alignItems={["center"]}
          flexDir={["column-reverse", "column-reverse", "row"]}
          mb={["150px"]}
        >
          <Box maxW="900px">
            <Text
              fontSize={["h2"]}
              fontFamily="heading"
              textAlign={["center", "center", "left"]}
              as="h2"
            >
              The biggest secret — driven by endless curiosity.
            </Text>
          </Box>
          <Box>
            <Box position={["relative"]}>
              <Image
                src={photowebp}
                fallbackSrc={photo}
                htmlWidth="568"
                htmlHeight="616"
                loading="lazy"
                alt="A movie I like"
              ></Image>
            </Box>
          </Box>
        </Flex>
        <Box>
          <Text letterSpacing={["3px"]} color="blue" as="h4" fontSize="2rem">
            INTRODUCTION
          </Text>
          <Text
            fontFamily={["heading"]}
            fontSize="h4"
            mt="30px"
            mb={["50px", "100px"]}
            maxW="1400px"
            as="h4"
          >
            I’m Denis Paul Mucioiu , a twenty-five-year-old web developer from
            Romania currently living in Timisoara.
          </Text>
          <Text as="p">
            I studied at the West University of Timisoara, where I learned to
            observe, collaborate, and empathize. I don’t like to define myself
            by the work I’ve done. I define myself by the work I want to do.
            Skills can be taught, personality is inherent. I prefer to keep
            learning, continue challenging myself, and do interesting things
            that matter.
          </Text>
        </Box>
        <Box
          mt={["100px", "200px"]}
          ref={intersectionRefGhost}
          position="relative"
        >
          <Image
            src={ghostbusterswebp}
            fallbackSrc={ghostbusters}
            htmlWidth="203"
            htmlHeight="193"
            loading="lazy"
            alt="A photo with a movie I like"
            className="fadeIn"
            position={["absolute"]}
            display={["none", "none", "none", "block"]}
          ></Image>
          <Image
            src={segawepb}
            fallbackSrc={sega}
            htmlWidth="259"
            htmlHeight="257"
            loading="lazy"
            alt="Hobby"
            position={["absolute"]}
            right="50"
            bottom="50"
            className="sega"
            display={["none", "none", "none", "none", "block"]}
          ></Image>
          <Text letterSpacing={["3px"]} color="blue" as="h4" fontSize="2rem">
            WHAT’S MY MISSION?
          </Text>
          <Text
            as="h4"
            fontFamily={["heading"]}
            fontSize="h4"
            mt="30px"
            mb={["50px", "100px"]}
          >
            To design and develop awesome functional digital experiences
          </Text>
          <Text maxW={["1200px"]} as="p">
            I'm a self taught developer/ designer so everything new in the web
            development world attract me from the new version of Next.js to the
            back-end part - Deno. In a few words, my mision for the moment is to
            learn and create awsome experiences.
          </Text>
        </Box>
        <Box mt={["100px", "200px"]}>
          <Text letterSpacing={["3px"]} color="blue" as="h4" fontSize="2rem">
            TECHNOLOGIES AND TOOLS I’VE WORKED WITH
          </Text>
          <Flex
            maxW="1200px"
            justifyContent={["center", "space-between", "space-between"]}
            mt={["10px", "50px"]}
            flexDirection={["column", "column", "row"]}
          >
            <Box>
              <Text
                fontFamily={["heading"]}
                color="red"
                mb="30px"
                mt="30px"
                as="h4"
                fontSize="2rem"
              >
                FRONT END
              </Text>
              <Box>
                <Image
                  src={frontEndSkilswebp}
                  fallbackSrc={frontEndSkils}
                  htmlWidth="208"
                  htmlHeight="197"
                  loading="lazy"
                  alt="Front end technologie I know to use"
                ></Image>
              </Box>
            </Box>

            <Box>
              <Text
                fontFamily={["heading"]}
                color="red"
                mb="30px"
                mt="30px"
                as="h4"
                fontSize="2rem"
              >
                BACKEND
              </Text>
              <Box>
                <Image
                  src={backendSkilswebp}
                  fallbackSrc={backendSkils}
                  htmlWidth="237"
                  htmlHeight="148"
                  loading="lazy"
                  alt="Front end technologie I know to use"
                ></Image>
              </Box>
            </Box>

            <Box>
              <Text
                fontFamily={["heading"]}
                color="red"
                mb="30px"
                mt="30px"
                as="h4"
                fontSize="2rem"
              >
                DESIGN
              </Text>
              <Box>
                <Image
                  src={designSkilswebp}
                  fallbackSrc={designSkils}
                  htmlWidth="190"
                  htmlHeight="198"
                  loading="lazy"
                  alt="Design tools I know to use"
                ></Image>
              </Box>
            </Box>
            <Box>
              <Text
                fontFamily={["heading"]}
                color="red"
                mb="30px"
                mt="30px"
                as="h4"
                fontSize="2rem"
              >
                OTHERS
              </Text>
              <Box>
                <Image
                  src={otherSkilswebp}
                  fallbackSrc={otherSkils}
                  htmlWidth="188"
                  htmlHeight="187"
                  loading="lazy"
                  alt="Other Technologies I know to use"
                ></Image>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          mt={["100px", "200px"]}
          mb={["100px", "150px"]}
          position="relative"
        >
          <Text letterSpacing={["3px"]} color="blue" as="h4" fontSize="2rem">
            REVIEW
          </Text>
          <Text mt="30px" mb={["30px"]} maxW="900px" as="p">
            “The force is strong with Dennis, He is the real deal. He designed
            and developed the kickstarter materials for our new deathstar
            campaign. The amazing work he did for us is as real as this review.”
          </Text>
          <Flex alignItems={["center"]}>
            <Box>
              <Image
                src={darthVaderwebp}
                fallbackSrc={darthVader}
                htmlWidth="44"
                htmlHeight="49"
                loading="lazy"
                alt="Darth Vader - review"
                borderRadius="full"
              ></Image>
            </Box>
            <Box ml="10px">
              <Text>Darth Vader</Text>
            </Box>
          </Flex>
          <Image
            src={robotwebp}
            fallbackSrc={robot}
            height="auto"
            loading="lazy"
            alt="Star Wars"
            position={["absolute"]}
            top={["0", "130px", "110px", "90px", "0"]}
            right="0"
            className="robot"
            display={["none", "block"]}
            width={["100%", "180px", "180px", "200px", "auto"]}
            htmlWidth="270"
            htmlHeight="356"
          ></Image>
        </Box>
      </Container>
      <Box
        display={["flex"]}
        alignItems="center"
        justifyContent={["center"]}
        bg="black"
        ref={intersectionRefRobot}
      >
        <Text color="white" py="16px" textAlign={["center"]}>
          Copyright © Mucioiu Denis Paul 2022. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default AboutPage;
