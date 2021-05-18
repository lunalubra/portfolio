import React, { useContext, useMemo, useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { IntersectionContext } from './IntersectionObserver';

export const FadeInBox = ({
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  delayOrder
}) => {
  const { inView } = useContext(IntersectionContext);
  const [delay, setDelay] = useState(0.25);

  const offset = 0.4;

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset);
  }, [delayOrder, offset]);

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing
    }),
    [delay, easing]
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      exit="hidden"
      variants={variants}
    >
      {children} {inView}
    </motion.div>
  );
};
