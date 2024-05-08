import Lenis from 'lenis'

// Lenis implements SMOOTH SCROLING
export function lenis() {
  const l = new Lenis();
  
  function raf(time) {
    l.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
}