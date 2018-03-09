<template>
  <svg :width="canvasSize" :height="canvasSize">
    <polygon class="outer-hexagon" />
    <polygon class="inner-hexagon" />
    <g class="lines">
      <line
        v-for="ability in ABILITIES"
        :key="ability"
        class="line"
      />
    </g>
    <g class="texts">
      <text
        v-for="ability in ABILITIES"
        :key="ability"
        class="text"
      />
    </g>
  </svg>
</template>
<script>
import { ABILITIES } from '../src/data/characters.schema'

function toRadians(angle) {
  return angle * (Math.PI / 180)
}
// const abilitiesVertices = ABILITIES.map((ability, index) => ({
//   ability,
//   x: calculatePosition({ coord: 'x', percentage: this.abilities[ability] / 100, index }),
//   y: calculatePosition({ coord: 'y', percentage: this.abilities[ability] / 100, index }),
// }))

function drawPolygon({ points, className }) {
  document.querySelector(`.${className}`).setAttribute('points', points.map(ver => `${ver.x},${ver.y}`))
}

// drawPolygon({ points: abilitiesVertices, className: 'abilities-hexagon' })
const rightHorizonPointIndex = 0
const leftHorizonPointIndex = 3

export default {
  props: {
    abilities: {
      type: Object,
    },
    canvasSize: {
      type: Number,
      default: 300,
    },
  },
  mounted() {
    const canvasSize = this.canvasSize
    const sideLength = canvasSize / 2
    const centerPoint = { x: canvasSize / 2, y: canvasSize / 2, id: 'centre' }
    function calculatePosition({ coord = 'x', percentage, index }) {
      const byAngle = coord === 'x' ? Math.cos(toRadians(60 * index)) : Math.sin(toRadians(60 * index))
      return centerPoint[coord] + (sideLength * percentage * byAngle)
    }
    const vertices = Array(6).fill({}).map((_, index) => ({
      id: ABILITIES[index],
      x: calculatePosition({ coord: 'x', percentage: 1, index }),
      y: calculatePosition({ coord: 'y', percentage: 1, index }),
    }))
    const innerVertices = Array(6).fill({}).map((_, index) => ({
      x: calculatePosition({ coord: 'x', percentage: 0.5, index }),
      y: calculatePosition({ coord: 'y', percentage: 0.5, index }),
    }))
    drawPolygon({ points: vertices, className: 'outer-hexagon' })
    drawPolygon({ points: innerVertices, className: 'inner-hexagon' })

    const lines = document.getElementsByClassName('line')
    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index]
      line.setAttribute('x1', vertices[index].x)
      line.setAttribute('y1', vertices[index].y)
      line.setAttribute('x2', centerPoint.x)
      line.setAttribute('y2', centerPoint.y)
    }

    const texts = document.getElementsByClassName('text')
    for (let index = 0; index < texts.length; index += 1) {
      const text = texts[index]
      const ability = ABILITIES[index]
      const abilityLengthOffset = ability.length * 2.5
      text.setAttribute('x', vertices[index].x - abilityLengthOffset)
      text.setAttribute('y', vertices[index].y)
      const dx = (index === rightHorizonPointIndex) ? abilityLengthOffset :
        (index === leftHorizonPointIndex) ? -abilityLengthOffset : 0
      text.setAttribute('dx', dx)
      text.setAttribute('dy', 0)
      text.textContent = `${ability} ${this.abilities[ability] || '??'}`
    }
  },
  data() {
    return {
      ABILITIES,
    }
  },
  methods: {

  },
}
</script>
<style scoped>
svg{
  overflow: visible;
}
.line{
  stroke-width: 1px;
  stroke: black;
}
polygon{
  fill: transparent;
  stroke: black;
}
.abilities-hexagon{
  fill: DarkTurquoise;
  stroke: transparent;
}
.texts{
  font-size: var(--smallFontSize);
}
</style>
