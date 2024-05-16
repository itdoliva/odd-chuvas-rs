import { gsap } from '$lib/gsap';
import { yearMaxRainMT } from "$lib/store/command"


export default function initTimelines() {
  slide100()
  slide300()
  slide500()
  slide600()
  slide700()
  slide800()
  slide900()

  // slide1100()
}

  
function timeline(trigger, nEls) {
  return gsap.timeline({
    scrollTrigger: {
      start: 'top top',
      scrub: 1,
      pin: true,
      trigger, 
      end: `+=${nEls*40}%`, 
    }
  })
}

function slide100() {
  gsap.from("#hl-101", { scale: 1.1, opacity: 0, yPercent: -12, duration: 2, ease: "power2.out" })
  gsap.from("#clouds-102 .cloud-1", { scale: 1.1, opacity: 0, yPercent: 10, xPercent: -60, duration: 5, ease: "power2.out" })
  gsap.from("#clouds-102 .cloud-2", { scale: 1.1, opacity: 0, yPercent: 10, xPercent: -40, duration: 5, ease: "power2.out" })
  gsap.from("#clouds-102 .cloud-3", { scale: 1.1, opacity: 0, yPercent: 10, xPercent: 30, duration: 5, ease: "power2.out" })
  gsap.from("#clouds-102 .cloud-4", { scale: 1.1, opacity: 0, yPercent: 10, xPercent: 24, duration: 5, ease: "power2.out" })
  gsap.from("#clouds-102 .cloud-5", { scale: 1.1, opacity: 0, yPercent: 10, xPercent: 90, duration: 5, ease: "power2.out" })

  const nEls = 4
  const tl = timeline("#ss-100", nEls)
  
  tl.from("#pc-110", { opacity: 0, yPercent: 20 })
  tl.to("#pc-110", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-120", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-120", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-130", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-130", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-140", { opacity: 0, yPercent: 20 }, "<90%")

}


function slide300() {
  const nEls = 9
  const tl = timeline("#ss-300", nEls)

  tl.from("#pc-310", { opacity: 0, yPercent: 20 })
  tl.to("#pc-310", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-320", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-320", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-330", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-330", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-340", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-340", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-350", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-350", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-360", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-360", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-370", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-370", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-380", { opacity: 0, yPercent: 20 }, "<90%")
  tl.to("#pc-380", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-390", { opacity: 0, yPercent: 20 }, "<90%")

}

function slide500() {
  const nEls = 3
  const tl = timeline("#ss-500", nEls)

  tl.from("#ban-511", { opacity: 0, yPercent: 20 })
  tl.from("#ban-512", { opacity: 0, yPercent: 20 })
  tl.from("#ban-513", { opacity: 0, yPercent: 20 })
}

function slide600() {
  const nEls = 3
  const tl = timeline("#ss-600", nEls)

  tl.from("#ban-611", { opacity: 0, yPercent: 20 })
  tl.from("#pc-620 .map svg", { opacity: 0, xPercent: 12, yPercent: 12, scale: 1.12 }, "<")
  tl.to("#pc-620 .map svg", { opacity: 0, scale: .97, xPercent: -4, yPercent: -4 }, ">90%")

  tl.from("#ban-612", { opacity: 0, yPercent: 20 })
  tl.from("#pc-630 .map svg", { opacity: 0, xPercent: 12, yPercent: 12, scale: 1.12 }, "<")
  tl.to("#pc-630 .map svg", { opacity: 0, scale: .97, xPercent: -4, yPercent: -4 }, ">90%")

  tl.from("#ban-613", { opacity: 0, yPercent: 20 })
  tl.from("#pc-640 .map svg", { opacity: 0, xPercent: 12, yPercent: 12, scale: 1.12  }, "<")

}


function slide700() {
  const nEls = 3
  const tl = timeline("#ss-700", nEls)

  tl.from("#ban-711", { opacity: 0, yPercent: 20 })
  tl.from("#ban-712", { opacity: 0, yPercent: 20 })
  tl.from("#ban-713", { opacity: 0, yPercent: 20 })
}

function slide800() {
  const nEls = 5
  const tl = timeline("#ss-800", nEls)

  tl.from("#ban-811", { opacity: 0, yPercent: 20 })
  tl.from("#ban-812", { opacity: 0, yPercent: 20 })
  tl.from("#ban-813", { opacity: 0, yPercent: 20 })
  tl.from("#ban-814", { opacity: 0, yPercent: 20 })
  tl.from("#ban-815", { opacity: 0, yPercent: 20 })
}

function slide900() {
  const nEls = 2
  const tl = timeline("#ss-900", nEls)

  tl.from("#pc-910", { opacity: 0, yPercent: 20 })
  tl.to("#pc-910", { opacity: 0, yPercent: -20 }, ">50%")

  tl.from("#pc-920", { opacity: 0, yPercent: 20 }, "<90%")
}

function slide1100() {
  const nEls = 4
  const tl = timeline("#ss-1100", nEls)

  tl.from("#rdc-1101 .domain", { x1: 0, x2: 0 })


}