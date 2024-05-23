const months = [
  { pt: "Janeiro", en: "January" },
  { pt: "Fevereiro", en: "February" },
  { pt: "Março", en: "March" },
  { pt: "Abril", en: "April" },
  { pt: "Maio", en: "May" },
  { pt: "Junho", en: "June" },
  { pt: "Julho", en: "July" },
  { pt: "Agosto", en: "August" },
  { pt: "Setembro", en: "September" },
  { pt: "Outubro", en: "October" },
  { pt: "Novembro", en: "November" },
  { pt: "Dezembro", en: "December" },
]


export default function dateFormat(date: Date, locale: string): string {
  locale = locale.slice(0, 2)
  
  const day = +date.getUTCDate()
  const monthIdx = +date.getUTCMonth()
  const month = months[monthIdx][locale]

  return `${month} ${day}`
}