import { useLocation } from "@remix-run/react"
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
        <section className="w-2/3 space-y-10 px-40 py-12 text-slate-100">
          <div>
            <h1 className="font-mono text-5xl font-semibold">A PROPOS</h1>
            <p className="text-sm leading-5">ibrahimbako@proton.me</p>
          </div>

          <p className="mb-4 text-base">
            Je suis{" "}
            <span className="font-semibold text-blue-600">Bako Ibrahim</span>,
            un{" "}
            <span className="font-semibold">
              développeur full-stack passionné
            </span>{" "}
            par l'innovation technologique. Depuis plusieurs années, je
            développe des applications web et mobile en utilisant des
            technologies modernes telles que{" "}
            <span className="font-semibold text-blue-600">ReactJS</span>,{" "}
            <span className="font-semibold text-blue-600">Node.js</span>,{" "}
            <span className="font-semibold text-blue-600">Typescript</span> et{" "}
            <span className="font-semibold text-blue-600">Python</span>. Mon
            objectif est de concevoir des solutions robustes qui apportent une
            réelle valeur ajoutée à mes utilisateurs.
          </p>

          <p className="mb-4 text-base">
            Au cours de mon expérience professionnelle, j'ai eu l'opportunité de
            travailler dans différents domaines du développement logiciel, me
            permettant ainsi de développer une expertise complète en tant que
            développeur :
          </p>

          <ul className="mb-6 list-inside list-disc pl-5">
            <li>
              <span className="font-semibold">Développement full-stack</span>{" "}
              avec une forte expérience en frontend (ReactJS) et backend
              (Node.js, NestJS)
            </li>
            <li>
              <span className="font-semibold">Cloud computing</span> (GCP), où
              j'ai contribué à la mise en place d'architectures scalables et
              résilientes
            </li>
            <li>
              <span className="font-semibold">Administration système</span>,
              avec une expérience dans la gestion de serveurs et
              d'environnements cloud
            </li>
            <li>
              <span className="font-semibold">Création d'API performantes</span>{" "}
              et intégration continue pour assurer une livraison rapide et
              fiable des applications
            </li>
          </ul>

          <p className="mb-4 text-base">
            Mon parcours académique en{" "}
            <span className="font-semibold">Génie Logiciel</span> a renforcé ma
            passion pour les technologies et m’a permis de développer une
            approche rigoureuse des projets de développement. J’ai acquis une
            solide formation théorique que je mets en pratique au quotidien dans
            mes projets professionnels.
          </p>

          <p className="mb-4 text-base">
            Toujours en quête de nouveaux défis, je continue à me perfectionner
            et à explorer les dernières innovations dans le monde de la
            technologie. À travers mes projets, je cherche à créer des solutions
            qui allient performance, sécurité et convivialité.
          </p>
        </section>
      </motion.div>
    </>
  )
}
