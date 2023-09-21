import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "@remix-run/react"

import remix from "~/assets/img/thechnos/remix.png"
import react from "~/assets/img/thechnos/react.png"
import flutter from "~/assets/img/thechnos/flutter.png"
import django from "~/assets/img/thechnos/django.png"
import directus from "~/assets/img/thechnos/directus.png"
import debian from "~/assets/img/thechnos/debian.png"
import archlinux from "~/assets/img/thechnos/archlinux.svg"

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
        className=" relative z-0 h-full w-full md:col-span-3 sm:overflow-auto"
      >
        <div className="flex divide-x divide-slate-600 divide-opacity-90 px-12 py-5 text-slate-100">
          <div></div>
          <section className="mx-auto space-y-10 px-10">
            <div>
              <h1 className="font-mono text-2xl font-semibold underline  ">
                THECHNOLOGIES
              </h1>
              <div className="mt-6 space-y-3">
                <SkillLevel img={remix} name="Remix Run" level={60} />
                <SkillLevel img={react} name="ReactJs" level={60} />
                <SkillLevel img={flutter} name="Flutter" level={70} />
                <SkillLevel img={django} name="Django" level={50} />
                <SkillLevel img={directus} name="Directus" level={80} />
                <SkillLevel
                  img={
                    "https://nodejs.dev/static/images/brand/hexagon/js-green.svg"
                  }
                  name="NodeJs"
                  level={80}
                />
                <SkillLevel img={debian} name="Debian" level={80} />
                <SkillLevel img={archlinux} name="ArchLinux" level={80} />
              </div>
            </div>
            <div>
              <h1 className="font-mono text-2xl font-semibold underline ">
                LANGUE
              </h1>
              <div className="mt-6 space-y-2">
                <SkillLevel name="Francais" level={95} />
                <SkillLevel name="Anglais" level={30} />
              </div>
            </div>
          </section>
          <section className="mx-auto space-y-10 px-10">
            <div>
              <h1 className="font-mono text-2xl font-semibold  underline ">
                EDUCATION
              </h1>
              <div className="mt-6 space-y-2">
                <EducationTile
                  certifivation="Licence 2 Génie Logiciel"
                  date="2021 - en cours"
                  school="Univercité Virtuelle du Burkina Faso "
                />
                <EducationTile
                  certifivation="Brevet d'Etude du Premier Cycle (BEPC)"
                  date="2014 - 2017"
                  school="Lycée privée CEFISE Benaja"
                />
                <EducationTile
                  certifivation="Baccaloreat Scientifique (BAC D)"
                  date="2018 - 2021"
                  school="Lycée privée CEFISE Benaja"
                />
              </div>
            </div>
            <div>
              <h1 className="font-mono text-2xl font-semibold  underline ">
                EXPERIENCE
              </h1>
              <div className="mt-6 space-y-2">
                <ExperiancesStepps />
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  )
}

const EducationTile = ({
  certifivation,
  date,
  school,
}: {
  certifivation: string
  date: string
  school: string
}) => {
  return (
    <>
      <div className="flex">
        <h2 className="w-32 text-base font-medium">{date}</h2>
        <div>
          <h3 className="text-base font-medium">{certifivation}</h3>
          <p className="text-xs">{school}</p>
        </div>
      </div>
    </>
  )
}

const ExperiancesStepps = () => {
  return (
    <>
      <ol className="relative border-l border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center  justify-center rounded-full bg-gray-600 ring-2 ring-gray-800">
            <svg
              className="h-3 w-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <h3 className="text-base font-semibold leading-tight">
            Pas d'expérience en entreprise
          </h3>
          <p className="pl-3 text-xs">
            Je suis actuellement à la recherche d'un stage et je suis ouvert a
            toute proposition.
            <br />
            Contacter moi si vous avez des questions ?
          </p>
        </li>
      </ol>
    </>
  )
}

const SkillLevel = ({
  img,
  name,
  level,
}: {
  img?: string
  name: string
  level: number
}) => {
  const [_level, _setLevel] = useState(0)

  useEffect(() => {
    _setLevel(level)
  }, [])

  return (
    <>
      <div className="my-auto flex space-x-6">
        <div className="flex space-x-2">
          {img && (
            <img
              src={img}
              alt="remix logo"
              className="my-auto h-6 w-6 object-contain"
            />
          )}
          <p className="my-auto w-20 text-base font-semibold">{name}</p>
        </div>
        <div className="my-auto h-2 w-40 rounded-lg bg-gray-800 bg-opacity-60">
          <div
            className="h-full rounded-lg bg-slate-500 bg-opacity-80 transition-all delay-300 duration-1000 ease-out "
            style={{ width: `${_level}%` }}
          ></div>
        </div>
      </div>
    </>
  )
}
