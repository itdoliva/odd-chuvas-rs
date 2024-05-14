import { gsap } from '$lib/gsap';

export default function initTimelines() {
  slide100()
  slide300()
  slide500()
  slide600()
  slide700()
  slide800()
  slide900()
}

  
function timeline(trigger, nEls) {
  return gsap.timeline({
    scrollTrigger: {
      start: 'top top',
      scrub: 1,
      pin: true,
      trigger, 
      end: `+=${nEls*100}%`, 
    }
  })
}

function slide100() {
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
  tl.from("#pc-620", { opacity: 0, scale: 1.12 }, "<")
  tl.to("#pc-620", { opacity: 0 }, ">90%")

  tl.from("#ban-612", { opacity: 0, yPercent: 20 })
  tl.from("#pc-630", { opacity: 0, scale: 1.12 }, "<")
  tl.to("#pc-630", { opacity: 0 }, ">90%")

  tl.from("#ban-613", { opacity: 0, yPercent: 20 })
  tl.from("#pc-640", { opacity: 0, scale: 1.12 }, "<")

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