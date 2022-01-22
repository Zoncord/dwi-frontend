export function connectMouseScrollEvent(func) {
  if (window.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      window.addEventListener("wheel", func);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      window.addEventListener("mousewheel", func);
    } else {
      // Firefox < 17
      window.addEventListener("MozMousePixelScroll", func);
    }
  } else { // IE8-
    window.attachEvent("onmousewheel", func);
  }
}
