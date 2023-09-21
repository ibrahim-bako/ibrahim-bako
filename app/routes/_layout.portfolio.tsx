import { Link, useLocation } from "@remix-run/react"
import { motion } from "framer-motion"

export default () => {
  return (
    <>
      <motion.div
        key={useLocation().pathname}
        variants={{
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 1, y: -10 },
        }}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="mx-auto px-20 pt-10 text-slate-100">
          {/* <h1 className="text-center font-mono text-5xl font-semibold">
            PORTFOLIO
          </h1> */}

          <section className=" flex flex-wrap justify-evenly ">
            <ProjectCard
              name="Apple web site"
              imageUrl="https://www.versionmuseum.com/images/websites/apple-website/apple-website%5E2017%5Ehomepage.png"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus sit laboriosam neque? Minima veniam quos vitae nemo non iure"
              link="https://www.apple.com"
            />
            <ProjectCard
              name="Apple web site"
              imageUrl="https://www.versionmuseum.com/images/websites/apple-website/apple-website%5E2017%5Ehomepage.png"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus sit laboriosam neque? Minima veniam quos vitae nemo non iure"
              link="https://www.apple.com"
            />
          </section>
        </div>
      </motion.div>
    </>
  )
}

const ProjectCard = ({
  name,
  imageUrl,
  description,
  link,
}: {
  name: string
  imageUrl: string
  description: string
  link: string
}) => {
  return (
    <>
      <div
        className=" group/card m-3 h-52 w-52 bg-slate-700 bg-cover text-white transition-all duration-300"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className=" invisible flex h-full w-full translate-y-20 flex-col justify-evenly overflow-hidden p-4 opacity-0 backdrop-brightness-[0.2] transition-all duration-500 group-hover/card:visible group-hover/card:translate-y-0 group-hover/card:opacity-100 ">
          <h2 className="text-sm font-semibold">{name}</h2>
          <p className="text-xs">{description}</p>
          <Link
            to={link}
            target="_blank"
            className="outline-button flex self-end px-2 py-0 text-sm font-semibold"
          >
            voir
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-auto h-3 w-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
