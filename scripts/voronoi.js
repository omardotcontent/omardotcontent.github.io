// voronoi.js - Optimized Voronoi diagram with borders only (B&W Theme)
(function () {
  "use strict";
  
  function initVoronoi() {
    const canvas = document.getElementById("voronoi-canvas");
    const gridContainer = document.getElementById("shape-grid");
    if (!canvas || !gridContainer) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let sites = [];
    let animationId;
    let lastFrameTime = 0;

    // Configuration for better performance
    const NUM_SITES = 15; // Reduced from 30
    const PIXEL_STEP = 4; // Increased from 2 for better performance
    const TARGET_FPS = 30; // Target 30 FPS instead of 60
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    const BORDER_THRESHOLD = 3; // Slightly increased for thicker borders

    // Initialize sites with random positions and velocities
    function initSites() {
      sites = [];
      for (let i = 0; i < NUM_SITES; i++) {
        sites.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8, // Slightly faster movement
          vy: (Math.random() - 0.5) * 0.8
        });
      }
    }

    // Update site positions
    function updateSites() {
      sites.forEach(site => {
        site.x += site.vx;
        site.y += site.vy;

        // Bounce off edges
        if (site.x <= 0 || site.x >= width) site.vx *= -1;
        if (site.y <= 0 || site.y >= height) site.vy *= -1;

        // Keep within bounds
        site.x = Math.max(0, Math.min(width, site.x));
        site.y = Math.max(0, Math.min(height, site.y));
      });
    }

    // Optimized distance calculation (squared distance to avoid sqrt)
    function distanceSquared(x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return dx * dx + dy * dy;
    }

    // Draw Voronoi diagram with borders only - optimized version
    function drawVoronoi() {
      // Clear with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Use a more efficient approach with path drawing
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.beginPath();

      // Sample points more sparsely for performance
      for (let x = 0; x < width; x += PIXEL_STEP) {
        for (let y = 0; y < height; y += PIXEL_STEP) {
          let minDist = Infinity;
          let secondMinDist = Infinity;

          // Find the two closest sites using squared distance
          sites.forEach(site => {
            const dist = distanceSquared(x, y, site.x, site.y);
            if (dist < minDist) {
              secondMinDist = minDist;
              minDist = dist;
            } else if (dist < secondMinDist) {
              secondMinDist = dist;
            }
          });

          // If we're close to the border between two cells, add to path
          if (Math.sqrt(secondMinDist) - Math.sqrt(minDist) < BORDER_THRESHOLD) {
            ctx.rect(x, y, PIXEL_STEP, PIXEL_STEP);
          }
        }
      }

      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }

    // Throttled animation loop for better performance
    function animate(currentTime) {
      if (currentTime - lastFrameTime >= FRAME_INTERVAL) {
        updateSites();
        drawVoronoi();
        lastFrameTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    }

    // Resize handler
    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      // Use lower resolution for better performance
      const scale = 0.75; // Render at 75% resolution
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Scale the context
      ctx.scale(scale, scale);
      
      initSites();
    }

    // Initialize
    resize();
    animate(0);

    // Handle window resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    });

    // Cleanup function
    window.stopVoronoi = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    // Show the canvas with fade in
    setTimeout(() => {
      gridContainer.style.opacity = "0.25"; // Reduced opacity for less distraction
    }, 100);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVoronoi);
  } else {
    initVoronoi();
  }
})();