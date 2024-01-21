import { NextPage } from "next";
import { withLayout } from "~/plugins/LayoutSetup";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function getServerSideProps() {
  return { props: withLayout("home") };
}

const ScrollTriggerPage: NextPage = function ScrollTriggerPage() {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef<any>();

  useGSAP(
    (e) => {
      const boxes = gsap.utils.toArray<gsap.DOMTarget>(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="flex justify-center items-center flex-col w-full h-svh bg-green-200">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div
        className="w-full h-svh flex justify-center items-center flex-col gap-4"
        ref={main}
      >
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
      </div>
      <section className="flex-center column w-full h-svh bg-green-200"></section>
    </div>
  );
};

export default ScrollTriggerPage;

// original coded
// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger);

// export default function Scroll() {
//   const main = useRef();

//   useGSAP(
//     () => {
//       const boxes = gsap.utils.toArray('.box');
//       boxes.forEach((box) => {
//         gsap.to(box, {
//           x: 150,
//           scrollTrigger: {
//             trigger: box,
//             start: 'bottom bottom',
//             end: 'top 20%',
//             scrub: true,
//             // markers: true,
//           },
//         });
//       });
//     },
//     { scope: main }
//   );

//   return (
//     <div>
//       <section className="section flex-center column">
//         <h2>Basic ScrollTrigger with React</h2>
//         <p>Scroll down to see the magic happen!!</p>
//       </section>
//       <div className="section flex-center column" ref={main}>
//         <div className="box gradient-blue">box</div>
//         <div className="box gradient-blue">box</div>
//         <div className="box gradient-blue">box</div>
//       </div>
//       <section className="section"></section>
//     </div>
//   );
// }
