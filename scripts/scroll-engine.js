// scripts/scroll-engine.js
// Scroll-driven scene manager using IntersectionObserver + scroll position tracking
// Provides per-scene progress (0→1) and triggers CSS animation classes

(function () {
  'use strict';

  const ScrollEngine = {
    scenes: [],
    activeScene: null,
    callbacks: {},
    scrollY: 0,
    viewportHeight: window.innerHeight,

    init() {
      this.scenes = Array.from(document.querySelectorAll('.scene'));
      this.viewportHeight = window.innerHeight;

      // Set up IntersectionObserver for each scene
      this.setupObserver();

      // Track scroll position
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
      window.addEventListener('resize', () => {
        this.viewportHeight = window.innerHeight;
      });

      // Initial check
      this.onScroll();

      // Hide scroll hint after scrolling
      this.setupScrollHint();
    },

    setupObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const scene = entry.target;
            const sceneName = scene.dataset.scene;

            if (entry.isIntersecting) {
              scene.classList.add('scene-visible');
              this.triggerAnimations(scene);
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.5],
          rootMargin: '0px 0px -25% 0px'
        }
      );

      this.scenes.forEach((scene) => observer.observe(scene));
    },

    triggerAnimations(scene) {
      // Find all k-anim elements inside this scene and make them visible
      const animElements = scene.querySelectorAll('.k-anim:not(.k-visible)');
      animElements.forEach((el) => {
        el.classList.add('k-visible');
      });
    },

    onScroll() {
      this.scrollY = window.scrollY;

      // Calculate per-scene progress
      this.scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const sceneTop = rect.top;
        const sceneHeight = rect.height;

        // Progress: 0 when scene enters viewport, 1 when it fully passes
        const progress = Math.max(0, Math.min(1,
          (this.viewportHeight - sceneTop) / (this.viewportHeight + sceneHeight)
        ));

        const sceneName = scene.dataset.scene;

        // Store progress on the element for potential JS reads
        scene.dataset.progress = progress.toFixed(3);

        // Fire registered callbacks
        if (this.callbacks[sceneName]) {
          this.callbacks[sceneName].forEach((cb) => cb(progress, scene));
        }
      });

      // Determine active scene (most centered in viewport)
      let bestScene = null;
      let bestDistance = Infinity;
      this.scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - this.viewportHeight / 2);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestScene = scene;
        }
      });

      if (bestScene && bestScene !== this.activeScene) {
        if (this.activeScene) {
          this.activeScene.classList.remove('scene-active');
        }
        bestScene.classList.add('scene-active');
        this.activeScene = bestScene;
      }
    },

    // Register a callback for a specific scene
    onScene(sceneName, callback) {
      if (!this.callbacks[sceneName]) {
        this.callbacks[sceneName] = [];
      }
      this.callbacks[sceneName].push(callback);
    },

    setupScrollHint() {
      const hint = document.getElementById('scroll-hint');
      if (!hint) return;

      let hidden = false;
      window.addEventListener('scroll', () => {
        if (!hidden && window.scrollY > 100) {
          hint.classList.add('hidden');
          hidden = true;
        }
      }, { passive: true });
    },

    // Utility: observe individual elements for scroll-triggered animations
    // Use for elements that need sub-scene-level triggering
    observeElements(selector, options = {}) {
      const elements = document.querySelectorAll(selector);
      const threshold = options.threshold || 0.15;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('k-visible');
              if (!options.repeat) {
                observer.unobserve(entry.target);
              }
            } else if (options.repeat) {
              entry.target.classList.remove('k-visible');
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: options.rootMargin || '0px 0px -25% 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
    }
  };

  // Expose globally
  window.ScrollEngine = ScrollEngine;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScrollEngine.init());
  } else {
    ScrollEngine.init();
  }
})();
