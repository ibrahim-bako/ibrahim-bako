import { createCookie } from "@remix-run/node"

export const useBgImagePrefs = createCookie("bg-image-prefs", {
  maxAge: 86_400, // one day
})
