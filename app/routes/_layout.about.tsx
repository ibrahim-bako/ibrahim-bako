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
        <section className="w-2/3 space-y-10 px-40 pt-12 text-slate-100">
          <div>
            <h1 className="font-mono text-5xl font-semibold">A PROPOS</h1>
            <p className="text-sm leading-5">ibrahimbako@proton.me</p>
          </div>

          <p>
            Je m'appelle Bako Ibrahim, et je suis passionné par l'informatique,
            plus précisément par le développement web et mobile. Je possède des
            compétences solides dans des technologies telles que Flutter,
            ReactJS, Node.js, et je suis à l'aise avec les systèmes
            d'exploitation Linux, notamment Debian et Arch Linux. Mon parcours
            académique m'a conduit à étudier le Génie Logiciel, où je suis
            actuellement en deuxième année. J'aspire à devenir ingénieur en
            génie logiciel et à contribuer au développement de systèmes
            informatiques innovants qui auront un impact positif sur le monde.
            En dehors de ma passion pour l'informatique, j'aime jouer aux jeux
            vidéo, pratiquer le basket-ball et m'intéresser à la sécurité
            informatique. Je suis un fervent défenseur de la transparence, du
            partage des connaissances et des ressources, de l'innovation et de
            l'open source.
          </p>
        </section>
      </motion.div>
    </>
  )
}
