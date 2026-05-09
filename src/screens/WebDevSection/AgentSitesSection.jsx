import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { ArrowUpRight, Bot, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { agentSites } from "../../data/sites";

const MotionBox = motion.create(Box);

const AgentSitesSection = () => {
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
          Placeholder case studies for the new work. Each site has its own page
          for architecture, agent roles, and how the system behaves.
        </Text>
      </Flex>

      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={["18px", "22px"]}
      >
        {agentSites.map((site, index) => (
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
