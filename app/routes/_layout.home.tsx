import { Link, useLocation } from "@remix-run/react"
import { motion } from "framer-motion"

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
          <div className="w-[800px] rounded-lg bg-gray-600 bg-opacity-0 p-6 font-mono text-slate-200 backdrop-blur-[2px]">
            <p className="text-5xl font-normal">BAKO</p>
            <p className="text-7xl font-bold tracking-wide">IBRAHIM</p>
            <p className="text-xl font-normal tracking-widest">
              Developper Full Stack
            </p>
            <div className="mx-auto py-4">
              <p className="mb-4 text-base font-medium">
                <span className="font-semibold">
                  Développeur full-stack passionné par l'innovation
                </span>
                , j'ai travaillé avec des technologies variées telles que{" "}
                <span className="font-medium text-blue-600">ReactJS</span>,{" "}
                <span className="font-medium text-blue-600">Node.js</span>,{" "}
                <span className="font-medium text-blue-600">Typescript</span> et{" "}
                <span className="font-medium text-blue-600">Python</span> pour
                concevoir des solutions logicielles robustes.
              </p>

              <p className="mb-4 text-base">
                Mon expérience en entreprise m’a permis de toucher à{" "}
                <span className="font-medium">
                  de nombreux aspects du développement
                </span>{" "}
                :
              </p>
              <ul className="mb-4 list-inside list-disc pl-5">
                <li>
                  <span className="font-medium">Cloud computing</span> (GCP)
                </li>
                <li>
                  <span className="font-medium">Administration système</span>
                </li>
                <li>
                  <span className="font-medium">
                    Conception d’architectures scalables
                  </span>
                </li>
              </ul>
              <p className="text-base">
                <span className="font-semibold">Actuellement</span>, je continue
                à explorer de nouvelles technologies pour créer des applications
                qui font la différence.
              </p>
            </div>
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
