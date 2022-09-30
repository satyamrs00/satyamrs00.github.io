const App = {
	cursorEl: document.getElementById("cursor"),
	cursorCoverEl: document.getElementById("cursor-cover"),

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

			const CIRCULAR_POINTER_SIZE = 30
			const INNER_POINTER_SIZE = 5

			let newCursorX = undefined
			let newCursorY = undefined

			let newCursorCoverX = undefined
			let newCursorCoverY = undefined

			let newCursorCoverWidth = undefined
			let newCursorCoverHeight = undefined

			let newCursorCoverBorderRadius = undefined
            let newCursorOpacity = undefined

            if (this.currentlyHoveredLinkEl) {
				const currentlyHoveredLinkBoundings =
					this.currentlyHoveredLinkEl.getBoundingClientRect()

                if(this.currentlyHoveredLinkEl.classList.contains("cursorhide")) {
                    newCursorOpacity = 0
                } else {
                    newCursorOpacity = 1
                }

				newCursorX = clientX - INNER_POINTER_SIZE / 2
				newCursorY = clientY - INNER_POINTER_SIZE / 2

				newCursorCoverX = currentlyHoveredLinkBoundings.x
				newCursorCoverY = currentlyHoveredLinkBoundings.y 

				newCursorCoverWidth = currentlyHoveredLinkBoundings.width
				newCursorCoverHeight = currentlyHoveredLinkBoundings.height

				newCursorCoverBorderRadius = window.getComputedStyle(this.currentlyHoveredLinkEl).borderRadius || 0
                
			} else {

				newCursorX = clientX - INNER_POINTER_SIZE / 2
				newCursorY = clientY - INNER_POINTER_SIZE / 2
				
				newCursorCoverX = clientX - CIRCULAR_POINTER_SIZE / 2 
				newCursorCoverY = clientY - CIRCULAR_POINTER_SIZE / 2

				newCursorCoverWidth = CIRCULAR_POINTER_SIZE
				newCursorCoverHeight = CIRCULAR_POINTER_SIZE

				newCursorCoverBorderRadius = "50%"

                newCursorOpacity = 1

			}

			if (newCursorCoverWidth + "px" !== this.cursorCoverEl.style.width) {
				this.cursorCoverEl.style.transition = "0.15s all"

				clearTimeout(this.lastClearTransitionTimeout)
				this.lastClearTransitionTimeout = undefined
			} else {
				if (!this.lastClearTransitionTimeout) {
					this.lastClearTransitionTimeout = setTimeout(() => {
						this.cursorCoverEl.style.transition = "none"

						this.lastClearTransitionTimeout = undefined
					}, 150)
				}
			}

			this.cursorEl.style.opacity = newCursorOpacity
			this.cursorCoverEl.style.opacity = newCursorOpacity
			
			this.cursorEl.style.transform = `translate(
				${newCursorX}px,
				${newCursorY}px
			)`
			this.cursorCoverEl.style.transform = `translate(
				${newCursorCoverX}px,
				${newCursorCoverY}px
			)`
			this.cursorCoverEl.style.width = newCursorCoverWidth + "px"
			this.cursorCoverEl.style.height = newCursorCoverHeight + "px"
			this.cursorCoverEl.style.borderRadius = newCursorCoverBorderRadius
		}

		window.addEventListener("mousemove", (ev) => {
			requestAnimationFrame(() => onMouseMove(ev))
		})
		window.addEventListener("scroll", (ev) => {
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
