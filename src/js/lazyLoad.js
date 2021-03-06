
export const noOpacityClass = 'opacity--0';
export const fullOpacityClass = 'opacity--1';
export const lazyLoadAttribute = 'data-loaded="false"';
export const lazySrc = "img/clear.gif";

const _animationClass = "blinking";

const changeOpacity = (el, animationClass=_animationClass) => {
  const parent = el.parentElement;
  if (parent.classList.contains(noOpacityClass)) {
    parent.classList.add(animationClass);
    // parent.classList.remove('opacity--0');
    // parent.classList.add('opacity--1');
  }
}

export const lazyLoad = (e, animationOverrideCls) => {
 document.querySelectorAll(`img[${lazyLoadAttribute}]`).forEach((el) => {
  if (isElementInViewport(el)) {
    el.src = el.dataset.src;
    el.dataset.loaded = true;
    el.onload = () => { changeOpacity(el, animationOverrideCls) };
  }
 })
}

const isElementInViewport = function(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
