import "$lib/gsap"
import "$lib/i18n"
import "$lib/scss/global.scss"

export async function load({ fetch }) {
  const data = await fetch('/data.json')
    .then(d => d.json())

  return {
    ...data
  }

}  