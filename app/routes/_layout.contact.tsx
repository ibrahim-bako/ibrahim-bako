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
        className="relative z-0 h-full w-full md:col-span-3 sm:overflow-auto"
      >
        <div className="flex divide-x divide-slate-700 px-20 pt-12 text-slate-100">
          <section className=" flex w-1/2 flex-col space-y-8 px-10">
            <h1 className="text-center font-mono text-5xl font-semibold">
              MES CONTACT
            </h1>

            {/* <p className="text-center text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              excepturi modi. Incidunt non quas corporis hic cupiditate aperiam
              laboriosam iste quia, adipisci soluta unde, perspiciatis nemo amet
              nesciunt illo nihil.
            </p> */}

            <div className="mx-auto">
              <h2 className="text-center text-xl font-semibold">Email</h2>
              <Link
                to="mailto:ibrahimbako@proton.me"
                target="_blank"
                className="link text-center"
              >
                ibrahimbako@proton.me
              </Link>
            </div>

            <div className="mx-auto">
              <h2 className="text-center text-xl font-medium">Téléphone</h2>
              <Link
                to="tel:+22654377601"
                target="_blank"
                className="link text-center"
              >
                +226 54 37 76 01
              </Link>
            </div>

            {/* <div className="mx-auto">
              <h2 className="text-center text-lg font-medium">Localisation</h2>
              <Link to="" className="text-center">
                Burkina Faso / Ouagadougou / Pissy
              </Link>
            </div> */}
          </section>

          <section className="justify-space flex w-1/2 flex-col px-10">
            <h1 className="text-center font-mono text-5xl font-semibold">
              CONTACTER MOI
            </h1>
            <form action="" className="flex flex-col space-y-3">
              <InputText name="first_name" label="Nom" placeholder="nom" />
              <InputText name="last_name" label="Prénom" placeholder="prénom" />
              <InputText name="email" label="Email" placeholder="email" />
              <TextArea name="message" label="Message" placeholder="message" />
              <div className="mt-2">
                <input
                  type="submit"
                  className="outlined-button"
                  value="Envoyer"
                />
              </div>
            </form>
          </section>
        </div>
      </motion.div>
    </>
  )
}

const InputText = ({
  name,
  label,
  placeholder,
}: {
  name: string
  label: string
  placeholder?: string
}) => {
  return (
    <>
      <div>
        <label htmlFor={name} className="mb-1 block text-sm font-medium ">
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          id={name}
          className="rounded border border-gray-500 bg-slate-700 bg-opacity-80 px-3 py-1.5 shadow-sm outline-2 outline-slate-600 ring-slate-600 transition-all focus:bg-opacity-95 focus:outline focus:ring-2"
        />
      </div>
    </>
  )
}

const TextArea = ({
  name,
  label,
  placeholder,
  cols,
  rows,
}: {
  name: string
  label: string
  placeholder?: string
  cols?: number
  rows?: number
}) => {
  return (
    <>
      <div>
        <label htmlFor={name} className="mb-1 block text-sm font-medium ">
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          rows={rows ?? 5}
          cols={cols ?? 40}
          name={name}
          id={name}
          className="rounded border border-gray-500 bg-slate-700 bg-opacity-80 px-3 py-1.5 shadow-sm outline-2 outline-slate-600 ring-slate-600 transition-all focus:bg-opacity-95 focus:outline focus:ring-2"
        ></textarea>
      </div>
    </>
  )
}
