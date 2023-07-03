import React from "react";
import Script from "next/script";
import { Box, Image, VStack } from "@chakra-ui/react";

const IN_PAGE_BANNER_ID = "in-page-banner";
const TOP_BANNER_ID = "top-banner";

export default function Bloomberg({}) {
  return (
    <VStack w="100%" spacing="0">
      <Box
        id={TOP_BANNER_ID}
        w="100%"
        sx={{ aspectRatio: 970 / 250 + "" }}
        bg="red.500"
      >
        <TopBannerTag />
      </Box>

      <Box w="100%" position="relative">
        <Image src="/bloomberg.webp" w="100%" draggable={false} />
        <Box
          data-re-aoi-name={IN_PAGE_BANNER_ID}
          position="absolute"
          width="20%"
          top="13%"
          left="71.5%"
          sx={{ aspectRatio: 300 / 600 + "" }}
          bg="blue.500"
          zIndex={99}
        >
          <InPageBannerTag />
        </Box>
      </Box>
    </VStack>
  );
}

function TopBannerTag() {
  return (
    <>
      <Script id="in-page-setup">
        {`e9 = new Object(); e9.size="970x250";`}
      </Script>

      <Script
        id="top-banner-tag"
        strategy="afterInteractive"
        src="https://tags.expo9.exponential.com/tags/study/Neurons_970/tags.js"
        onLoad={(e) => {
          console.log("afterInteractive 970x250 onLoad()", e);
        }}
      ></Script>
    </>
  );
}

function InPageBannerTag() {
  return (
    <>
      <Script id="in-page-setup">
        {`e9 = new Object(); e9.size = "300x600";`}
      </Script>

      <Script
        id="in-page-tag"
        strategy="afterInteractive"
        src="https://tags.expo9.exponential.com/tags/study/Neurons_HPA/tags.js"
        onLoad={(e) => {
          console.log("afterInteractive 300x600 onLoad()", e);
        }}
      ></Script>
    </>
  );
}
