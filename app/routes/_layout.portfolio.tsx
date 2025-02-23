import { Link, useLocation } from "@remix-run/react"
import { motion } from "framer-motion"

import ibrahim_bako_web_site from "~/assets/img/ibrahim-bako-web-site.png"
import yenga from "~/assets/img/yenga.png"
import ikoddi from "~/assets/img/ikoddi.png"
import yengapay from "~/assets/img/yengapay.png"
import sankmoney from "~/assets/img/sankmoney.png"

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
              name="Yenga"
              imageUrl={yenga}
              description="Ce projet est une application de recharge de credit mobile sur laquelle j'ai travaillé en tant que développeur full-stack. Ce projet m'a beacoup appris su l'importance de la mise en production et de la gestion de projet."
              link="https://yenga.app/"
            />
            <ProjectCard
              name="Ikoddi"
              imageUrl={ikoddi}
              description="Ce projet est un SAAS de SMS. Il permet au developpeur d'application de pouvoir envoyer des SMS à leur utilisateur. J'ai travaillé sur ce projet en tant que développeur full-stack."
              link="https://ikoddi.com/"
            />
            <ProjectCard
              name="Yenga Pay"
              imageUrl={yengapay}
              description="Yenga Pay est un agregateur de paiement mobile. J'ai travaillé sur ce projet en tant que développeur full-stack. Ce application permet au developpeur d'application de pouvoir intégrer des moyens de paiement mobile dans leur application."
              link="https://yengapay.com/"
            />
            <ProjectCard
              name="Sank Money"
              imageUrl={sankmoney}
              description="Sank Money est un mobile money propulser par Sank Finance et developper par Kreezus. J'ai travaillé sur ce projet en tant que développeur full-stack. Ce projet m'a permis de travailler avec des technologies de pointe."
              link="https://sankmoney.com/"
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
        className=" group/card m-3 h-64 w-96 bg-slate-700 bg-cover text-white transition-all duration-300"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className=" invisible flex h-full w-full translate-y-20 flex-col justify-start space-y-4 overflow-hidden p-4 opacity-0 backdrop-brightness-[0.2] transition-all duration-500 group-hover/card:visible group-hover/card:translate-y-0 group-hover/card:opacity-100 ">
          <h2 className="text-md font-semibold">{name}</h2>
          <p className="text-base">{description}</p>
          <Link
            to={link}
            target="_blank"
            className="outline-button flex self-end px-2 py-0 text-lg font-semibold underline"
          >
            voir
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-auto h-4 w-4"
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
