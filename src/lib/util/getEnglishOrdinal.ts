const ordinals = {
  1: "st" ,
  2: "nd",
  3: "rd",
}

export default function getEnglishOrdinal(number: number): string {
  return number > 3 ? "th" : ordinals[number]
}