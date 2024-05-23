<script>
  import { onMount} from "svelte";
  import * as d3 from "d3"

  export let emissionRate = 200
  export let speedMin = 200
  export let speedRange = 700
  export let sizeMin = .5
  export let sizeRange = 4

  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  // How often the emitter needs to create a particle (in ms)
  const emissionDelay = 1000 / emissionRate

  // The emitter's drop objects
  const drops = []

  let canvas
  let ctx
  let w
  let h
  let k

  let lastUpdate = 0
  let lastEmission = 0
  let requestId

  let animating = true

  $: emitterWidth = (w - (margin.left + margin.right)) * k
  $: emitterHeight = (h - (margin.top + margin.bottom)) * k
  $: alphaScale = d3.scaleLinear()
    .domain([ margin.top*k + emitterHeight*.75, margin.top*k + emitterHeight ])
    .range([ 1, 0 ])
    .clamp(true)


  onMount(() => {
    ctx = canvas.getContext("2d")
    requestAnimationFrame(loop)

    return () => {
      animating = false
      cancelAnimationFrame(requestId)
    }
  })


  function DropParticle(x, y, size) {
    const speed = speedMin + (size - sizeMin) / ((sizeMin + sizeRange) - sizeMin) * speedRange
    this.size = size
    
    this.pos = { x: x || 0, y: y || 0 }
    this.velocity = { x: 0, y: speed }

    this.dead = false
  }

  function update() {
    const now = Date.now()

    if (!lastUpdate) {
        lastUpdate = now
        return;
    }

    const deltaTime = now - lastUpdate

    lastUpdate = now
    lastEmission += deltaTime

    if (lastEmission > emissionDelay) {
      let i = Math.floor(lastEmission / emissionDelay)

      lastEmission -= i*emissionDelay

      while (i--) {
        drops.push(new DropParticle(
          margin.left*k + Math.random() * emitterWidth, 
          margin.top*k,
          sizeMin + d3.easeExpIn(Math.random())*sizeRange
        ))
      }
    }

    let i = drops.length
    while (i--) {
      const drop = drops[i]

      if (drop.dead) {
        drops.splice(i, 1)
        continue
      }

      if (drop.pos.y > emitterHeight + margin.top*k) {
        drop.dead = true
        continue
      }

      drop.pos.x += drop.velocity.x * (deltaTime/1000)
      drop.pos.y += drop.velocity.y * (deltaTime/1000)

      // drawDrop
      ctx.fillStyle = "rgba(61, 113, 150, " + alphaScale(drop.pos.y) + ")"
      ctx.beginPath()
      ctx.arc(drop.pos.x, drop.pos.y, drop.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  function loop() {
    requestId = requestAnimationFrame(loop)

    if (!animating) return

    ctx.clearRect(0, 0, w*k, h*k)
    update()
  }



</script>

<svelte:window bind:devicePixelRatio={k}/>

<div class="drop-emitter" bind:clientWidth={w} bind:clientHeight={h}>
  <canvas 
    bind:this={canvas} 
    width={w*k} 
    height={h*k} 
    style:width="{w}px"
    style:height="{h}px"
  />
</div>

<style lang="scss">
  .drop-emitter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>