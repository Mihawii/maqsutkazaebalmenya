// Animation System - Fixed to only animate on scroll into view
class AnimationSystem {
  constructor() {
    this.observer = null
    this.scrollSpeed = 0
    this.lastScrollY = window.scrollY
    this.animatedElements = new Set()
    this.init()
  }

  init() {
    this.setupIntersectionObserver()
    this.setupScrollListener()
    this.initializeElements()
  }

  initializeElements() {
    // Ensure all animated elements start hidden
    document.querySelectorAll("[data-animate]").forEach((element) => {
      if (!element.classList.contains("visible")) {
        element.style.opacity = "0"
        element.style.visibility = "hidden"
      }
    })
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
            this.handleIntersection(entry)
            this.animatedElements.add(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    // Observe all elements with animation attributes
    document.querySelectorAll("[data-animate]").forEach((element) => {
      this.observer.observe(element)
    })
  }

  setupScrollListener() {
    let lastScrollTime = Date.now()

    window.addEventListener("scroll", () => {
      const currentTime = Date.now()
      const timeDiff = currentTime - lastScrollTime
      const scrollDiff = window.scrollY - this.lastScrollY

      this.scrollSpeed = Math.abs(scrollDiff / timeDiff)
      this.lastScrollY = window.scrollY
      lastScrollTime = currentTime
    })
  }

  handleIntersection(entry) {
    const element = entry.target
    const animationType = element.getAttribute("data-animate")
    const delay = element.getAttribute("data-animate-delay") || "0"

    setTimeout(() => {
      element.classList.add("visible")
      element.style.opacity = "1"
      element.style.visibility = "visible"

      // Handle text animations if element contains text
      if (animationType === "card" || animationType === "text") {
        this.animateTextContent(element)
      }
    }, Number.parseInt(delay))
  }

  animateTextContent(element) {
    const textElements = element.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span:not(.animated-line), li")

    textElements.forEach((textElement, index) => {
      if (!textElement.hasAttribute("data-animate")) {
        setTimeout(() => {
          textElement.style.opacity = "1"
          textElement.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  }
}

// Text line animation system
function wrapTextIntoLines(element) {
  const animationType = element.getAttribute("data-animate") || "center"
  const text = element.textContent

  if (!text.trim()) return

  element.textContent = ""

  // Create a temporary span to measure text
  const temp = document.createElement("span")
  temp.style.visibility = "hidden"
  temp.style.position = "absolute"
  temp.style.whiteSpace = "pre-wrap"
  temp.style.width = getComputedStyle(element).width
  temp.style.font = getComputedStyle(element).font
  document.body.appendChild(temp)

  // Split text into words
  const words = text.split(" ")
  let currentLine = ""
  const lines = []

  words.forEach((word) => {
    const testLine = currentLine + word + " "
    temp.textContent = testLine

    if (temp.offsetWidth > element.offsetWidth && currentLine !== "") {
      lines.push(currentLine.trim())
      currentLine = word + " "
    } else {
      currentLine = testLine
    }
  })

  if (currentLine.trim()) {
    lines.push(currentLine.trim())
  }

  document.body.removeChild(temp)

  // Set initial transform based on animation type
  let initialTransform
  switch (animationType) {
    case "left":
      initialTransform = "translateX(-50px)"
      break
    case "right":
      initialTransform = "translateX(50px)"
      break
    default:
      initialTransform = "translateY(20px)"
  }

  // Create spans for each line
  lines.forEach((line, index) => {
    const span = document.createElement("span")
    span.textContent = line
    span.className = "animated-line"
    span.style.display = "block"
    span.style.opacity = "0"
    span.style.transform = initialTransform
    span.style.transitionDelay = `${index * 0.1}s`
    element.appendChild(span)
  })
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize animation system
  new AnimationSystem()

  // Handle text elements that need line-by-line animation
  const textElements = document.querySelectorAll(
    '[data-animate="text"], [data-animate="left"], [data-animate="right"], [data-animate="center"]',
  )
  textElements.forEach((element) => {
    const hasTextNodes = Array.from(element.childNodes).some(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0,
    )

    if (hasTextNodes && !element.querySelector(".animated-line")) {
      wrapTextIntoLines(element)
    }
  })
})

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Animate [data-animate] elements on scroll
export function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', animateOnScroll);
  window.animateOnScroll = animateOnScroll;
}
