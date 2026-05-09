import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, Redirect, useParams } from "react-router-dom";
import { Box, Container, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import {
  ArrowLeft,
  BarChart3,
  BadgeDollarSign,
  Bot,
  CalendarClock,
  CheckCircle2,
  Database,
  GitBranch,
  Layers,
  ListChecks,
  Maximize2,
  NotebookText,
  ShieldCheck,
  Sparkles,
  Trophy,
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
  <Flex alignItems="center" gap="6px" aria-label="GolRacu">
    <Box
      as="svg"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      w="18px"
      h="16px"
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
    <Text as="span" fontFamily="heading" fontSize="1.7rem" fontWeight="900" lineHeight="1">
      <Box as="span" color="#e00000">
        GOL
      </Box>
      <Box as="span" color="#161616">
        RACU
      </Box>
    </Text>
  </Flex>
);

const ChapterNavigation = ({ chapters }) => (
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
    p="8px"
    boxShadow="0 20px 70px rgba(224, 0, 0, 0.14), 0 18px 60px rgba(32, 32, 32, 0.12)"
    backdropFilter="blur(16px)"
    maxW="calc(100vw - 24px)"
    w="fit-content"
  >
    <Flex
      gap="6px"
      alignItems="center"
      justifyContent="center"
      overflowX="auto"
    >
      <Flex
        display={["none", "inline-flex"]}
        alignItems="center"
        gap="8px"
        px="12px"
        minH="42px"
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
            minH="42px"
            border="1px solid rgba(224, 0, 0, 0.14)"
            borderRadius="999px"
            px={["12px", "14px"]}
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
            <GolRacuLogoLockup />
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

      <ChapterNavigation chapters={chapters} />
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

const SiteDetailPage = () => {
  const { siteSlug } = useParams();
  const site = getAgentSiteBySlug(siteSlug);

  if (!site) {
    return <Redirect to="/"></Redirect>;
  }

  if (site.slug === "golracu") {
    return <GolRacuCaseStudy site={site}></GolRacuCaseStudy>;
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
