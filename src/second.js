var nodes1 = Array.from(document.getElementsByClassName("timeline-badge"));
var nodes2 = Array.from(document.getElementsByClassName("timeline-panel"));
var nodes3 = Array.from(document.getElementsByClassName("timeline-panel-img"));
const nodes = nodes1.concat(nodes2, nodes3);

const cache = {
  viewport: {},
  rects: []
};
window.addEventListener("load", init);

function init() {
  recache();
  document.addEventListener("scroll", throttle(scrollCheck, 10));
  window.addEventListener("resize", debounce(recache, 50));
};

function recache() {
  cache.viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  nodes.forEach((node, i) => {
    cache.rects[i] = rect(node);
  });
  scrollCheck();
}

// Robust viewport check: at least 50% of element must be visible
function isInViewport(element, threshold = 0.5) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const elementHeight = rect.height;
  // Calculate how much of the element is visible
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleRatio = visibleHeight / elementHeight;
  return visibleRatio >= threshold;
}

function scrollCheck() {
  nodes.forEach((node) => {
    node.classList.toggle("active", isInViewport(node, 0.5));
  });
}

function getScrollOffset() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

function throttle(fn, limit, context) {
  let wait;
  return function() {
    context = context || this;
    if (!wait) {
      fn.apply(context, arguments);
      wait = true;
      return setTimeout(function() {
        wait = false;
      }, limit);
    }
  };
};

function debounce(fn, limit, u) {
  let e;
  return function() {
    const i = this;
    const o = arguments;
    const a = u && !e;
    clearTimeout(e),
      (e = setTimeout(function() {
        (e = null), u || fn.apply(i, o);
      }, limit)),
      a && fn.apply(i, o);
  };
}

function rect(e) {
  const o = getScrollOffset();
  const r = e.getBoundingClientRect();
  return {
    x: r.left + o.x,
    y: r.top + o.y
  };
};

// Removed jQuery fade logic for .timeline-panel
