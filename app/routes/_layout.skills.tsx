import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "@remix-run/react"

import remix from "~/assets/img/thechnos/remix.png"
import react from "~/assets/img/thechnos/react.png"
import flutter from "~/assets/img/thechnos/flutter.png"
import gcp from "~/assets/img/thechnos/gcp.png"
import docker from "~/assets/img/thechnos/docker.png"
import firebase from "~/assets/img/thechnos/firebase.png"
import linux from "~/assets/img/thechnos/linux.png"
import nodejs from "~/assets/img/thechnos/nodejs.png"
import directus from "~/assets/img/thechnos/directus.png"

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
          <section className="mx-auto w-6/12 space-y-10 px-10">
            <div>
              <h1 className="font-mono text-2xl font-semibold underline  ">
                THECHNOLOGIES
              </h1>
              <div className="mt-6 space-y-3">
                <SkillLevel img={flutter} name="Flutter" level={75} />
                <SkillLevel img={react} name="ReactJs" level={75} />
                <SkillLevel img={nodejs} name="NodeJs" level={80} />
                <SkillLevel img={remix} name="Remix Run" level={60} />
                <SkillLevel
                  img={gcp}
                  name="Google Cloud Plateform"
                  level={60}
                />
                <SkillLevel img={docker} name="Docker" level={80} />
                <SkillLevel img={firebase} name="Firebase" level={50} />
                <SkillLevel img={directus} name="Directus" level={80} />
                <SkillLevel
                  img={linux}
                  name="Linux (Debian, ArchLinux)"
                  level={80}
                />
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
          <section className="mx-auto w-6/12 space-y-10 px-10">
            <div>
              <h1 className="font-mono text-2xl font-semibold  underline ">
                EXPERIENCE
              </h1>
              <div className="mt-6 space-y-2">
                <Contrat1Kreezus />
                <StageKreezus />
              </div>
            </div>
            <div>
              <h1 className="font-mono text-2xl font-semibold  underline ">
                EDUCATION
              </h1>
              <div className="mt-6 space-y-2">
                <EducationTile
                  certifivation="Licence 3 Génie Logiciel"
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

const StageKreezus = () => {
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
          <div className="mb-2">
            <h3 className="text-md font-semibold leading-tight">
              Stage de 6 mois chez Kreezus
            </h3>
            <div className="flex space-x-2">
              <p className="text-sm">Novembre 2023 - Avril 2024</p>
              <p className="text-sm">Ouagadougou, Burkina Faso</p>
            </div>
          </div>
          <p className="pl-3 text-sm">
            <p>
              A kreezus j'ai eu l'occasion de faire un stage de 6 mois en tant
              que développeur fullstack.
            </p>
            <p>
              Ce stage m'a permis de travailler sur des projets concrets et de
              mettre en pratique mes compétences.
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>Développement et maintenance d’applications web</li>
              <li>Amélioration continue et refactoring de code</li>
              <li>
                Integration continue des requête de fonctionalité demander par
                le client
              </li>
            </ul>
          </p>
        </li>
      </ol>
    </>
  )
}

const Contrat1Kreezus = () => {
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
          <div className="mb-2">
            <h3 className="text-md font-semibold leading-tight">
              Contrat de 1 an chez Kreezus
            </h3>
            <div className="flex space-x-2">
              <p className="text-sm">Juin 2024 - Aujourd'hui</p>
              <p className="text-sm">Ouagadougou, Burkina Faso</p>
            </div>
          </div>
          <p className="pl-3 text-sm">
            <p>
              Actuellement en contrat chez Kreezus, je suis en charge de
              l'implémentation de nouvelles fonctionnalités et de la maintenance
              des applications web.
            </p>
            <ul className="list-inside list-disc pl-5">
              <li>
                Mise en place d'API web en collaboration avec l'équipe backend.
              </li>
              <li>
                Conception et mise en place des fonctionnalités pour les
                applications mobiles.
              </li>
              <li>
                Collaboration avec d'autres développeurs afin d'établir des
                spécifications à suivre.
              </li>
              <li>
                Améloration du systeme d’information en automatisant les actions
                manuelles et récurente
              </li>
              <li>
                Administration et maintenance des serveurs de production et de
                développement
              </li>
            </ul>
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
          <p className="my-auto w-56 text-base font-semibold">{name}</p>
        </div>
        <div className="my-auto h-2 w-52 rounded-lg bg-gray-200">
          <div
            className="h-full rounded-lg bg-blue-600 bg-opacity-80 transition-all delay-300 duration-1000 ease-out "
            style={{ width: `${_level}%` }}
          ></div>
        </div>
      </div>
    </>
  )
}
