import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useScrollPosition } from "~/utils/helpers";

export const LayoutHeader = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  // Sticky Scroll Shadow
  const scrollPosition = useScrollPosition();
  console.log("scrollPosition is", scrollPosition);

  return (
    <>
      <Box
        bg="brand.primary"
        className={`h-20 transition-shadow border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full ${
          scrollPosition > 0
            ? "fixed top-0 start-0 shadow-lg z-20"
            : "shadow-none"
        }`}
      >
        Hello
      </Box>
    </>
  );
};
