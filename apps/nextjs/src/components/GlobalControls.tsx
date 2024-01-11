"use client"

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const GlobalControls = () => {
  const constraintsRef = useRef(null);
  const [yPos, setYPos] = useState(0)

  return (
    <motion.div ref={constraintsRef} className='absolute w-[calc(100vw-10px)] h-[calc(100vh-120px)] top-[100px] left-0 bottom-0 -z-50'>
      <motion.div
        drag='y'
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragTransition={{
          power: 0,
          timeConstant: 250
        }}
        dragElastic={0.1}
        whileDrag={{scale: 1.2}}
        className="h-12 w-12 rounded-full bg-slate-50 cursor-grab"
      />
    </motion.div>
  )
}
