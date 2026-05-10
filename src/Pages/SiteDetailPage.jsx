import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, Redirect, useParams } from "react-router-dom";
import { Box, Container, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BadgeDollarSign,
  Bot,
  CalendarClock,
  CheckCircle2,
  ChefHat,
  Crown,
  Database,
  GitBranch,
  Layers,
  ListChecks,
  Maximize2,
  NotebookText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Utensils,
  Workflow,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

import { getAgentSiteBySlug } from "../data/sites";

const MotionBox = motion.create(Box);

const revealViewport = { once: true, amount: 0.22 };

const RevealBox = ({ children, delay = 0, y = 34, ...rest }) => (
  <MotionBox
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={revealViewport}
    transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </MotionBox>
);

const GolRacuLogoLockup = () => (
  <Flex
    className="gsap-hero-logo"
    alignItems="center"
    gap="10px"
    bg="#fff"
    borderRadius="8px"
    px="18px"
    py="13px"
    w="fit-content"
    boxShadow="0 18px 44px rgba(0,0,0,0.18)"
    aria-label="GolRacu logo"
  >
    <Box
      as="svg"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      w="34px"
      h="29px"
      color="#e00000"
      transition="transform 180ms ease"
      _groupHover={{ transform: "scale(1.1)" }}
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
      <path d="M11.5 17 Q14 19, 16.5 17" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M8 17 L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 19 L3 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17 L24 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20.5 19 L25 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Box>
    <Text
      as="p"
      fontFamily="heading"
      fontSize="2.4rem"
      fontWeight="900"
      lineHeight="1"
      letterSpacing="0"
    >
      <Box as="span" color="#e00000">
        GOL
      </Box>
      <Box as="span" color="#161616">
        RACU
      </Box>
    </Text>
  </Flex>
);

const ZoomableImage = ({ image, onOpen, alt, imageProps, ...buttonProps }) => (
  <Box
    as="button"
    type="button"
    aria-label={`Open ${image.label || "screenshot"} full screen`}
    onClick={() => onOpen(image)}
    transition="transform 180ms ease"
    _hover={{ transform: "scale(1.012)" }}
    _active={{ transform: "scale(0.995)" }}
    cursor="zoom-in"
    position="relative"
    display="block"
    w="100%"
    width="100%"
    minW="0"
    bg="transparent"
    border="0"
    p="0"
    textAlign="left"
    _focusVisible={{ outline: "2px solid #e00000", outlineOffset: "4px" }}
    {...buttonProps}
  >
    <Image
      src={image.src}
      alt={alt || image.caption}
      w="100%"
      width="100%"
      objectFit="contain"
      display="block"
      {...imageProps}
    />
    <Flex
      position="absolute"
      top="12px"
      right="12px"
      w="38px"
      h="38px"
      borderRadius="999px"
      bg="rgba(17, 17, 17, 0.78)"
      color="#fff"
      alignItems="center"
      justifyContent="center"
      pointerEvents="none"
      boxShadow="0 12px 34px rgba(0,0,0,0.22)"
    >
      <Maximize2 size={17} />
    </Flex>
  </Box>
);

const ImageLightbox = ({ image, onClose }) => {
  useEffect(() => {
    if (!image || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <MotionBox
          position="fixed"
          inset="0"
          zIndex="2200"
          bg="rgba(12, 12, 12, 0.88)"
          backdropFilter="blur(14px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={["16px", "32px"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <MotionBox
            as="button"
            type="button"
            aria-label="Close full screen image"
            position="fixed"
            top={["18px", "26px"]}
            right={["18px", "26px"]}
            w="46px"
            h="46px"
            borderRadius="999px"
            bg="#fff"
            color="#111"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="0"
            cursor="pointer"
            zIndex="1"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={onClose}
          >
            <X size={22} />
          </MotionBox>

          <MotionBox
            maxW="min(94vw, 1540px)"
            maxH="90vh"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.caption}
              maxH="82vh"
              w="100%"
              objectFit="contain"
              borderRadius="8px"
              boxShadow="0 34px 120px rgba(0,0,0,0.44)"
            />
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.4rem"
              color="rgba(255,255,255,0.72)"
              mt="12px"
              textAlign="center"
            >
              {image.caption}
            </Text>
          </MotionBox>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

const DetailCard = ({ accent, icon, title, children, ...rest }) => (
  <Box
    border="1px solid rgba(32, 32, 32, 0.12)"
    borderTop={`4px solid ${accent}`}
    borderRadius="8px"
    bg="#fff"
    p={["24px", "34px"]}
    {...rest}
  >
    <Flex alignItems="center" gap="10px" mb="16px">
      {icon}
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={["3rem", "4rem"]}
        fontWeight="black"
        color="#202020"
      >
        {title}
      </Text>
    </Flex>
    {children}
  </Box>
);

const DetailList = ({ accent, items }) =>
  items.map((item) => (
    <Flex key={item} alignItems="flex-start" gap="10px" mb="12px">
      <CheckCircle2 size={18} color={accent} />
      <Text as="p" fontFamily="body" fontSize="1.6rem" color="#303030">
        {item}
      </Text>
    </Flex>
  ));

const BrowserShell = ({ label, children, delay = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 28, rotateX: 4 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={revealViewport}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.5, delay }}
    bg="#fff"
    border="1px solid rgba(32, 32, 32, 0.12)"
    borderRadius="8px"
    overflow="hidden"
    boxShadow="0 28px 80px rgba(32, 32, 32, 0.16)"
  >
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="#f7f7f7"
      borderBottom="1px solid rgba(32, 32, 32, 0.08)"
      px="16px"
      py="10px"
    >
      <Flex gap="6px">
        {["#ff5f57", "#ffbd2e", "#28c840"].map((color) => (
          <Box key={color} w="10px" h="10px" bg={color} borderRadius="999px" />
        ))}
      </Flex>
      <Text as="p" fontFamily="body" fontSize="1.2rem" color="#6a6a6a">
        {label}
      </Text>
    </Flex>
    {children}
  </MotionBox>
);

const InsightCard = ({ icon, kicker, title, value, copy, delay = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 26, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={revealViewport}
    whileHover={{ y: -8, borderColor: "rgba(224, 0, 0, 0.42)" }}
    transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
    bg="linear-gradient(180deg, #fff 0%, #fff7f7 100%)"
    border="1px solid rgba(224, 0, 0, 0.12)"
    borderRadius="8px"
    p={["22px", "26px"]}
    minH="250px"
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      top="0"
      right="0"
      w="120px"
      h="1px"
      bg="linear-gradient(90deg, transparent, rgba(224,0,0,0.38))"
    />
    <Flex alignItems="center" justifyContent="space-between" mb="22px">
      <Flex
        w="50px"
        h="50px"
        bg="#e00000"
        color="#fff"
        borderRadius="999px"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Flex>
      <Text as="p" fontFamily="mono" fontSize="2.6rem" color="#e00000">
        {value}
      </Text>
    </Flex>
    <Text as="p" fontFamily="body" fontSize="1.2rem" color="#e00000" fontWeight="700">
      {kicker}
    </Text>
    <Text as="h3" fontFamily="heading" fontSize="3.4rem" lineHeight="1" color="#202020" mb="12px">
      {title}
    </Text>
    <Text as="p" fontFamily="body" fontSize="1.5rem" color="#4a4a4a">
      {copy}
    </Text>
  </MotionBox>
);

const ScreenshotFrame = ({ screenshot, delay = 0, onOpen }) => (
  <BrowserShell label={screenshot.label} delay={delay}>
    <Box bg="#f8f8f8" p={["8px", "12px"]}>
      <ZoomableImage
        image={screenshot}
        onOpen={onOpen}
        imageProps={{ borderRadius: "6px" }}
      />
    </Box>
    <Box borderTop="1px solid rgba(32, 32, 32, 0.08)" px="18px" py="14px">
      <Text as="p" fontFamily="body" fontSize="1.35rem" color="#4a4a4a">
        {screenshot.caption}
      </Text>
    </Box>
  </BrowserShell>
);

const MiniGolRacuLogo = () => (
  <Flex alignItems="center" justifyContent="center" aria-label="GolRacu">
    <Box
      as="svg"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      w="22px"
      h="19px"
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
      <circle cx="17" cy="13" r="2" fill="white" />
      <circle cx="11.5" cy="12.7" r="1" fill="#1a1a1a" />
      <circle cx="16.5" cy="12.7" r="1" fill="#1a1a1a" />
    </Box>
  </Flex>
);

const ChapterNavigation = ({ chapters, liveUrl }) => (
  <MotionBox
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.42, delay: 0.45 }}
    position="fixed"
    left="0"
    right="0"
    bottom="18px"
    zIndex="1200"
    mx="auto"
    bg="rgba(255, 255, 255, 0.92)"
    color="#202020"
    border="1px solid rgba(224, 0, 0, 0.16)"
    borderRadius="999px"
    p="10px"
    boxShadow="0 20px 70px rgba(224, 0, 0, 0.14), 0 18px 60px rgba(32, 32, 32, 0.12)"
    backdropFilter="blur(16px)"
    maxW="calc(100vw - 24px)"
    w="fit-content"
  >
    <Flex
      gap="6px"
      alignItems="center"
      justifyContent="center"
      overflow="visible"
    >
      <Flex
        display={["none", "inline-flex"]}
        alignItems="center"
        gap="8px"
        px="10px"
        minH="44px"
        borderRight="1px solid rgba(224,0,0,0.14)"
        mr="2px"
      >
        <MiniGolRacuLogo />
        <Text as="p" fontFamily="body" fontSize="1.25rem" fontWeight="800" whiteSpace="nowrap">
          Chapters
        </Text>
      </Flex>
      {chapters.map((chapter, index) => (
        <MotionBox
          key={chapter.href}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: index * 0.04 }}
        >
          <Link
            href={chapter.href}
            aria-label={chapter.label}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            minH="44px"
            border="1px solid rgba(224, 0, 0, 0.14)"
            borderRadius="999px"
            px={["12px", "15px"]}
            py="0"
            bg={chapter.href === "#results" ? "#e00000" : "#fff"}
            color={chapter.href === "#results" ? "#fff" : "#202020"}
            fontFamily="body"
            fontSize={["1.2rem", "1.35rem"]}
            fontWeight="700"
            whiteSpace="nowrap"
            _hover={{
              bg: "#e00000",
              color: "#fff",
              textDecoration: "none",
              transform: "translateY(-2px)",
              boxShadow: "0 14px 30px rgba(224,0,0,0.18)",
            }}
            _focusVisible={{ outline: "2px solid #e00000", outlineOffset: "4px" }}
            transition="all 180ms ease"
          >
            {chapter.icon}
            {chapter.label}
          </Link>
        </MotionBox>
      ))}
      {liveUrl && (
        <Link
          href={liveUrl}
          isExternal
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap="8px"
          minH="44px"
          border="1px solid rgba(224, 0, 0, 0.28)"
          borderRadius="999px"
          px={["12px", "15px"]}
          py="0"
          bg="#fff7f7"
          color="#e00000"
          fontFamily="body"
          fontSize={["1.2rem", "1.35rem"]}
          fontWeight="800"
          whiteSpace="nowrap"
          ml={["0", "4px"]}
          _hover={{
            bg: "#e00000",
            color: "#fff",
            textDecoration: "none",
            transform: "translateY(-2px)",
            boxShadow: "0 14px 30px rgba(224,0,0,0.18)",
          }}
          _focusVisible={{ outline: "2px solid #e00000", outlineOffset: "4px" }}
          transition="all 180ms ease"
        >
          Visit site
          <ArrowUpRight size={16} />
        </Link>
      )}
    </Flex>
  </MotionBox>
);

