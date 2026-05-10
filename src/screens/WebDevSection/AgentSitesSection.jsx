import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { ArrowUpRight, Bot, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { agentSites } from "../../data/sites";

const MotionBox = motion.create(Box);
const previewHeight = ["250px", "250px", "260px"];
const siteOrder = ["golracu", "rezigrile", "dddmanager", "infridge"];

const GolRacuCardLogo = () => (
  <Flex
    alignItems="center"
    gap="8px"
    bg="#fff"
    borderRadius="8px"
    px="14px"
    py="10px"
    boxShadow="0 14px 34px rgba(0,0,0,0.16)"
  >
    <Box
      as="svg"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      w="28px"
      h="24px"
      color="#e00000"
      aria-hidden="true"
    >
      <path d="M7 10 Q4 6, 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 4 Q1 2, 2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 4 Q1 5, 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 10 Q24 6, 25 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 4 Q27 2, 26 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 4 Q27 5, 26 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="14" cy="15" rx="8" ry="6.5" fill="currentColor" />
      <circle cx="11" cy="13" r="2" fill="white" />
      <circle cx="11.5" cy="12.7" r="1" fill="#1a1a1a" />
      <circle cx="17" cy="13" r="2" fill="white" />
      <circle cx="16.5" cy="12.7" r="1" fill="#1a1a1a" />
    </Box>
    <Text as="p" fontFamily="heading" fontSize="2rem" fontWeight="900" lineHeight="1">
      <Box as="span" color="#e00000">
        GOL
      </Box>
      <Box as="span" color="#161616">
        RACU
      </Box>
    </Text>
  </Flex>
);

const DddManagerCardPreview = ({ site }) => (
  <Box
    bg="linear-gradient(135deg, #f7f9ff 0%, #eef4ff 48%, #eaf0ff 100%)"
    h={previewHeight}
    p="24px"
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      inset="0"
      opacity="0.55"
      bg="linear-gradient(90deg, rgba(37,99,255,0.1) 0 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,255,0.08) 0 1px, transparent 1px)"
      backgroundSize="44px 44px"
    />
    <Flex position="relative" zIndex="1" alignItems="center" justifyContent="space-between">
      <Box bg="#fff" borderRadius="8px" px="14px" py="10px" boxShadow="0 16px 34px rgba(37,99,255,0.12)">
        <Text as="p" fontFamily="heading" fontSize="2rem" fontWeight="900" color="#111827" lineHeight="1">
          DDDManager
        </Text>
      </Box>
      <Flex
        w="42px"
        h="42px"
        borderRadius="999px"
        bg="#ff7a00"
        color="#fff"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 14px 32px rgba(255,122,0,0.22)"
      >
        <Sparkles size={20} />
      </Flex>
    </Flex>
    <Box
      position="relative"
      zIndex="1"
      bg="#fff"
      borderRadius="8px"
      mt="26px"
      ml="auto"
      maxW="410px"
      p="7px"
      boxShadow="0 26px 70px rgba(37, 99, 255, 0.14)"
    >
      <Image
        src={site.image}
        alt={`${site.title} dashboard preview`}
        borderRadius="6px"
        objectFit="cover"
        objectPosition="top left"
        h="132px"
        w="100%"
        loading="lazy"
      />
    </Box>
  </Box>
);

const InFridgeCardPreview = ({ site }) => (
  <Box
    bg="linear-gradient(135deg, #fff8fb 0%, #ffeaf2 46%, #ffd6e6 100%)"
    h={previewHeight}
    p="22px"
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      inset="0"
      opacity="0.6"
      bg="linear-gradient(90deg, rgba(255,79,135,0.1) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,79,135,0.08) 0 1px, transparent 1px)"
      backgroundSize="44px 44px"
    />
    <Flex position="relative" zIndex="2" alignItems="center" justifyContent="flex-start">
      <Box
        bg="#fff"
        borderRadius="8px"
        w="154px"
        h="58px"
        boxShadow="0 16px 34px rgba(255,79,135,0.12)"
        overflow="hidden"
      >
        <Image
          src="/inFrigde/logo-lockup.png"
          alt={`${site.title} logo`}
          w="100%"
          h="100%"
          objectFit="contain"
          loading="lazy"
        />
      </Box>
    </Flex>
    <Box
      position="absolute"
      zIndex="1"
      right="22px"
      bottom="-20px"
      w="168px"
      bg="#211721"
      borderRadius="26px"
      p="6px"
      boxShadow="0 26px 70px rgba(255,79,135,0.24)"
      transform="rotate(5deg)"
      overflow="hidden"
    >
      <Image
        src="/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.37.41.png"
        alt={`${site.title} iOS app preview`}
        borderRadius="20px"
        objectFit="cover"
        objectPosition="center top"
        h="204px"
        w="100%"
        loading="lazy"
      />
    </Box>
    <Box
      position="absolute"
      zIndex="1"
      right="140px"
      bottom="-26px"
      w="142px"
      bg="#211721"
      borderRadius="24px"
      p="6px"
      boxShadow="0 22px 60px rgba(255,79,135,0.18)"
      transform="rotate(-7deg)"
      opacity="0.96"
      overflow="hidden"
    >
      <Image
        src="/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.36.57.png"
        alt={`${site.title} swipe preview`}
        borderRadius="19px"
        objectFit="cover"
        objectPosition="center top"
        h="178px"
        w="100%"
        loading="lazy"
      />
    </Box>
    <Box
      position="absolute"
      left="24px"
      bottom="22px"
      zIndex="2"
      bg="rgba(255,255,255,0.78)"
      border="1px solid rgba(255,79,135,0.12)"
      borderRadius="999px"
      px="13px"
      py="8px"
      backdropFilter="blur(12px)"
      boxShadow="0 18px 44px rgba(255,79,135,0.12)"
    >
      <Text as="p" fontFamily="body" fontSize="1.2rem" color="#ff4f87" fontWeight="800">
        In progress
      </Text>
    </Box>
  </Box>
);

const ReziGrileCardPreview = ({ site }) => (
  <Box
    bg="#f7fbfa"
    h={previewHeight}
    p="24px"
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      inset="0"
      opacity="0.78"
      bg="linear-gradient(90deg, rgba(40,127,112,0.12) 0 1px, transparent 1px), linear-gradient(0deg, rgba(67,205,190,0.1) 0 1px, transparent 1px)"
      backgroundSize="42px 42px"
    />
    <Image
      src="/rezigrile/characters/hero-team.png"
      alt=""
      position="absolute"
      right="-30px"
      bottom="-34px"
      w="220px"
      maxW="50%"
      objectFit="contain"
      opacity="0.78"
      pointerEvents="none"
    />
    <Flex position="relative" zIndex="1" alignItems="center" justifyContent="space-between">
      <Box bg="#fff" borderRadius="8px" px="13px" py="10px" boxShadow="0 16px 34px rgba(40,127,112,0.12)">
        <Image
          src="/rezigrile/logo/rezigrile-wordmark-color.png"
          alt={`${site.title} logo`}
          w="142px"
          h="42px"
          objectFit="contain"
          loading="lazy"
        />
      </Box>
      <Flex
        w="44px"
        h="44px"
        borderRadius="999px"
        bg={site.accent}
        color="#fff"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 14px 32px rgba(40,127,112,0.24)"
      >
        <Bot size={21} />
      </Flex>
    </Flex>

    <Box
      position="relative"
      zIndex="1"
      bg="#fff"
      border="1px solid rgba(15,23,42,0.08)"
      borderRadius="8px"
      mt="24px"
      p="7px"
      boxShadow="0 26px 70px rgba(15,23,42,0.12)"
      maxW="345px"
      transform="rotate(-1deg)"
      overflow="hidden"
    >
      <Image
        src="/rezigrile/screens/teste.png"
        alt={`${site.title} test selection preview`}
        borderRadius="6px"
        objectFit="cover"
        objectPosition="top left"
        h="126px"
        w="100%"
        loading="lazy"
      />
    </Box>
  </Box>
);

const AgentSitesSection = () => {
  const orderedAgentSites = [...agentSites].sort(
    (firstSite, secondSite) =>
      siteOrder.indexOf(firstSite.slug) - siteOrder.indexOf(secondSite.slug)
  );

  return (
    <Box mb={["60px", "90px", "120px"]}>
      <Flex
        alignItems={["flex-start", "flex-end"]}
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        gap="24px"
        mb="30px"
      >
        <Box maxW="830px">
          <Flex alignItems="center" gap="10px" mb="10px">
            <Sparkles size={22} color="#3772FF" />
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.4rem"
              fontWeight="700"
              color="#3772FF"
              textTransform="uppercase"
              letterSpacing="0"
            >
              New AI and agents work
            </Text>
          </Flex>
          <Text
            as="h3"
            fontFamily="heading"
            fontSize={["3.4rem", "4.8rem", "6rem"]}
            fontWeight="black"
            lineHeight="1"
            color="#202020"
          >
            Sites we are building now
          </Text>
        </Box>
        <Text
          as="p"
          fontFamily="body"
          fontSize={["1.6rem", "1.7rem"]}
          maxW="480px"
          color="#3a3a3a"
        >
          Fresh case studies for the new work. Each site has its own page for
          architecture, agent roles, and how the system behaves in production.
        </Text>
      </Flex>

      <Grid
        templateColumns={[
          "1fr",
          "1fr",
          "repeat(2, minmax(0, 1fr))",
          "repeat(3, minmax(0, 1fr))",
        ]}
        gap={["18px", "22px"]}
      >
        {orderedAgentSites.map((site, index) => (
          <MotionBox
            key={site.slug}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Link
              as={RouterLink}
              to={`/sites/${site.slug}`}
              _hover={{ textDecoration: "none" }}
              display="block"
              height="100%"
            >
              <Box
                bg="#fff"
                border="1px solid rgba(32, 32, 32, 0.12)"
                borderRadius="8px"
                overflow="hidden"
                height="100%"
                boxShadow="0 24px 60px rgba(32, 32, 32, 0.08)"
                transition="transform 180ms ease, box-shadow 180ms ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 30px 80px rgba(32, 32, 32, 0.14)",
                }}
              >
                {site.slug === "rezigrile" ? (
                  <ReziGrileCardPreview site={site} />
                ) : site.slug === "infridge" ? (
                  <InFridgeCardPreview site={site} />
                ) : site.slug === "dddmanager" ? (
                  <DddManagerCardPreview site={site} />
                ) : site.slug === "golracu" ? (
                  <Box
                    bg="#e00000"
                    h={previewHeight}
                    p="24px"
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      inset="0"
                      opacity="0.14"
                      bg="linear-gradient(90deg, rgba(255,255,255,0.3) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 0 1px, transparent 1px)"
                      backgroundSize="48px 48px"
                    />
                    <Box position="relative" zIndex="1">
                      <GolRacuCardLogo />
                      <Box
                        bg="#fff"
                        borderRadius="8px"
                        mt="28px"
                        ml="auto"
                        maxW="390px"
                        p="7px"
                        boxShadow="0 24px 70px rgba(0,0,0,0.24)"
                        transform="rotate(-1deg)"
                      >
                        <Image
                          src={site.image}
                          alt={`${site.title} homepage preview`}
                          borderRadius="6px"
                          objectFit="cover"
                          objectPosition="top left"
                          h="130px"
                          w="100%"
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    bg={site.accent}
                    minH="230px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p="28px"
                  >
                    <Image
                      src={site.image}
                      alt={`${site.title} placeholder preview`}
                      maxH="180px"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </Box>
                )}

                <Box p={["22px", "26px"]}>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mb="18px"
                  >
                    <Flex alignItems="center" gap="8px">
                      <Bot size={20} color={site.accent} />
                      <Text
                        as="p"
                        fontFamily="body"
                        fontSize="1.3rem"
                        fontWeight="700"
                        color="#202020"
                      >
                        {site.status}
                      </Text>
                    </Flex>
                    <ArrowUpRight size={22} color="#202020" />
                  </Flex>

                  <Text
                    as="h4"
                    fontFamily="heading"
                    fontSize={["3rem", "3.4rem"]}
                    fontWeight="black"
                    lineHeight="1"
                    color="#202020"
                    mb="14px"
                  >
                    {site.title}
                  </Text>
                  <Text
                    as="p"
                    fontFamily="body"
                    fontSize="1.6rem"
                    color="#3a3a3a"
                    mb="22px"
                  >
                    {site.summary}
                  </Text>
                  <Flex alignItems="center" gap="8px" color="#202020">
                    <Layers size={18} />
                    <Text as="p" fontFamily="body" fontSize="1.4rem">
                      View architecture
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Link>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default AgentSitesSection;
