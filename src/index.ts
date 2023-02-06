import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SLIDE_COUNT = 4

const generateRandomColor = () =>
	// eslint-disable-next-line no-bitwise
	`#${((Math.random() * 0xffffff) << 0).toString(16)}`

const container = document.getElementById('container')
container!.style.width = `${SLIDE_COUNT * 100}vw`

const createElements = () => {
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < SLIDE_COUNT; index++) {
		const colorElement = generateRandomColor()
		const divElement = document.createElement('div')
		divElement.innerText = `Slide number: ${index + 1}`
		divElement.classList.add('slide')
		divElement.style.backgroundColor = colorElement
		// eslint-disable-next-line no-unused-expressions
		container?.appendChild(divElement)
	}
}

createElements()

gsap.to('.slide', {
	scrollTrigger: {
		trigger: '.slides-container',
		start: 'top top',
		// snap: {
		// 	snapTo: 1 / (SLIDE_COUNT - 1),
		// 	duration: 0.5,
		// 	delay: 0.25,
		// 	// ease: 'power1.inOut',
		// },
		// markers: true,
		pin: true,
		scrub: true,
	},
	ease: 'none',
	xPercent: -100 * (SLIDE_COUNT - 1),
})
