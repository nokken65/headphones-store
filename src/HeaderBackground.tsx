import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export const HeaderBackground = () => {
  const { scrollY } = useScroll();
  const [pos, setPos] = useState(60);

  useMotionValueEvent(scrollY, "change", (latest) =>
    latest >= 0 && latest <= 76 ? setPos(60 - latest + 15) : setPos(0)
  );
  return <Background pos={pos} />;
  //   return <Background style={{ "--pos": pos + "px" } as React.CSSProperties} />;
};

const Background = styled.div<{ pos: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(p) => p.pos}px);
  /* transform: translateY(var(--pos)); */
  z-index: -1;
  background: linear-gradient(75deg, #ff9292 -7.33%, #de5150 90.21%);
`;
