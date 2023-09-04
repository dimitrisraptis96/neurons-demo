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
        <TeadsAdRenderer uid="outstream_1" />
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
          <TeadsAdRenderer uid="outstream_2" />
        </Box>
      </Box>
    </VStack>
  );
}

function TeadsAdRenderer({ uid }) {
  return (
    <>
      <Box id={uid} w="100%" h="100%">
        <Script
          type="text/javascript"
          class="teads"
          async="true"
          src="https://a.teads.tv/page/186485/tag"
        />
      </Box>
    </>
  );
}
