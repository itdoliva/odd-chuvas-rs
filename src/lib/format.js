// Libraries
import * as d3 from "d3";

const enFL = d3.formatLocale({ thousands: ",", decimal: ".", grouping: [3] })
const ptFL = d3.formatLocale({ thousands: ".", decimal: ",", grouping: [3] })

export default function format(locale, specifier, value) {
  const fl = locale.slice(0, 2) === "pt" 
    ? ptFL 
    : enFL

  const formatFunc = fl.format(specifier)
  return formatFunc(value)
}
