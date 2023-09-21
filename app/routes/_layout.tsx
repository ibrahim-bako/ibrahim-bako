import { useEffect, useState } from "react"
import { Link, Outlet, useLoaderData, useLocation } from "@remix-run/react"

import {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node"
import { AnimatePresence, motion } from "framer-motion"

import image1 from "~/assets/img/img1.jpg"
import image2 from "~/assets/img/img2.jpg"
import image3 from "~/assets/img/img3.jpg"
import image4 from "~/assets/img/img4.jpg"

import github from "~/assets/img/github.png"
import youtube from "~/assets/img/youtube.png"
import x from "~/assets/img/x.png"

import { useBgImagePrefs } from "~/cookies.server"

export const loader: LoaderFunction = async ({
  request,
  context,
  params,
}: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie")
  const cookie = (await useBgImagePrefs.parse(cookieHeader)) || {}

  if (!cookie.nbImage) {
    cookie.nbImage = Math.floor(Math.random() * (5 - 1)) + 1

    return redirect(request.url, {
      headers: { "Set-Cookie": await useBgImagePrefs.serialize(cookie) },
    })
  }

  return json({ nbImage: cookie.nbImage })
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: image1,
      as: "image",
    },
    {
      rel: "preload",
      href: image2,
      as: "image",
    },
    {
      rel: "preload",
      href: image3,
      as: "image",
    },
    {
      rel: "preload",
      href: image4,
      as: "image",
    },
  ]
}

export default () => {
  const location = useLocation()

  const { nbImage } = useLoaderData<typeof loader>()

  const [img, setImg] = useState<String | null>(null)

  useEffect(() => {
    switch (nbImage) {
      case 1:
        setImg(image1)
        break
      case 2:
        setImg(image2)
        break
      case 3:
        setImg(image3)
        break
      case 4:
        setImg(image4)
        break

      default:
        setImg(null)
        break
    }
  }, [])

  return (
    <>
      <div
        className="h-screen w-screen  bg-cover bg-bottom"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="h-screen w-screen backdrop-brightness-[0.3]">
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
            <section className="flex h-full w-14 flex-col justify-around bg-black bg-opacity-80 px-2 py-20">
              <Link
                to="https://github.com/ibrahimbako"
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
            <section className="h-full w-full">
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