const ResultsShowcase = ({ results, onOpen }) => (
  <RevealBox
    id="results"
    scrollMarginTop="96px"
    mt="88px"
    bg="#111"
    color="#fff"
    borderRadius="8px"
    overflow="hidden"
    border="1px solid rgba(224,0,0,0.22)"
    boxShadow="0 32px 100px rgba(17, 17, 17, 0.2)"
    p={["20px", "30px"]}
    position="relative"
  >
    <Box
      position="absolute"
      inset="0"
      opacity="0.12"
      bg="linear-gradient(90deg, rgba(255,255,255,0.28) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 0 1px, transparent 1px)"
      backgroundSize="68px 68px"
    />
    <Box position="relative" zIndex="1">
      <Flex
        justifyContent="space-between"
        alignItems={["flex-start", "flex-end"]}
        gap="24px"
        flexDirection={["column", "row"]}
        mb={["22px", "30px"]}
      >
        <Box maxW="760px">
          <Flex alignItems="center" gap="10px" mb="14px">
            <BarChart3 size={24} color="#ff4a4a" />
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.2rem"
              fontWeight="700"
              color="#ff6b6b"
              textTransform="uppercase"
            >
              Results
            </Text>
          </Flex>
          <Text
            as="h2"
            fontFamily="heading"
            fontSize={["4rem", "5.6rem"]}
            lineHeight="0.95"
            mb="16px"
          >
            Proof that the prediction loop works.
          </Text>
          <Text
            as="p"
            fontFamily="body"
            fontSize="1.7rem"
            color="rgba(255,255,255,0.74)"
            maxW="680px"
          >
            The results screens show what happens after each match is evaluated:
            the overview, the market breakdown, and the detailed audit trail.
          </Text>
        </Box>
        <Flex flexWrap="wrap" gap="10px" justifyContent={["flex-start", "flex-end"]}>
          {["Outcome review", "Market breakdown", "Match audit"].map((item) => (
            <Box
              key={item}
              border="1px solid rgba(255,255,255,0.18)"
              borderRadius="999px"
              px="14px"
              py="8px"
              bg="rgba(255,255,255,0.08)"
            >
              <Text as="p" fontFamily="body" fontSize="1.25rem" fontWeight="700">
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>

      <Box bg="#f7f7f7" borderRadius="8px" p={["10px", "16px", "20px"]}>
        <Grid gap={["14px", "18px", "22px"]}>
          <Box maxW="860px" mx="auto" w="100%">
            <ScreenshotFrame screenshot={results[0]} delay={0.08} onOpen={onOpen} />
          </Box>
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={["14px", "18px", "22px"]}>
            <ScreenshotFrame screenshot={results[1]} delay={0.14} onOpen={onOpen} />
            <ScreenshotFrame screenshot={results[2]} delay={0.2} onOpen={onOpen} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </RevealBox>
);

const ArchitectureShowcase = ({ screenshot, onOpen }) => (
  <RevealBox
    id="architecture"
    scrollMarginTop="96px"
    bg="linear-gradient(135deg, #fff 0%, #fff7f7 100%)"
    color="#202020"
    border="1px solid rgba(224, 0, 0, 0.14)"
    borderRadius="8px"
    overflow="hidden"
    position="relative"
    mt="80px"
    boxShadow="0 30px 90px rgba(224,0,0,0.08)"
  >
    <Grid templateColumns={["1fr", "0.56fr 0.44fr"]} minH={["auto", "560px"]}>
      <Box
        bg="linear-gradient(135deg, #fffafa 0%, #fff 50%, #ffecec 100%)"
        p={["14px", "32px"]}
        display="flex"
        alignItems="center"
      >
        <MotionBox
          initial={{ opacity: 0, x: -70, y: 34, scale: 0.94, rotate: -1.4 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -10, scale: 1.015 }}
          w="100%"
          width="100%"
          style={{ width: "100%" }}
        >
          <MotionBox
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            w="100%"
            width="100%"
            style={{ width: "100%" }}
          >
            <ZoomableImage
              image={screenshot}
              onOpen={onOpen}
              imageProps={{
                borderRadius: "6px",
                boxShadow: "0 30px 90px rgba(224,0,0,0.18)",
              }}
            />
          </MotionBox>
        </MotionBox>
      </Box>
      <MotionBox
        p={["30px", "46px", "56px"]}
        position="relative"
        zIndex="1"
        initial={{ opacity: 0, x: 70, y: -26 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <Flex alignItems="center" gap="10px" mb="18px">
          <Layers size={24} color="#ff2b2b" />
          <Text
            as="p"
            fontFamily="body"
            fontSize="1.2rem"
            fontWeight="700"
            color="#ff4a4a"
            textTransform="uppercase"
          >
            Architecture
          </Text>
        </Flex>
        <Text
          as="h2"
          fontFamily="heading"
          fontSize={["4.2rem", "6.2rem"]}
          lineHeight="0.95"
          mb="22px"
        >
          One backend spine for data, AI, and publishing.
        </Text>
        <Text as="p" fontFamily="body" fontSize="1.8rem" color="#4a4a4a" mb="28px">
          Convex is the operational center: it stores matches and predictions,
          runs actions and cron jobs, and connects the public site with admin
          workflows, Claude, API-Football, Resend and affiliate tracking.
        </Text>
        <Grid templateColumns="1fr 1fr" gap="12px">
          {["Public users", "Admin users", "Sports APIs", "Claude actions"].map((item, index) => (
            <MotionBox
              key={item}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.35, delay: 0.14 + index * 0.06 }}
              bg="#fff"
              border="1px solid rgba(224,0,0,0.14)"
              borderRadius="8px"
              px="14px"
              py="12px"
            >
              <Text as="p" fontFamily="body" fontSize="1.35rem">
                {item}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </MotionBox>
    </Grid>
  </RevealBox>
);

const AgentsShowcase = ({ screenshot, onOpen }) => {
  const nodes = ["Match data", "Prediction", "Draft", "Evaluation", "Verification"];

  return (
    <RevealBox
      id="agents"
      scrollMarginTop="96px"
      bg="linear-gradient(135deg, #fff 0%, #fff8f8 52%, #fff 100%)"
      border="1px solid rgba(224, 0, 0, 0.16)"
      borderRadius="8px"
      overflow="hidden"
      mt="80px"
      delay={0.05}
      boxShadow="0 28px 90px rgba(224, 0, 0, 0.08)"
    >
      <Grid templateColumns={["1fr", "1fr", "0.44fr 0.56fr"]} minH={["auto", "560px"]}>
        <MotionBox
          p={["30px", "48px", "56px"]}
          initial={{ opacity: 0, x: -70, y: -24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.72, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Flex alignItems="center" gap="10px" mb="18px">
            <Bot size={24} color="#e00000" />
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.2rem"
              fontWeight="700"
              color="#e00000"
              textTransform="uppercase"
            >
              Agent System
            </Text>
          </Flex>
          <Text
            as="h2"
            fontFamily="heading"
            fontSize={["4.2rem", "5.2rem"]}
            lineHeight="1"
            color="#202020"
            mb="20px"
          >
            Three agents split the responsibility.
          </Text>
          <Text as="p" fontFamily="body" fontSize="1.75rem" color="#454545" mb="24px">
            The platform does not ask one model to do everything. One agent
            writes the prediction, one checks the post-match truth, and one
            controls the prompt rules and output schema.
          </Text>
          <Flex flexWrap="wrap" gap="10px">
            {["Generation", "Verification", "Prompt control"].map((chip) => (
              <Box key={chip} bg="#fff1f1" borderRadius="999px" px="14px" py="8px">
                <Text as="p" fontFamily="body" fontSize="1.25rem" color="#c50000" fontWeight="700">
                  {chip}
                </Text>
              </Box>
            ))}
          </Flex>
        </MotionBox>
        <Box
          p={["14px", "32px"]}
          bg="linear-gradient(180deg, #fffafa 0%, #fff 100%)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <MotionBox
            initial={{ opacity: 0, x: 70, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={revealViewport}
            transition={{ duration: 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.015 }}
            w="100%"
            width="100%"
            maxW="100%"
            alignSelf="stretch"
            style={{ width: "100%", transformOrigin: "center" }}
          >
            <MotionBox
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              bg="#fff"
              border="1px solid rgba(224,0,0,0.1)"
              borderRadius="8px"
              p={["8px", "12px"]}
              boxShadow="0 28px 90px rgba(224,0,0,0.12)"
              w="100%"
              width="100%"
              style={{ width: "100%" }}
            >
              <ZoomableImage
                image={screenshot}
                onOpen={onOpen}
                imageProps={{ borderRadius: "6px" }}
              />
            </MotionBox>
          </MotionBox>
          <Flex gap="8px" mt={["24px", "44px"]} alignItems="center" justifyContent="center" flexWrap="wrap">
            {nodes.map((node, index) => (
              <Flex key={node} alignItems="center" gap="8px">
                <MotionBox
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.32, delay: 0.16 + index * 0.09 }}
                  bg={index === 1 ? "#e00000" : "#fff"}
                  color={index === 1 ? "#fff" : "#e00000"}
                  border="1px solid rgba(224,0,0,0.18)"
                  borderRadius="999px"
                  px="12px"
                  py="7px"
                >
                  <Text as="p" fontFamily="body" fontSize="1.2rem" fontWeight="700">
                    {node}
                  </Text>
                </MotionBox>
                {index < nodes.length - 1 && (
                  <MotionBox
                    initial={{ width: 0 }}
                    whileInView={{ width: 24 }}
                    viewport={revealViewport}
                    transition={{ duration: 0.28, delay: 0.22 + index * 0.09 }}
                    h="2px"
                    bg="#e00000"
                  />
                )}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Grid>
    </RevealBox>
  );
};

const GolRacuCaseStudy = ({ site }) => {
  const [activeImage, setActiveImage] = useState(null);
  const pageRef = useRef(null);
  const screenshots = [
    {
      src: "/golracu/image.png",
      label: "/",
      caption: "Homepage: red hero, weekly picks, affiliate placement and performance metrics.",
    },
    {
      src: "/golracu/ChatGPT%20Image%20May%208,%202026,%2007_34_04%20PM.png",
      label: "architecture",
      caption: "Architecture: Next.js, Convex, Supabase Auth, external APIs, newsletter and analytics.",
    },
    {
      src: "/golracu/9c7835e2-6c2c-4be9-adcf-2472b87189e4.png",
      label: "3 AI agents",
      caption: "Agent system: generation, post-match verification, and prompt-control layers.",
    },
    {
      src: "/golracu/image%20copy.png",
      label: "/ops/ai-cost",
      caption: "AI cost monitor: Claude usage stays visible while the prediction pipeline runs.",
    },
  ];
  const resultScreenshots = [
    {
      src: "/golracu/results-overall.png",
      label: "/admin/results",
      caption: "Overall results: recent wins and evaluated prediction history.",
    },
    {
      src: "/golracu/results-all-market.png",
      label: "/admin/results/markets",
      caption: "All markets: performance breakdown across prediction types.",
    },
    {
      src: "/golracu/results-details-1.png",
      label: "/admin/results/details",
      caption: "Result details: individual match evidence and evaluation status.",
    },
  ];
  const chapters = [
    { href: "#agents", label: "Agents", icon: <Bot size={16} /> },
    { href: "#architecture", label: "Architecture", icon: <Workflow size={16} /> },
    { href: "#mechanics", label: "Mechanics", icon: <Layers size={16} /> },
    { href: "#results", label: "Results", icon: <BarChart3 size={16} /> },
    { href: "#operations", label: "Operations", icon: <ListChecks size={16} /> },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!pageRef.current || typeof window === "undefined") {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".gsap-hero-logo",
        { opacity: 0, y: 18, rotate: -2 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.72, ease: "power3.out" }
      );

      gsap.to(".gsap-orbit", {
        y: -10,
        x: 8,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <Container ref={pageRef} maxW="1560px" pt={["78px", "96px"]} pb="120px">
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />

      <Link
        as={RouterLink}
        to="/#work"
        display="inline-flex"
        alignItems="center"
        gap="8px"
        fontFamily="body"
        fontSize="1.5rem"
        color="#202020"
        mb="18px"
        _hover={{ color: site.accent, textDecoration: "none" }}
      >
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <Box
        bg="#980c0c"
        borderRadius="8px"
        color="white"
        overflow="hidden"
        position="relative"
        border="1px solid rgba(224, 0, 0, 0.22)"
        boxShadow="0 38px 110px rgba(152, 12, 12, 0.25)"
      >
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(115deg, #e00000 0%, #c91313 42%, #670808 100%)"
        />
        <Box
          position="absolute"
          inset="0"
          opacity="0.13"
          bg="linear-gradient(90deg, rgba(255,255,255,0.32) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 0 1px, transparent 1px)"
          backgroundSize="74px 74px"
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(90deg, rgba(0,0,0,0.06), transparent 38%, rgba(0,0,0,0.3))"
        />
        <Box
          className="gsap-orbit"
          position="absolute"
          right={["18px", "8%"]}
          top={["18px", "48px"]}
          w={["88px", "150px"]}
          h={["88px", "150px"]}
          border="1px solid rgba(255,255,255,0.22)"
          borderRadius="999px"
          opacity="0.8"
        />
        <Box
          className="gsap-orbit"
          position="absolute"
          left={["18px", "52%"]}
          bottom={["62px", "70px"]}
          w={["54px", "92px"]}
          h={["54px", "92px"]}
          border="1px solid rgba(255,255,255,0.18)"
          borderRadius="999px"
          opacity="0.7"
        />
        <Grid
          templateColumns={["1fr", "1fr", "0.82fr 1.18fr"]}
          gap={["30px", "44px", "56px"]}
          alignItems="center"
          p={["28px", "44px", "72px"]}
          position="relative"
          zIndex="1"
          minH={["auto", "auto", "640px"]}
        >
          <MotionBox
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Flex alignItems="center" gap="12px" flexWrap="wrap">
              <GolRacuLogoLockup />
              {site.liveUrl && (
                <Link
                  href={site.liveUrl}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap="8px"
                  minH="44px"
                  border="1px solid rgba(255,255,255,0.28)"
                  borderRadius="999px"
                  px="15px"
                  py="0"
                  bg="rgba(255,255,255,0.14)"
                  color="#fff"
                  fontFamily="body"
                  fontSize="1.35rem"
                  fontWeight="800"
                  _hover={{ bg: "#fff", color: "#e00000", textDecoration: "none", transform: "translateY(-2px)" }}
                  transition="all 180ms ease"
                >
                  Visit site
                  <ArrowUpRight size={17} />
                </Link>
              )}
            </Flex>
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.3rem"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0"
              opacity="0.82"
              mt="30px"
              mb="14px"
            >
              <Flex as="span" alignItems="center" gap="8px">
                <Sparkles size={16} />
                Agent-powered football product
              </Flex>
            </Text>
            <Text
              as="h1"
              fontFamily="heading"
              fontSize={["4.8rem", "6.2rem", "7.2rem"]}
              fontWeight="black"
              lineHeight="0.98"
              mb="16px"
            >
              Football picks with an AI back office.
            </Text>
            <Text
              as="p"
              fontFamily="body"
              fontSize={["1.8rem", "2rem"]}
              maxW="600px"
              color="rgba(255, 255, 255, 0.88)"
            >
              A publishing machine for football picks: data comes in, Claude
              reasons over the match, admin validates the output, and users get
              a clean prediction page.
            </Text>
            <Flex mt="30px" gap="12px" flexWrap="wrap">
              {["API-Football data", "Claude agents", "Convex automation"].map((tag, index) => (
                <MotionBox
                  key={tag}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.18 + index * 0.08 }}
                  bg="rgba(255, 255, 255, 0.14)"
                  border="1px solid rgba(255, 255, 255, 0.22)"
                  borderRadius="999px"
                  px="16px"
                  py="8px"
                >
                  <Text as="p" fontFamily="body" fontSize="1.4rem">
                    {tag}
                  </Text>
                </MotionBox>
              ))}
            </Flex>

          </MotionBox>

          <MotionBox
            className="gsap-hero-shot"
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            bg="#fff"
            borderRadius="8px"
            boxShadow="0 36px 100px rgba(0, 0, 0, 0.34)"
            overflow="hidden"
            transform={["none", "none", "rotate(-1deg)"]}
            position="relative"
            maxW={["100%", "100%", "820px"]}
            ml={["0", "0", "auto"]}
            willChange="opacity, transform"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              bg="#f7f7f7"
              borderBottom="1px solid rgba(32, 32, 32, 0.08)"
              px="16px"
              py="10px"
            >
              <Flex gap="6px">
                {["#ff5f57", "#ffbd2e", "#28c840"].map((color) => (
                  <Box
                    key={color}
                    w="10px"
                    h="10px"
                    bg={color}
                    borderRadius="999px"
                  />
                ))}
              </Flex>
              <Text as="p" fontFamily="body" fontSize="1.2rem" color="#6a6a6a">
                {screenshots[0].label}
              </Text>
            </Flex>
            <Box p={["8px", "12px"]}>
              <ZoomableImage
                image={screenshots[0]}
                onOpen={setActiveImage}
                imageProps={{ borderRadius: "6px", maxH: ["none", "none", "430px"] }}
              />
            </Box>
          </MotionBox>
        </Grid>
      </Box>

      <ChapterNavigation chapters={chapters} liveUrl={site.liveUrl} />
      <AgentsShowcase screenshot={screenshots[2]} onOpen={setActiveImage} />
      <ArchitectureShowcase screenshot={screenshots[1]} onOpen={setActiveImage} />

      <RevealBox
        id="mechanics"
        scrollMarginTop="96px"
        mt="88px"
        bg="linear-gradient(135deg, #fff 0%, #fff6f6 100%)"
        color="#202020"
        border="1px solid rgba(224,0,0,0.14)"
        borderRadius="8px"
        p={["28px", "42px"]}
        overflow="hidden"
        position="relative"
      >
        <Box
          position="absolute"
          inset="0"
          opacity="0.35"
          bg="linear-gradient(90deg, rgba(224,0,0,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(224,0,0,0.08) 0 1px, transparent 1px)"
          backgroundSize="64px 64px"
        />
        <Flex
          position="relative"
          zIndex="1"
          justifyContent="space-between"
          gap="24px"
          alignItems={["flex-start", "flex-end"]}
          flexDirection={["column", "row"]}
          mb="28px"
        >
          <Box maxW="760px">
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.2rem"
              color="#ff4a4a"
              fontWeight="700"
              textTransform="uppercase"
              mb="10px"
            >
              Product mechanics
            </Text>
            <Text
              as="h2"
              fontFamily="heading"
              fontSize={["4rem", "5.8rem"]}
              lineHeight="0.95"
            >
              The interesting part is the operating system behind the picks.
            </Text>
          </Box>
          <Text
            as="p"
            fontFamily="body"
            fontSize="1.6rem"
            color="#4a4a4a"
            maxW="390px"
          >
            GolRacu is less a static football page and more a loop: data,
            model reasoning, validation, publishing and track-record feedback.
          </Text>
        </Flex>
        <Grid
          position="relative"
          zIndex="1"
          templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]}
          gap="16px"
        >
          <InsightCard
            icon={<Database size={22} color="#fff" />}
            kicker="Input"
            title="Data cockpit"
            value="6+"
            copy="Fixtures, form, H2H, standings, injuries, odds and rest days feed the prediction context."
            delay={0.1}
          />
          <InsightCard
            icon={<Bot size={22} color="#fff" />}
            kicker="Reasoning"
            title="Claude layer"
            value="v5.1"
            copy="A versioned prompt asks for strict bilingual output with confidence, risks and market logic."
            delay={0.16}
          />
          <InsightCard
            icon={<ShieldCheck size={22} color="#fff" />}
            kicker="Quality"
            title="Validation loop"
            value="114"
            copy="Post-match checks and consistency review protect the public track record before publishing."
            delay={0.22}
          />
          <InsightCard
            icon={<Trophy size={22} color="#fff" />}
            kicker="Outcome"
            title="Public picks"
            value="84%"
            copy="Users see concise predictions, confidence, alternative markets and responsible betting context."
            delay={0.28}
          />
        </Grid>
      </RevealBox>

      <ResultsShowcase results={resultScreenshots} onOpen={setActiveImage} />

      <Grid
        id="operations"
        scrollMarginTop="96px"
        templateColumns={["1fr", "1fr", "0.95fr 1.05fr"]}
        gap="32px"
        mt="88px"
      >
        <ScreenshotFrame
          screenshot={screenshots[3]}
          delay={0.48}
          onOpen={setActiveImage}
        />
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.42, delay: 0.54 }}
          bg="#fff"
          border="1px solid rgba(32, 32, 32, 0.1)"
          borderRadius="8px"
          p={["24px", "34px"]}
        >
          <Text
            as="h2"
            fontFamily="heading"
            fontSize={["3.8rem", "5rem"]}
            lineHeight="1"
            color="#202020"
            mb="16px"
          >
            Trust layer
          </Text>
          <Text as="p" fontFamily="body" fontSize="1.8rem" color="#343434" mb="22px">
            The cost monitor belongs near the operations story: it shows the
            hidden part of running an AI product, where prediction quality and
            Claude usage need to stay visible at the same time.
          </Text>
          {[
            "Model usage visible by day",
            "Prediction pipeline has operational cost",
            "Admin decisions are tied to measurable output",
          ].map((item) => (
            <Flex key={item} gap="10px" mb="12px" alignItems="center">
              <CheckCircle2 size={18} color={site.accent} />
              <Text as="p" fontFamily="body" fontSize="1.6rem" color="#343434">
                {item}
              </Text>
            </Flex>
          ))}
        </MotionBox>
      </Grid>

      <Flex flexWrap="wrap" gap="10px" mt="24px">
        {site.stack.slice(0, 10).map((item) => (
          <Box
            key={item}
            border="1px solid rgba(32, 32, 32, 0.14)"
            borderRadius="999px"
            px="16px"
            py="8px"
            bg="#fff"
          >
            <Text as="p" fontFamily="body" fontSize="1.4rem" color="#202020">
              {item}
            </Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

const DddVisualPanel = ({ screenshot, onOpen, tone = "light", imageProps }) => (
  <Box
    bg={tone === "dark" ? "#07111f" : "#fff"}
    border="1px solid rgba(37, 99, 255, 0.14)"
    borderRadius="8px"
    p={["8px", "10px"]}
    boxShadow={tone === "dark" ? "0 34px 90px rgba(0,0,0,0.28)" : "0 30px 90px rgba(37,99,255,0.12)"}
    overflow="hidden"
  >
    <ZoomableImage
      image={screenshot}
      onOpen={onOpen}
      imageProps={{
        borderRadius: "6px",
        objectFit: "cover",
        objectPosition: "top left",
        ...imageProps,
      }}
    />
  </Box>
);

const DddSignal = ({ value, label, text, color = "#2563FF", dark = false }) => (
  <Box borderLeft={`3px solid ${color}`} pl="16px">
    <Text as="p" fontFamily="mono" fontSize="2.7rem" color={color} lineHeight="1" mb="8px">
      {value}
    </Text>
    <Text as="h3" fontFamily="body" fontSize="1.45rem" fontWeight="800" color={dark ? "#fff" : "#111827"} mb="4px">
      {label}
    </Text>
    <Text as="p" fontFamily="body" fontSize="1.35rem" color={dark ? "rgba(255,255,255,0.68)" : "#5b6472"}>
      {text}
    </Text>
  </Box>
);

const DddFlowNode = ({ title, text, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={revealViewport}
    transition={{ duration: 0.38, delay: index * 0.08 }}
    bg={index === 1 ? "#2563FF" : "#fff"}
    color={index === 1 ? "#fff" : "#111827"}
    border="1px solid rgba(37, 99, 255, 0.14)"
    borderRadius="8px"
    p={["20px", "24px"]}
    minH="190px"
    boxShadow={index === 1 ? "0 24px 70px rgba(37,99,255,0.24)" : "0 20px 60px rgba(37,99,255,0.08)"}
  >
    <Text as="p" fontFamily="mono" fontSize="1.3rem" color={index === 1 ? "rgba(255,255,255,0.72)" : "#2563FF"} mb="18px">
      0{index + 1}
    </Text>
    <Text as="h3" fontFamily="heading" fontSize="3.3rem" lineHeight="1" mb="12px">
      {title}
    </Text>
    <Text as="p" fontFamily="body" fontSize="1.55rem" color={index === 1 ? "rgba(255,255,255,0.78)" : "#5b6472"}>
      {text}
    </Text>
  </MotionBox>
);

const DddManagerCaseStudy = ({ site }) => {
  const [activeImage, setActiveImage] = useState(null);
  const screenshots = [
    { src: "/dddManager/hero-banner.png", label: "/landing", caption: "Landing page: product positioning for Romanian DDD companies." },
    { src: "/dddManager/dashboard.png", label: "/dashboard", caption: "Dashboard: operational overview for clients, contracts, interventions and activity." },
    { src: "/dddManager/ai-flow.png", label: "AI flow", caption: "Smart Import flow: file parsing, LLM classification, mapping, confidence and fallback." },
    { src: "/dddManager/arhitectura.png", label: "architecture", caption: "Architecture: frontend, backend, eFactura service, database, storage, AI providers and external integrations." },
    { src: "/dddManager/prices.png", label: "/pricing", caption: "Pricing: Premium subscription packaging connected to Stripe." },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Container maxW="1560px" pt={["78px", "96px"]} pb="120px">
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />

      <Link as={RouterLink} to="/#work" display="inline-flex" alignItems="center" gap="8px" fontFamily="body" fontSize="1.5rem" color="#202020" mb="18px" _hover={{ color: site.accent, textDecoration: "none" }}>
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <Box bg="#f7f9ff" color="#111827" borderRadius="8px" overflow="hidden" position="relative" border="1px solid rgba(37, 99, 255, 0.16)" boxShadow="0 38px 120px rgba(37, 99, 255, 0.12)">
        <Box position="absolute" inset="0" bg="linear-gradient(135deg, #ffffff 0%, #f7f9ff 44%, #edf4ff 100%)" />
        <Box position="absolute" inset="0" opacity="0.64" bg="linear-gradient(90deg, rgba(37,99,255,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,255,0.07) 0 1px, transparent 1px)" backgroundSize="64px 64px" />
        <Grid templateColumns={["1fr", "1fr", "0.86fr 1.14fr"]} gap={["30px", "48px", "72px"]} alignItems="center" p={["28px", "48px", "78px"]} position="relative" zIndex="1" minH={["auto", "auto", "680px"]}>
          <MotionBox initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Flex alignItems="center" gap="12px" flexWrap="wrap">
              <Box bg="#fff" borderRadius="8px" px="18px" py="13px" boxShadow="0 18px 44px rgba(0,0,0,0.22)">
                <Text as="p" fontFamily="heading" fontSize="2.4rem" fontWeight="900" lineHeight="1" color="#111827">DDDManager</Text>
              </Box>
              {site.liveUrl && (
                <Link href={site.liveUrl} isExternal display="inline-flex" alignItems="center" gap="8px" minH="44px" borderRadius="999px" px="15px" py="0" bg="#ff7a00" color="#fff" fontFamily="body" fontSize="1.35rem" fontWeight="800" _hover={{ bg: "#f26f00", color: "#fff", textDecoration: "none", transform: "translateY(-2px)" }} transition="all 180ms ease">
                  Visit site
                  <ArrowUpRight size={17} />
                </Link>
              )}
            </Flex>
            <Text as="p" fontFamily="body" fontSize="1.3rem" fontWeight="800" textTransform="uppercase" letterSpacing="0" color={site.accent} mt="30px" mb="14px">
              <Flex as="span" alignItems="center" gap="8px">
                <Sparkles size={16} />
                Smart Import AI pentru firme DDD
              </Flex>
            </Text>
            <Text as="h1" fontFamily="heading" fontSize={["4.8rem", "6.2rem", "7.2rem"]} fontWeight="black" lineHeight="0.98" color="#111827" mb="16px">
              AI import that understands DDD operations.
            </Text>
            <Text as="p" fontFamily="body" fontSize={["1.8rem", "2rem"]} maxW="640px" color="#4b5563">
              DDDManager turns CSV, Excel, Word and text files into structured clients, locations, substances, contracts, interventions or invoices, then lets the team continue the work inside the app.
            </Text>
            <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap="18px" mt="38px" maxW="720px">
              <DddSignal value="6+" label="Import types" text="Clients, locations, substances, contracts, interventions and invoices." />
              <DddSignal value="AI" label="Column mapping" text="Romanian DDD files become internal fields." />
              <DddSignal value="Safe" label="Fallback" text="Keyword detection keeps import usable if the LLM fails." color="#ff7a00" />
            </Grid>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.12 }} maxW={["100%", "100%", "850px"]} ml={["0", "0", "auto"]} position="relative">
            <DddVisualPanel screenshot={screenshots[0]} onOpen={setActiveImage} imageProps={{ maxH: ["none", "none", "500px"] }} />
            <Box position="absolute" left={["14px", "-28px"]} bottom={["14px", "-24px"]} bg="#fff" color="#111827" borderRadius="8px" px="18px" py="14px" boxShadow="0 24px 70px rgba(0,0,0,0.22)" maxW="280px">
              <Text as="p" fontFamily="body" fontSize="1.2rem" color="#2563FF" fontWeight="800" textTransform="uppercase">Core interaction</Text>
              <Text as="p" fontFamily="body" fontSize="1.45rem" color="#374151">Upload file, review AI mapping, approve import.</Text>
            </Box>
          </MotionBox>
        </Grid>
      </Box>

      <RevealBox mt="92px">
        <Grid templateColumns={["1fr", "1fr", "0.38fr 0.62fr"]} gap={["26px", "40px"]} alignItems="center">
          <Box>
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase" mb="10px">AI workflow</Text>
            <Text as="h2" fontFamily="heading" fontSize={["4.6rem", "6.4rem"]} lineHeight="0.92" color="#111827" mb="18px">The model is used where the data is messy.</Text>
            <Text as="p" fontFamily="body" fontSize="1.8rem" color="#4b5563" mb="24px">Instead of forcing users to clean files manually, DDDManager asks the model what the file contains, how each column should map, and what risks the user should review before importing.</Text>
            <Flex flexWrap="wrap" gap="10px">
              {["Claude / OpenAI", "Confidence score", "Warnings", "Fallback logic"].map((item) => (
                <Box key={item} bg="#eef4ff" borderRadius="999px" px="14px" py="8px">
                  <Text as="p" fontFamily="body" fontSize="1.3rem" color="#2563FF" fontWeight="800">{item}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
          <DddVisualPanel screenshot={screenshots[2]} onOpen={setActiveImage} />
        </Grid>
      </RevealBox>

      <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap="16px" mt="24px">
        {site.flow.map((step, index) => <DddFlowNode key={step.title} title={step.title} text={step.text} index={index} />)}
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "1.1fr 0.9fr"]} gap="28px" mt="92px" alignItems="stretch">
        <DddVisualPanel screenshot={screenshots[1]} onOpen={setActiveImage} imageProps={{ maxH: ["none", "560px"] }} />
        <Box bg="#fff" border="1px solid rgba(37,99,255,0.14)" borderRadius="8px" p={["26px", "34px"]} boxShadow="0 26px 80px rgba(37,99,255,0.08)">
          <Flex alignItems="center" gap="10px" mb="18px">
            <Bot size={23} color={site.accent} />
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase">Smart Import AI</Text>
          </Flex>
          <Text as="h2" fontFamily="heading" fontSize={["4rem", "5rem"]} lineHeight="0.98" color="#111827" mb="18px">AI is not decoration. It removes the import bottleneck.</Text>
          <DetailList accent={site.accent} items={site.agents} />
        </Box>
      </Grid>

      <Box mt="92px" bg="#f7f9ff" border="1px solid rgba(37,99,255,0.14)" borderRadius="8px" p={["24px", "36px", "44px"]} position="relative" overflow="hidden">
        <Box position="absolute" inset="0" opacity="0.48" bg="linear-gradient(90deg, rgba(37,99,255,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,255,0.07) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
        <Grid position="relative" zIndex="1" templateColumns={["1fr", "1fr", "0.42fr 0.58fr"]} gap="30px" alignItems="center">
          <Box>
            <Flex alignItems="center" gap="10px" mb="14px">
              <GitBranch size={22} color={site.accent} />
              <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase">Architecture</Text>
            </Flex>
            <Text as="h2" fontFamily="heading" fontSize={["4.2rem", "5.6rem"]} lineHeight="0.95" color="#111827" mb="18px">A vertical SaaS split into focused services.</Text>
            <Text as="p" fontFamily="body" fontSize="1.75rem" color="#4b5563">{site.architecture}</Text>
          </Box>
          <DddVisualPanel screenshot={screenshots[3]} onOpen={setActiveImage} />
        </Grid>
      </Box>

      <Grid templateColumns={["1fr", "1fr", "0.82fr 1.18fr"]} gap="28px" mt="92px" alignItems="center">
        <DddVisualPanel screenshot={screenshots[4]} onOpen={setActiveImage} imageProps={{ maxH: ["none", "560px"], objectFit: "contain" }} />
        <Box>
          <Text as="p" fontFamily="body" fontSize="1.2rem" color="#ff7a00" fontWeight="800" textTransform="uppercase" mb="10px">Product surface</Text>
          <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.5rem"]} lineHeight="0.96" color="#111827" mb="18px">The AI flow feeds a real operations product.</Text>
          <DetailList accent={site.accent} items={site.features} />
        </Box>
      </Grid>

      <Flex flexWrap="wrap" gap="10px" mt="28px">
        {site.stack.slice(0, 12).map((item) => (
          <Box key={item} border="1px solid rgba(37, 99, 255, 0.16)" borderRadius="999px" px="16px" py="8px" bg="#fff">
            <Text as="p" fontFamily="body" fontSize="1.4rem" color="#111827">{item}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

const InFridgePhoneFrame = ({ screenshot, onOpen, delay = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 28, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={revealViewport}
    transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    bg="#211721"
    borderRadius="36px"
    p="10px"
    boxShadow="0 28px 90px rgba(255, 79, 135, 0.18)"
    maxW="360px"
    mx="auto"
  >
    <Box bg="#fff7fa" borderRadius="28px" overflow="hidden">
      <ZoomableImage
        image={screenshot}
        onOpen={onOpen}
        imageProps={{
          borderRadius: "28px",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
    </Box>
  </MotionBox>
);

const InFridgeStat = ({ value, label, text, icon }) => (
  <Box
    bg="#fff"
    border="1px solid rgba(255, 79, 135, 0.16)"
    borderRadius="8px"
    p={["18px", "20px"]}
    boxShadow="0 20px 60px rgba(255, 79, 135, 0.08)"
    minH="156px"
    flex="1 1 190px"
    minW={["100%", "190px"]}
  >
    <Flex alignItems="center" gap="10px" mb="16px">
      <Flex
        w="42px"
        h="42px"
        borderRadius="999px"
        bg="#ff4f87"
        color="#fff"
        alignItems="center"
        justifyContent="center"
        flexShrink="0"
      >
        {icon}
      </Flex>
      <Box bg="#fff0f5" border="1px solid rgba(255,79,135,0.14)" borderRadius="999px" px="12px" py="7px" minW="0">
        <Text as="p" fontFamily="body" fontSize="1.5rem" color="#ff4f87" fontWeight="900" lineHeight="1" whiteSpace="nowrap">
          {value}
        </Text>
      </Box>
    </Flex>
    <Text as="h3" fontFamily="body" fontSize="1.45rem" fontWeight="900" color="#211721" mb="6px">
      {label}
    </Text>
    <Text as="p" fontFamily="body" fontSize="1.32rem" color="#6f626a">
      {text}
    </Text>
  </Box>
);

const InFridgeFlowStep = ({ step, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={revealViewport}
    transition={{ duration: 0.38, delay: index * 0.08 }}
    bg={index === 1 ? "#ff4f87" : "#fff"}
    color={index === 1 ? "#fff" : "#211721"}
    border="1px solid rgba(255, 79, 135, 0.16)"
    borderRadius="8px"
    p={["20px", "24px"]}
    minH="188px"
    boxShadow={index === 1 ? "0 24px 70px rgba(255,79,135,0.22)" : "0 20px 60px rgba(255,79,135,0.08)"}
  >
    <Text as="p" fontFamily="mono" fontSize="1.3rem" color={index === 1 ? "rgba(255,255,255,0.72)" : "#ff4f87"} mb="18px">
      0{index + 1}
    </Text>
    <Text as="h3" fontFamily="heading" fontSize="3.3rem" lineHeight="1" mb="12px">
      {step.title}
    </Text>
    <Text as="p" fontFamily="body" fontSize="1.55rem" color={index === 1 ? "rgba(255,255,255,0.8)" : "#6f626a"}>
      {step.text}
    </Text>
  </MotionBox>
);

const InFridgeCaseStudy = ({ site }) => {
  const [activeImage, setActiveImage] = useState(null);
  const screenshots = [
    {
      src: "/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.37.41.png",
      label: "cook",
      caption: "Cook screen: text, photo, voice and quick ingredients for recipe generation.",
    },
    {
      src: "/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.36.57.png",
      label: "swipe",
      caption: "Swipe screen: AI-generated recipe cards with Free usage count and Premium upgrade.",
    },
    {
      src: "/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.38.32.png",
      label: "recipe",
      caption: "Recipe detail: ingredients, cooking metadata and save action.",
    },
    {
      src: "/inFrigde/screens/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-05-10%20at%2011.37.31.png",
      label: "saved",
      caption: "Saved recipes: local product surface backed by Supabase data.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Container maxW="1560px" pt={["78px", "96px"]} pb="120px">
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />

      <Link as={RouterLink} to="/#work" display="inline-flex" alignItems="center" gap="8px" fontFamily="body" fontSize="1.5rem" color="#202020" mb="18px" _hover={{ color: site.accent, textDecoration: "none" }}>
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <Box bg="#fff7fa" color="#211721" borderRadius="8px" overflow="hidden" position="relative" border="1px solid rgba(255, 79, 135, 0.18)" boxShadow="0 38px 120px rgba(255, 79, 135, 0.14)">
        <Box position="absolute" inset="0" bg="linear-gradient(135deg, #ffffff 0%, #fff5f8 42%, #ffe1ec 100%)" />
        <Box position="absolute" inset="0" opacity="0.54" bg="linear-gradient(90deg, rgba(255,79,135,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,79,135,0.07) 0 1px, transparent 1px)" backgroundSize="64px 64px" />
        <Grid templateColumns={["1fr", "1fr", "0.86fr 1.14fr"]} gap={["30px", "48px", "72px"]} alignItems="center" p={["28px", "48px", "78px"]} position="relative" zIndex="1" minH={["auto", "auto", "680px"]}>
          <MotionBox initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Flex alignItems="center" gap="12px" flexWrap="wrap">
              <Box
                bg="#fff"
                borderRadius="8px"
                w={["210px", "300px"]}
                h={["90px", "112px"]}
                boxShadow="0 18px 44px rgba(255,79,135,0.12)"
                overflow="hidden"
              >
                <Image
                  src="/inFrigde/logo-lockup.png"
                  alt="inFridge logo"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
            </Flex>
            <Text as="p" fontFamily="body" fontSize="1.3rem" fontWeight="800" textTransform="uppercase" letterSpacing="0" color={site.accent} mt="30px" mb="14px">
              <Flex as="span" alignItems="center" gap="8px">
                <Sparkles size={16} />
                AI recipe generation for iOS · In progress
              </Flex>
            </Text>
            <Text as="h1" fontFamily="heading" fontSize={["4.8rem", "6.2rem", "7.2rem"]} fontWeight="black" lineHeight="0.98" color="#211721" mb="16px">
              From fridge ingredients to swipeable recipes.
            </Text>
            <Text as="p" fontFamily="body" fontSize={["1.8rem", "2rem"]} maxW="660px" color="#6f626a">
              A SwiftUI app backed by Supabase Auth, a .NET API, OpenAI recipe generation, permanent caching and RevenueCat Premium.
            </Text>
            <Flex gap="14px" mt="38px" maxW="760px" flexWrap="wrap" alignItems="stretch">
              {site.metrics.map((metric, index) => (
                <InFridgeStat
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  text={index === 0 ? "Free plan is enforced by the backend." : index === 1 ? "Validated recipes returned from OpenAI." : "Premium removes recipe limits."}
                  icon={index === 0 ? <Smartphone size={21} /> : index === 1 ? <ChefHat size={21} /> : <Crown size={21} />}
                />
              ))}
            </Flex>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap={["18px", "22px"]} alignItems="center">
              <InFridgePhoneFrame screenshot={screenshots[0]} onOpen={setActiveImage} />
              <Box display={["none", "block"]}>
                <InFridgePhoneFrame screenshot={screenshots[1]} onOpen={setActiveImage} delay={0.12} />
              </Box>
            </Grid>
          </MotionBox>
        </Grid>
      </Box>

      <RevealBox mt="92px">
        <Grid templateColumns={["1fr", "1fr", "0.42fr 0.58fr"]} gap={["28px", "46px"]} alignItems="center">
          <Box>
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase" mb="10px">Product loop</Text>
            <Text as="h2" fontFamily="heading" fontSize={["4.4rem", "6rem"]} lineHeight="0.94" color="#211721" mb="18px">The iOS app stays playful while the backend stays strict.</Text>
            <Text as="p" fontFamily="body" fontSize="1.8rem" color="#6f626a" mb="24px">{site.idea}</Text>
            <DetailList accent={site.accent} items={site.features.slice(0, 4)} />
          </Box>
          <Grid templateColumns={["1fr", "1fr 1fr"]} gap="16px">
            {screenshots.slice(2, 4).map((screenshot, index) => (
              <InFridgePhoneFrame key={screenshot.src} screenshot={screenshot} onOpen={setActiveImage} delay={index * 0.08} />
            ))}
          </Grid>
        </Grid>
      </RevealBox>

      <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap="16px" mt="30px">
        {site.flow.map((step, index) => <InFridgeFlowStep key={step.title} step={step} index={index} />)}
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "0.95fr 1.05fr"]} gap="28px" mt="92px" alignItems="stretch">
        <Box bg="#211721" color="#fff" borderRadius="8px" p={["26px", "36px"]} position="relative" overflow="hidden">
          <Box position="absolute" inset="0" opacity="0.16" bg="linear-gradient(90deg, rgba(255,255,255,0.26) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.18) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
          <Box position="relative" zIndex="1">
            <Flex alignItems="center" gap="10px" mb="18px">
              <Bot size={23} color="#ff8eb0" />
              <Text as="p" fontFamily="body" fontSize="1.2rem" color="#ff8eb0" fontWeight="800" textTransform="uppercase">C# agentic backend</Text>
            </Flex>
            <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.4rem"]} lineHeight="0.96" mb="18px">OpenAI sits behind orchestration, validation and limits.</Text>
            {site.agents.map((item) => (
              <Flex key={item} gap="10px" mb="12px" alignItems="flex-start">
                <CheckCircle2 size={18} color="#ff8eb0" />
                <Text as="p" fontFamily="body" fontSize="1.6rem" color="rgba(255,255,255,0.78)">
                  {item}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box bg="#fff" border="1px solid rgba(255,79,135,0.16)" borderRadius="8px" p={["26px", "36px"]} boxShadow="0 26px 80px rgba(255,79,135,0.08)">
          <Flex alignItems="center" gap="10px" mb="18px">
            <GitBranch size={23} color={site.accent} />
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase">Architecture</Text>
          </Flex>
          <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.2rem"]} lineHeight="0.98" color="#211721" mb="18px">SwiftUI for experience, .NET for product rules.</Text>
          <Text as="p" fontFamily="body" fontSize="1.75rem" color="#6f626a" mb="22px">{site.architecture}</Text>
          <DetailList accent={site.accent} items={site.automation} />
        </Box>
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "0.9fr 1.1fr"]} gap="28px" mt="92px" alignItems="stretch">
        <Box bg="#fff7fa" border="1px solid rgba(255,79,135,0.16)" borderRadius="8px" p={["26px", "36px"]} position="relative" overflow="hidden">
          <Box position="absolute" inset="0" opacity="0.48" bg="linear-gradient(90deg, rgba(255,79,135,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,79,135,0.07) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
          <Box position="relative" zIndex="1">
            <Flex alignItems="center" gap="10px" mb="16px">
              <Utensils size={22} color={site.accent} />
              <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase">Ingredient input modes</Text>
            </Flex>
            <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.2rem"]} lineHeight="0.96" color="#211721" mb="22px">
              Recipes can start from whatever the user has at hand.
            </Text>
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="12px">
              {[
                { title: "Text prompt", text: "Type ingredients, cravings, time limits or a rough dinner idea." },
                { title: "Photo", text: "Use an ingredient photo as the starting point for what to cook." },
                { title: "Voice", text: "Speak what is in the fridge when typing feels slow." },
                { title: "Pantry", text: "Combine saved staples with quick suggestions like eggs, rice or tomato." },
              ].map((mode) => (
                <Box key={mode.title} bg="#fff" border="1px solid rgba(255,79,135,0.14)" borderRadius="8px" px="16px" py="14px">
                  <Text as="h3" fontFamily="body" fontSize="1.45rem" fontWeight="800" color="#211721" mb="4px">{mode.title}</Text>
                  <Text as="p" fontFamily="body" fontSize="1.3rem" color="#6f626a">{mode.text}</Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box bg="#fff" border="1px solid rgba(255,79,135,0.16)" borderRadius="8px" p={["26px", "36px"]} boxShadow="0 26px 80px rgba(255,79,135,0.08)">
          <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase" mb="10px">Premium and persistence</Text>
          <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.5rem"]} lineHeight="0.96" color="#211721" mb="18px">The app can feel instant because repeated requests hit cache.</Text>
          <Text as="p" fontFamily="body" fontSize="1.8rem" color="#6f626a" mb="22px">{site.monetization}</Text>
          <DetailList accent={site.accent} items={site.notes} />
        </Box>
      </Grid>

      <Flex flexWrap="wrap" gap="10px" mt="28px">
        {site.stack.map((item) => (
          <Box key={item} border="1px solid rgba(255, 79, 135, 0.16)" borderRadius="999px" px="16px" py="8px" bg="#fff">
            <Text as="p" fontFamily="body" fontSize="1.4rem" color="#211721">{item}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

const ReziGrileStat = ({ icon, value, label }) => (
  <Box
    bg="#fff"
    border="1px solid rgba(40, 127, 112, 0.14)"
    borderRadius="8px"
    px="18px"
    py="16px"
    minW={["100%", "168px"]}
    boxShadow="0 18px 50px rgba(17, 24, 39, 0.08)"
  >
    <Flex alignItems="center" gap="10px" color="#287f70" mb="8px">
      {icon}
      <Text as="p" fontFamily="heading" fontSize="2.6rem" fontWeight="900" lineHeight="1">
        {value}
      </Text>
    </Flex>
    <Text as="p" fontFamily="body" fontSize="1.25rem" color="#52627a" fontWeight="700">
      {label}
    </Text>
  </Box>
);

const ReziGrileScreen = ({ screenshot, onOpen, delay = 0 }) => (
  <MotionBox
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={revealViewport}
    transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    bg="#fff"
    border="1px solid rgba(40, 127, 112, 0.14)"
    borderRadius="8px"
    overflow="hidden"
    boxShadow="0 26px 80px rgba(17, 24, 39, 0.12)"
  >
    <Box bg="#f6faf9" p={["8px", "12px"]}>
      <ZoomableImage
        image={screenshot}
        onOpen={onOpen}
        imageProps={{ borderRadius: "6px" }}
      />
    </Box>
    <Box borderTop="1px solid rgba(40, 127, 112, 0.1)" px="18px" py="14px">
      <Text as="p" fontFamily="body" fontSize="1.35rem" color="#52627a">
        {screenshot.caption}
      </Text>
    </Box>
  </MotionBox>
);

const ReziGrileCaseStudy = ({ site }) => {
  const [activeImage, setActiveImage] = useState(null);
  const screenshots = [
    {
      src: "/rezigrile/screens/hero.png",
      label: "Landing hero",
      caption: "Public landing page with the ReziGrile brand, medical exam positioning and character system.",
    },
    {
      src: "/rezigrile/screens/teste.png",
      label: "Test selection",
      caption: "The study flow starts from personalized tests, quick tests, re-exam practice, favorites and scheduled simulations.",
    },
    {
      src: "/rezigrile/screens/realizari.png",
      label: "Achievements",
      caption: "Gamification layer with achievements, XP, progress categories and streak-based motivation.",
    },
    {
      src: "/rezigrile/screens/functionalitati.png",
      label: "Feature surface",
      caption: "Product modules for 1v1 challenges, exam simulations, XP, community and study groups.",
    },
  ];

  const characters = [
    "/rezigrile/characters/study-group.png",
    "/rezigrile/characters/challenge-energic.png",
    "/rezigrile/characters/helper-doctor.png",
    "/rezigrile/characters/winner-xp.png",
  ];

  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Container maxW="1560px" pt={["78px", "96px"]} pb="120px">
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />

      <Link as={RouterLink} to="/#work" display="inline-flex" alignItems="center" gap="8px" fontFamily="body" fontSize="1.5rem" color="#101b2a" mb="18px" _hover={{ color: site.accent, textDecoration: "none" }}>
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <Box bg="#f7fbfa" color="#101b2a" borderRadius="8px" overflow="hidden" position="relative" border="1px solid rgba(40, 127, 112, 0.18)" boxShadow="0 38px 120px rgba(40, 127, 112, 0.14)">
        <Box position="absolute" inset="0" bg="linear-gradient(135deg, #ffffff 0%, #f4fbfa 50%, #dff6f1 100%)" />
        <Box position="absolute" inset="0" opacity="0.55" bg="linear-gradient(90deg, rgba(40,127,112,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(67,205,190,0.08) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
        <Grid templateColumns={["1fr", "1fr", "0.88fr 1.12fr"]} gap={["30px", "48px", "70px"]} alignItems="center" p={["24px", "40px", "54px"]} position="relative" zIndex="1" minH={["auto", "auto", "620px"]}>
          <MotionBox initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Flex alignItems="center" gap="12px" flexWrap="wrap">
              <Box
                bg="#fff"
                borderRadius="8px"
                w={["220px", "300px"]}
                h={["78px", "96px"]}
                boxShadow="0 18px 44px rgba(40,127,112,0.12)"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
                px="18px"
              >
                <Image src="/rezigrile/logo/rezigrile-logo-full-color.png" alt="ReziGrile logo" w="100%" h="100%" objectFit="contain" />
              </Box>
              {site.liveUrl && (
                <Link
                  href={site.liveUrl}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap="8px"
                  minH="44px"
                  borderRadius="999px"
                  px="15px"
                  py="0"
                  bg={site.accent}
                  color="#fff"
                  fontFamily="body"
                  fontSize="1.35rem"
                  fontWeight="800"
                  _hover={{ bg: "#216b5f", color: "#fff", textDecoration: "none", transform: "translateY(-2px)" }}
                  transition="all 180ms ease"
                >
                  Visit site
                  <ArrowUpRight size={17} />
                </Link>
              )}
            </Flex>

            <Text as="p" fontFamily="body" fontSize="1.3rem" fontWeight="800" textTransform="uppercase" letterSpacing="0" color={site.accent} mt="30px" mb="14px">
              <Flex as="span" alignItems="center" gap="8px">
                <Sparkles size={16} />
                Medical learning platform · AI-assisted content pipeline
              </Flex>
            </Text>
            <Text as="h1" fontFamily="heading" fontSize={["4rem", "5rem", "5.6rem"]} fontWeight="black" lineHeight="1" color="#101b2a" mb="18px">
              AI-powered medical exam prep.
            </Text>
            <Text as="p" fontFamily="body" fontSize={["1.8rem", "2rem"]} maxW="700px" color="#52627a">
              ReziGrile turns residency preparation into an interactive, measurable and personalized loop with tests, simulations, analytics, XP, social learning and premium subscriptions.
            </Text>
            <Flex gap="14px" mt="38px" maxW="780px" flexWrap="wrap" alignItems="stretch">
              {site.metrics.map((metric, index) => (
                <ReziGrileStat
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  icon={index === 0 ? <ListChecks size={21} /> : index === 1 ? <Trophy size={21} /> : <BarChart3 size={21} />}
                />
              ))}
            </Flex>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.12 }} position="relative" minH={["360px", "470px", "560px"]}>
            <Image
              src="/rezigrile/characters/hero-team.png"
              alt="ReziGrile learning characters"
              position="absolute"
              right={["0", "10px", "4px"]}
              top={["64px", "34px", "20px"]}
              w={["88%", "72%", "68%"]}
              maxH="520px"
              objectFit="contain"
              filter="drop-shadow(0 28px 52px rgba(17,24,39,0.16))"
            />
            <Box
              position="absolute"
              left={["0", "20px"]}
              top={["4px", "18px"]}
              bg="#fff"
              border="1px solid rgba(40,127,112,0.14)"
              borderRadius="8px"
              p="10px"
              w={["74%", "54%", "48%"]}
              boxShadow="0 26px 80px rgba(17,24,39,0.14)"
              transform="rotate(-2deg)"
            >
              <Image src="/rezigrile/screens/teste.png" alt="ReziGrile test selection preview" borderRadius="6px" objectFit="cover" objectPosition="top left" h={["155px", "210px"]} w="100%" />
            </Box>
            <Box
              position="absolute"
              right={["6px", "0"]}
              top={["174px", "238px"]}
              bg="#fff"
              border="1px solid rgba(40,127,112,0.14)"
              borderRadius="8px"
              p="10px"
              w={["66%", "44%", "40%"]}
              boxShadow="0 26px 80px rgba(17,24,39,0.12)"
              transform="rotate(2deg)"
            >
              <Image src="/rezigrile/screens/realizari.png" alt="ReziGrile achievements preview" borderRadius="6px" objectFit="cover" objectPosition="top left" h={["130px", "168px"]} w="100%" />
            </Box>
          </MotionBox>
        </Grid>
      </Box>

      <RevealBox mt="92px">
        <Grid templateColumns={["1fr", "1fr", "0.42fr 0.58fr"]} gap={["28px", "48px"]} alignItems="center">
          <Box>
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase" mb="10px">Product system</Text>
            <Text as="h2" fontFamily="heading" fontSize={["4.4rem", "6rem"]} lineHeight="0.94" color="#101b2a" mb="18px">Not just a question bank.</Text>
            <Text as="p" fontFamily="body" fontSize="1.8rem" color="#52627a" mb="24px">
              {site.summary}
            </Text>
            <DetailList accent={site.accent} items={site.features} />
          </Box>
          <ReziGrileScreen screenshot={screenshots[0]} onOpen={setActiveImage} />
        </Grid>
      </RevealBox>

      <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap="16px" mt="36px">
        {[
          { title: "Practice", text: "Specialty, chapter, category, topic and previous-subject filters.", icon: <NotebookText size={22} /> },
          { title: "Simulate", text: "Scheduled exam-style sessions with realistic constraints and results.", icon: <CalendarClock size={22} /> },
          { title: "Compete", text: "Leaderboards, XP, streaks, achievements, trophies and readiness score.", icon: <Trophy size={22} /> },
          { title: "Connect", text: "Study groups, community posts, messages, support tickets and 1v1 duels.", icon: <UsersIconFallback /> },
        ].map((item, index) => (
          <MotionBox
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.42, delay: index * 0.06 }}
            bg={index === 1 ? site.accent : "#fff"}
            color={index === 1 ? "#fff" : "#101b2a"}
            border="1px solid rgba(40,127,112,0.14)"
            borderRadius="8px"
            p={["20px", "24px"]}
            minH="218px"
            boxShadow={index === 1 ? "0 24px 70px rgba(40,127,112,0.22)" : "0 20px 60px rgba(17,24,39,0.08)"}
          >
            <Flex w="46px" h="46px" borderRadius="8px" bg={index === 1 ? "rgba(255,255,255,0.16)" : "#e7f7f3"} color={index === 1 ? "#fff" : site.accent} alignItems="center" justifyContent="center" mb="20px">
              {item.icon}
            </Flex>
            <Text as="h3" fontFamily="heading" fontSize="3.2rem" lineHeight="1" mb="12px">
              {item.title}
            </Text>
            <Text as="p" fontFamily="body" fontSize="1.45rem" color={index === 1 ? "rgba(255,255,255,0.82)" : "#52627a"}>
              {item.text}
            </Text>
          </MotionBox>
        ))}
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "0.95fr 1.05fr"]} gap="28px" mt="92px" alignItems="stretch">
        <Box bg="#101b2a" color="#fff" borderRadius="8px" p={["26px", "38px"]} position="relative" overflow="hidden">
          <Box position="absolute" inset="0" opacity="0.14" bg="linear-gradient(90deg, rgba(255,255,255,0.24) 0 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.16) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
          <Box position="relative" zIndex="1" maxW="820px">
            <Flex alignItems="center" gap="10px" mb="18px">
              <Bot size={23} color="#43cdbe" />
              <Text as="p" fontFamily="body" fontSize="1.2rem" color="#43cdbe" fontWeight="800" textTransform="uppercase">AI-assisted question pipeline</Text>
            </Flex>
            <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.4rem"]} lineHeight="0.96" mb="18px">AI scales structure. Rules and review protect quality.</Text>
            {site.agents.map((item) => (
              <Flex key={item} gap="10px" mb="12px" alignItems="flex-start">
                <CheckCircle2 size={18} color="#43cdbe" />
                <Text as="p" fontFamily="body" fontSize="1.55rem" color="rgba(255,255,255,0.78)">
                  {item}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>

        <Box bg="#fff" border="1px solid rgba(40,127,112,0.16)" borderRadius="8px" p={["26px", "38px"]} boxShadow="0 26px 80px rgba(17,24,39,0.08)">
          <Flex alignItems="center" gap="10px" mb="18px">
            <GitBranch size={23} color={site.accent} />
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase">Architecture</Text>
          </Flex>
          <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.2rem"]} lineHeight="0.98" color="#101b2a" mb="18px">React learning surface, .NET product engine, MongoDB content model.</Text>
          <Text as="p" fontFamily="body" fontSize="1.75rem" color="#52627a" mb="22px">
            {site.architecture}
          </Text>
          <DetailList accent={site.accent} items={site.automation} />
        </Box>
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap="22px" mt="92px">
        {screenshots.slice(1).map((screenshot, index) => (
          <ReziGrileScreen key={screenshot.src} screenshot={screenshot} onOpen={setActiveImage} delay={index * 0.08} />
        ))}
      </Grid>

      <Box mt="92px" bg="#f7fbfa" border="1px solid rgba(40,127,112,0.16)" borderRadius="8px" p={["26px", "38px"]} position="relative" overflow="hidden">
        <Box position="absolute" inset="0" opacity="0.5" bg="linear-gradient(90deg, rgba(40,127,112,0.08) 0 1px, transparent 1px), linear-gradient(0deg, rgba(67,205,190,0.08) 0 1px, transparent 1px)" backgroundSize="58px 58px" />
        <Grid templateColumns={["1fr", "1fr", "0.7fr 1.3fr"]} gap="28px" alignItems="center" position="relative" zIndex="1">
          <Box>
            <Text as="p" fontFamily="body" fontSize="1.2rem" color={site.accent} fontWeight="800" textTransform="uppercase" mb="10px">Brand system</Text>
            <Text as="h2" fontFamily="heading" fontSize={["4rem", "5.5rem"]} lineHeight="0.96" color="#101b2a" mb="18px">Characters make dense exam prep feel lighter.</Text>
            <Text as="p" fontFamily="body" fontSize="1.75rem" color="#52627a" mb="22px">
              The interface keeps information dense and scannable, while the character set gives achievements, help, fatigue and competition a recognizable product voice.
            </Text>
            <DetailList accent={site.accent} items={site.notes} />
          </Box>
          <Grid templateColumns={["1fr 1fr", "repeat(4, 1fr)"]} gap="14px" alignItems="end">
            {characters.map((src, index) => (
              <Box key={src} bg="#fff" border="1px solid rgba(40,127,112,0.14)" borderRadius="8px" p="10px" minH={["170px", "220px"]} display="flex" alignItems="flex-end" justifyContent="center" boxShadow="0 18px 50px rgba(17,24,39,0.08)">
                <Image src={src} alt={`ReziGrile character ${index + 1}`} maxH={["150px", "210px"]} objectFit="contain" />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Flex flexWrap="wrap" gap="10px" mt="28px">
        {site.stack.map((item) => (
          <Box key={item} border="1px solid rgba(40, 127, 112, 0.16)" borderRadius="999px" px="16px" py="8px" bg="#fff">
            <Text as="p" fontFamily="body" fontSize="1.4rem" color="#101b2a">{item}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

const UsersIconFallback = () => (
  <Box as="span" display="inline-flex" alignItems="center" justifyContent="center">
    <Box as="span" w="8px" h="8px" bg="currentColor" borderRadius="999px" mr="2px" />
    <Box as="span" w="8px" h="8px" bg="currentColor" borderRadius="999px" mr="2px" opacity="0.72" />
    <Box as="span" w="8px" h="8px" bg="currentColor" borderRadius="999px" opacity="0.48" />
  </Box>
);

const SiteDetailPage = () => {
  const { siteSlug } = useParams();
  const site = getAgentSiteBySlug(siteSlug);

  if (!site) {
    return <Redirect to="/"></Redirect>;
  }

  if (site.slug === "golracu") {
    return <GolRacuCaseStudy site={site}></GolRacuCaseStudy>;
  }

  if (site.slug === "rezigrile") {
    return <ReziGrileCaseStudy site={site}></ReziGrileCaseStudy>;
  }

  if (site.slug === "dddmanager") {
    return <DddManagerCaseStudy site={site}></DddManagerCaseStudy>;
  }

  if (site.slug === "infridge") {
    return <InFridgeCaseStudy site={site}></InFridgeCaseStudy>;
  }

  return (
    <Container maxW="1500px" pt={["120px", "150px"]} pb="120px">
      <Link
        as={RouterLink}
        to="/#work"
        display="inline-flex"
        alignItems="center"
        gap="8px"
        fontFamily="body"
        fontSize="1.5rem"
        color="#202020"
        mb="34px"
        _hover={{ color: site.accent, textDecoration: "none" }}
      >
        <ArrowLeft size={18} />
        Back to work
      </Link>

      <Grid templateColumns={["1fr", "1fr", "0.9fr 1.1fr"]} gap="34px">
        <MotionBox
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Flex alignItems="center" gap="10px" mb="16px">
            <Bot size={24} color={site.accent} />
            <Text
              as="p"
              fontFamily="body"
              fontSize="1.4rem"
              fontWeight="700"
              textTransform="uppercase"
              color={site.accent}
            >
              {site.status}
            </Text>
          </Flex>
          <Text
            as="h1"
            fontFamily="heading"
            fontSize={["5rem", "7rem", "8.5rem"]}
            fontWeight="black"
            lineHeight="0.95"
            color="#202020"
            mb="22px"
          >
            {site.title}
          </Text>
          <Text
            as="p"
            fontFamily="body"
            fontSize={["1.8rem", "2rem"]}
            color="#303030"
            maxW="680px"
          >
            {site.summary}
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          bg={site.accent}
          borderRadius="8px"
          minH={["320px", "420px"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={["34px", "54px"]}
        >
          <Image
            src={site.image}
            alt={`${site.title} placeholder architecture preview`}
            maxH="360px"
            objectFit="contain"
          />
        </MotionBox>
      </Grid>

      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap="24px" mt="44px">
        <DetailCard
          accent={site.accent}
          icon={<GitBranch size={22} color={site.accent} />}
          title="Architecture"
        >
          <Text as="p" fontFamily="body" fontSize="1.7rem" color="#303030">
            {site.architecture}
          </Text>
        </DetailCard>

        <DetailCard
          accent={site.accent}
          icon={<Layers size={22} color={site.accent} />}
          title="AI pipeline"
        >
          <DetailList accent={site.accent} items={site.agents} />
        </DetailCard>
      </Grid>

      {site.features && (
        <DetailCard
          accent={site.accent}
          icon={<NotebookText size={22} color={site.accent} />}
          title="Product"
          mt="24px"
        >
          <DetailList accent={site.accent} items={site.features} />
        </DetailCard>
      )}

      {(site.automation || site.monetization) && (
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap="24px"
          mt="24px"
        >
          {site.automation && (
            <DetailCard
              accent={site.accent}
              icon={<CalendarClock size={22} color={site.accent} />}
              title="Automation"
            >
              <DetailList accent={site.accent} items={site.automation} />
            </DetailCard>
          )}

          {site.monetization && (
            <DetailCard
              accent={site.accent}
              icon={<BadgeDollarSign size={22} color={site.accent} />}
              title="Monetization"
            >
              <Text
                as="p"
                fontFamily="body"
                fontSize="1.7rem"
                color="#303030"
              >
                {site.monetization}
              </Text>
            </DetailCard>
          )}
        </Grid>
      )}

      {site.notes && (
        <DetailCard
          accent={site.accent}
          icon={<Bot size={22} color={site.accent} />}
          title="Technical notes"
          mt="24px"
        >
          <DetailList accent={site.accent} items={site.notes} />
        </DetailCard>
      )}

      <Flex flexWrap="wrap" gap="10px" mt="24px">
        {site.stack.map((item) => (
          <Box
            key={item}
            border="1px solid rgba(32, 32, 32, 0.14)"
            borderRadius="999px"
            px="16px"
            py="8px"
            bg="#fff"
          >
            <Text as="p" fontFamily="body" fontSize="1.4rem" color="#202020">
              {item}
            </Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default SiteDetailPage;
