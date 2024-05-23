import "$lib/gsap"
import "$lib/i18n"
import "$lib/scss/global.scss"
import { csvParse } from "d3"

export async function load({ fetch }) {
  const overall = await fetch('/data/overall_data.json')
    .then(d => d.json())

  const yearsMaxMT = await fetch('/data/year_max_moving_total.csv')
    .then(d => d.text())
    .then(d => csvParse(d, row => ({
      year: +row.year,
      maxMT: +row.max_moving_total_mm
    })))

  const tragedyMT = await fetch('/data/precipitation_data_2024.csv')
    .then(d => d.text())
    .then(d => csvParse(d, row => ({
      date: new Date(row.date),
      maxMT: +row.mm_moving_total
    })))


  return {
    ...overall,
    yearsMaxMT,
    tragedyMT
  }

}  