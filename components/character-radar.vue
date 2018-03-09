<template>
  <svg :width="canvasSize" :height="canvasSize">
    <polygon class="outer-hexagon" />
    <polygon class="inner-hexagon" />
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
// drawPolygon({ points: vertices, className: 'outer-hexagon' })
// drawPolygon({ points: innerVertices, className: 'inner-hexagon' })

// svg.append('g')
//   .selectAll('line')
//   .data(vertices)
//   .enter()
//   .append('line')
//   .attr('class', 'lines')
//   .attr('x1', d => d.x)
//   .attr('y1', d => d.y)
//   .attr('x2', centerPoint.x)
//   .attr('y2', centerPoint.y)

const rightHorizonPointIndex = 0
const leftHorizonPointIndex = 3

// const texts = svg.append('g')
//   .selectAll('text')
//   .data(vertices)
//   .enter()
//   .append('text')
//   .attr('class', 'texts')
//   .attr('x', d => d.x - d.id.length * 4)
//   .attr('y', d => d.y)
//   .attr('dx', (d, i) => {
//     if (i === rightHorizonPointIndex) return d.id.length * 4
//     if (i === leftHorizonPointIndex) return -d.id.length * 4
//     return 0
//   })
//   .attr('dy', (d, i) => {
//     if (i === rightHorizonPointIndex || i === leftHorizonPointIndex) return 0
//     return d.y > centerPoint.y ? 20 : -20
//   })
//   .text(d => `${d.id} ${levi[d.id]}`)

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
      return centerPoint[coord] + sideLength * percentage * byAngle
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
  },
  data() {
    return {}
  },
  methods: {

  },
}
</script>
<style scoped>
.lines{
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
  font-size: 1.1rem;
}
</style>
