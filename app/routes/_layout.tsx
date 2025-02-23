import { Link, Outlet, useLocation } from "@remix-run/react"
import { type LinksFunction } from "@remix-run/node"
import { AnimatePresence, motion } from "framer-motion"

import bg_image from "~/assets/img/bg-img.jpg"
import github from "~/assets/img/github.png"
// import youtube from "~/assets/img/youtube.png"
import x from "~/assets/img/x.png"

export const links: LinksFunction = () => {
  return [{ rel: "preload", href: bg_image, as: "image" }]
}

export default () => {
  const location = useLocation()

  return (
    <>
      <div
        className="h-screen w-screen  bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className=" mx-auto my-auto hidden h-screen w-screen p-8 backdrop-brightness-[0.3] md:block">
          <h1 className="text-lg font-medium text-slate-200">
            Désolé mon site n'est pas encore responsif et c'est pas très joli à
            voir. Donc déso 😅!
          </h1>
          <br />
          <h1 className="text-lg font-medium text-slate-200">
            Mais ne vous inquieter pas je travaille dessus. En attendant je vous
            propose d'aller sur votre PC ou d'activer le mode PC sur votre
            navigateur mobile.
          </h1>
          <br />
          <h1 className="text-lg   font-medium text-slate-200">
            Merci pour l'intérêt que vous me porter et au plaisir de prendre
            contact avec vous 🙏🏾.
          </h1>
        </div>

        <div className="h-screen w-screen backdrop-brightness-[0.3] md:hidden">
          <nav className=" fixed flex h-12 w-full justify-between bg-slate-500 bg-opacity-30 px-20 py-2 text-slate-100">
            <h1 className="text-2xl font-bold">Ibrahim Bako</h1>
            <div className="flex justify-center space-x-4 md:invisible">
              <NavLink
                to="/home"
                label="Accueil"
                active={location.pathname === "/home"}
              />
              <NavLink
                to="/about"
                label="A propos"
                active={location.pathname === "/about"}
              />
              <NavLink
                to="/skills"
                label="Compétences"
                active={location.pathname === "/skills"}
              />
              <NavLink
                to="/portfolio"
                label="Portfolio"
                active={location.pathname === "/portfolio"}
              />
              <NavLink
                to="/contact"
                label="Contact"
                active={location.pathname === "/contact"}
              />
            </div>
          </nav>
          <div className="flex h-full pt-12">
            <section className="flex h-full w-14 flex-col justify-around bg-gray-800 bg-opacity-80 px-2 py-20">
              <Link
                to="https://github.com/ibrahim-bako"
                target="_blank"
                className="mx-auto rounded-lg bg-opacity-20 p-1.5 text-slate-300 transition-all hover:bg-slate-900 "
              >
                <img
                  src={github}
                  className=" h-5 w-5 object-cover"
                  alt="github logo"
                />
              </Link>
              {/* <Link
                to="/home" target="_blank"
                className="mx-auto rounded-lg bg-opacity-20 p-1.5 text-slate-300 transition-all hover:bg-slate-900 "
              >
                <img
                  src={youtube} 
                  className=" h-5 w-5 object-cover"
                  alt="github logo"
                />
              </Link> */}
              <Link
                to="https://twitter.com/Ibrahim17742072"
                target="_blank"
                className="mx-auto rounded-lg bg-opacity-20 p-1.5 text-slate-300 transition-all hover:bg-slate-900 "
              >
                <img
                  src={x}
                  className=" h-5 w-5 object-cover"
                  alt="github logo"
                />
              </Link>
            </section>
            <section className="h-full w-full overflow-auto">
              <AnimatePresence mode="wait">
                <Outlet />
              </AnimatePresence>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

const NavLink = ({
  label,
  to,
  active,
}: {
  label: string
  to: string
  active: boolean
}) => {
  return (
    <>
      <div>
        <Link
          to={to}
          className={`text-base font-semibold hover:text-blue-400 hover:text-opacity-100 
          ${active ? " text-blue-400 text-opacity-100" : ""} `}
          aria-label={label}
        >
          {label}
        </Link>
        <div className="h-0.5 w-full">
          <motion.div
            initial={{ width: active ? "100%" : "0%" }}
            // whileHover={{ width: "100%" }}

            animate={{ width: active ? "100%" : "0%" }}
            className="mx-auto h-full bg-blue-400"
          >
            <div></div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
