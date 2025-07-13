'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { WiDayCloudy } from "react-icons/wi";
import { useEffect, useState } from 'react'

export default function Opening() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000) // 2 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-base-100 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="flex items-center text-4xl font-bold text-white"
          >
            Weather App
            <WiDayCloudy className='size-16'/>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
