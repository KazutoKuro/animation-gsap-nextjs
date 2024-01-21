import { NextPage } from "next";
import React, { MutableRefObject, useRef, useState } from "react";
import { withLayout } from "~/plugins/LayoutSetup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, Button, Flex } from "@chakra-ui/react";

export function getServerSideProps() {
  return { props: withLayout("home") };
}

const AnimationPage: NextPage = function AnimationPage() {
  const container = useRef<any>();
  const tl = useRef<any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed()!);
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<EventTarget>(".box");
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <Button onClick={toggleTimeline} colorScheme="teal" size="md">
            Toggle Timeline
          </Button>
        </div>
        <Flex w="100%" flexDirection="column" align="center">
          <Box
            bg="tomato"
            p={4}
            w="100px"
            h="100px"
            color="white"
            className="box"
          >
            Box 1
          </Box>
          <Box
            bg="tomato"
            p={4}
            w="100px"
            h="100px"
            color="white"
            className="box"
          >
            Box 2
          </Box>
          <Box
            bg="tomato"
            p={4}
            w="100px"
            h="100px"
            color="white"
            className="box"
          >
            Box 3
          </Box>
        </Flex>
      </section>
    </main>
  );
};

export default AnimationPage;

// Original code based

// import React from 'react';
// import { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// export default function Boxes() {
//   const container = useRef();
//   const tl = useRef();

//   const toggleTimeline = () => {
//     tl.current.reversed(!tl.current.reversed());
//   };

//   useGSAP(
//     () => {
//       const boxes = gsap.utils.toArray('.box');
//       tl.current = gsap
//         .timeline()
//         .to(boxes[0], { x: 120, rotation: 360 })
//         .to(boxes[1], { x: -120, rotation: -360 }, '<')
//         .to(boxes[2], { y: -166 })
//         .reverse();
//     },
//     { scope: container }
//   );

//   return (
//     <main>
//       <section className="boxes-container" ref={container}>
//         <h2>Use the button to toggle a Timeline</h2>
//         <div>
//           <button onClick={toggleTimeline}>Toggle Timeline</button>
//         </div>
//         <div className="box gradient-blue">Box 1</div>
//         <div className="box gradient-blue">Box 2</div>
//         <div className="box gradient-blue">Box 3</div>
//       </section>
//     </main>
//   );
// }
