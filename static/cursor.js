const App = {
	cursorEl: document.getElementById("cursor"),

	linkEls: document.querySelectorAll(".cursorhover, .cursorhide"),
    hideEls: document.querySelectorAll(".cursorhide"),
	currentlyHoveredLinkEl: undefined,

	lastClearTransitionTimeout: undefined,

	init() {
		this.handleMouseMove()
		this.handleLinksHover()
	},

	handleMouseMove() {
		const onMouseMove = (ev) => {
			const { clientX, clientY } = ev

			const CIRCULAR_POINTER_SIZE = 100

			let newCursorX = undefined
			let newCursorY = undefined

			let newCursorWidth = undefined
			let newCursorHeight = undefined

			let newCursorBorderRadius = undefined
            let newCursorOpacity = undefined

            let newCursorBackground = undefined

            if (this.currentlyHoveredLinkEl) {
				const currentlyHoveredLinkBoundings =
					this.currentlyHoveredLinkEl.getBoundingClientRect()

                if(this.currentlyHoveredLinkEl.classList.contains("cursorhide")) {
                    newCursorOpacity = 0
                } else {
                    newCursorOpacity = 1
                }

				newCursorX = currentlyHoveredLinkBoundings.x
				newCursorY = currentlyHoveredLinkBoundings.y 

				newCursorWidth = currentlyHoveredLinkBoundings.width
				newCursorHeight = currentlyHoveredLinkBoundings.height

				newCursorBorderRadius = window.getComputedStyle(this.currentlyHoveredLinkEl).borderRadius || 0

                newCursorBackground = "#3F4776"
                // #2A2342 white background me kam aayega

                
			} else {

				newCursorX = clientX - CIRCULAR_POINTER_SIZE / 2
				newCursorY = clientY - CIRCULAR_POINTER_SIZE / 2

				newCursorWidth = CIRCULAR_POINTER_SIZE
				newCursorHeight = CIRCULAR_POINTER_SIZE

				newCursorBorderRadius = "50%"

                newCursorOpacity = 1

                newCursorBackground = "radial-gradient(circle closest-side, #CD32C4, #3F4776, #3F4776, #3F4776, transparent)"
			}

			if (newCursorWidth + "px" !== this.cursorEl.style.width) {
				this.cursorEl.style.transition = "0.1s all"

				clearTimeout(this.lastClearTransitionTimeout)
				this.lastClearTransitionTimeout = undefined
			} else {
				if (!this.lastClearTransitionTimeout) {
					this.lastClearTransitionTimeout = setTimeout(() => {
						this.cursorEl.style.transition = "none"

						this.lastClearTransitionTimeout = undefined
					}, 100)
				}
			}

			this.cursorEl.style.opacity = newCursorOpacity
			this.cursorEl.style.transform = `translate(
				${newCursorX}px,
				${newCursorY}px
			)`
			this.cursorEl.style.width = newCursorWidth + "px"
			this.cursorEl.style.height = newCursorHeight + "px"
			this.cursorEl.style.borderRadius = newCursorBorderRadius
            this.cursorEl.style.background = newCursorBackground
		}

		window.addEventListener("mousemove", (ev) => {
			requestAnimationFrame(() => onMouseMove(ev))
		})
	},

	handleLinksHover() {
		this.linkEls.forEach((linkEl) => {
			linkEl.onmouseover = () => {
				this.currentlyHoveredLinkEl = linkEl
			}

			linkEl.onmouseout = () => {
				if (this.currentlyHoveredLinkEl == linkEl) {
					this.currentlyHoveredLinkEl = undefined
				}
			}
		})
	}
}

App.init()
