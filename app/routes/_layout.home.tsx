import { Link, useLocation } from "@remix-run/react"
import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

export default () => {
  return (
    <>
      <motion.div
        key={useLocation().pathname}
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 1, y: -30 },
        }}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="relative z-0 h-full w-full md:col-span-3 sm:overflow-auto"
      >
        <section className=" my-auto ml-36 px-8 pt-8">
          <div className=" w-min rounded-lg bg-gray-600 bg-opacity-0 p-6 font-mono text-slate-100 backdrop-blur-[2px]">
            <p className="text-5xl font-normal">BAKO</p>
            <p className="text-7xl font-bold tracking-wide">IBRAHIM</p>
            <p className="text-xl font-normal tracking-widest">
              Developper web et mobile
            </p>
            <div className="mt-10 flex space-x-4">
              <Link to="/about" className="outlined-button">
                A propos de moi
              </Link>
              <Link to="/portfolio" className="outlined-button">
                Mon portfolio
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
