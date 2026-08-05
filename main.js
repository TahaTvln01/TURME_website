/* TURME — minimal vanilla JS.
   Two jobs only: keep the layout intact when an image file is missing, and
   mark the nav link of the section currently in view. The page is fully
   readable and navigable with JavaScript disabled. */
(function () {
  'use strict';

  /* ------------------------------------------------- missing image slots -- */

  var ICON = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
    '<rect x="3" y="4.5" width="18" height="15" rx="1"/>' +
    '<path d="m3 15.5 5-4.5 4 3.5 3-2.5 6 5"/><circle cx="8.75" cy="9" r="1.25"/></svg>';

  function handleBrokenImage(img) {
    if (img.getAttribute('data-broken')) return;

    // A photo may name a stand-in file; try that once before giving up.
    var fallback = img.getAttribute('data-fallback');
    if (fallback) {
      img.removeAttribute('data-fallback');
      img.src = fallback;
      return;
    }

    img.setAttribute('data-broken', '1');
    var box = document.createElement('div');
    box.className = 'img-missing';
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', img.alt || 'Image coming soon');
    box.innerHTML = ICON + '<span>Image coming soon</span>';
    if (img.parentNode) img.parentNode.replaceChild(box, img);
  }

  // "error" does not bubble, so listen during the capture phase.
  document.addEventListener('error', function (event) {
    var target = event.target;
    if (target && target.tagName === 'IMG') handleBrokenImage(target);
  }, true);

  // Catches images that already failed before this script ran.
  function sweepImages() {
    Array.prototype.slice.call(document.images).forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) handleBrokenImage(img);
    });
  }

  /* ------------------------------------------------ current section in nav -- */

  function initNavHighlight() {
    var links = document.querySelectorAll('.nav__list a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var linkFor = {};
    var sections = [];

    Array.prototype.forEach.call(links, function (link) {
      var section = document.getElementById(link.getAttribute('href').slice(1));
      if (section) {
        linkFor[section.id] = link;
        sections.push(section);
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(links, function (link) {
          link.removeAttribute('aria-current');
        });
        linkFor[entry.target.id].setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ------------------------------------------------------------- startup -- */

  document.addEventListener('DOMContentLoaded', function () {
    sweepImages();
    initNavHighlight();
  });

  window.addEventListener('load', sweepImages);
})();
