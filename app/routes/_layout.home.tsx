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
        className="w-full h-full md:col-span-3 sm:overflow-auto relative z-0"
      >
        <section className=" px-8 pt-8 my-auto ml-36">
          <div className=" backdrop-blur-[2px] bg-gray-600 bg-opacity-0 w-min rounded-lg p-6 font-mono text-slate-100">
            <p className="text-5xl font-normal">BAKO</p>
            <p className="text-7xl font-bold tracking-wide">IBRAHIM</p>
            <p className="text-xl font-normal tracking-widest">
              Developper web et mobile
            </p>
            <div className="flex space-x-4 mt-10">
              <Link
                to="/about"
                className="w-max px-4 py-1 border border-white bg-slate-900 hover:bg-opacity-50 bg-opacity-20 transition-colors text-lg font-medium  rounded-xl "
              >
                A propos de moi
              </Link>
              <Link
                to="/portfolio"
                className="w-max px-4 py-1 border border-white bg-slate-900 hover:bg-opacity-50 bg-opacity-20 transition-colors text-lg font-medium  rounded-xl "
              >
                Mon portfolio
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
