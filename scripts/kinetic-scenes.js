// scripts/kinetic-scenes.js
// Reads PORTFOLIO_CONFIG and builds all cinematic scene content
// Each scene is a kinetic typography sequence triggered by scroll

(function () {
  'use strict';

  const CONFIG = (typeof PORTFOLIO_CONFIG !== 'undefined') ? PORTFOLIO_CONFIG : null;
  if (!CONFIG) {
    console.error('PORTFOLIO_CONFIG not found. Make sure portfolio-config.js is loaded before kinetic-scenes.js');
    return;
  }

  // ============================================================
  // Utility: create element with classes and optional text
  // ============================================================
  function el(tag, classes, text) {
    const element = document.createElement(tag);
    if (classes) {
      classes.split(' ').filter(Boolean).forEach((c) => element.classList.add(c));
    }
    if (text) element.textContent = text;
    return element;
  }

  function elHTML(tag, classes, html) {
    const element = document.createElement(tag);
    if (classes) {
      classes.split(' ').filter(Boolean).forEach((c) => element.classList.add(c));
    }
    if (html) element.innerHTML = html;
    return element;
  }

  // ============================================================
  // SCENE 1: Hero
  // ============================================================
  function buildHero() {
    const container = document.getElementById('hero-content');
    if (!container) return;

    // Name — massive
    const name = el('h1', 'ktext-hero hero-name k-anim k-slam', CONFIG.hero.name);
    container.appendChild(name);

    // Title line
    const titleText = CONFIG.hero.title
      .replace(/<a[^>]*>([^<]*)<\/a>/g, '$1'); // strip HTML link, keep text

    const title = el('p', 'ktext-subheading hero-title k-anim k-slide-up', titleText);
    container.appendChild(title);

    // Accent divider line
    const divider = document.createElement('div');
    divider.className = 'k-anim k-scale-in mt-md';
    divider.style.cssText = 'width: 80px; height: 3px; background: linear-gradient(90deg, var(--color-accent-green), var(--color-accent-purple)); margin: 1.5rem auto; border-radius: 2px;';
    container.appendChild(divider);

    // Tagline
    const tagline = el('p', 'ktext-body hero-subtitle k-anim k-fade mt-sm',
      'Creating clean, intuitive, and meaningful digital experiences.');
    container.appendChild(tagline);
  }

  // ============================================================
  // SCENE 2: Meraki Studios
  // ============================================================
  function buildMeraki() {
    const container = document.getElementById('meraki-content');
    if (!container) return;

    const meraki = CONFIG.merakiStudios;

    // Intro words — kinetic sequence
    const introWrapper = el('div', 'meraki-intro');

    const line1 = el('p', 'ktext-label k-anim k-fade mb-sm', 'WHAT WE BUILT');
    introWrapper.appendChild(line1);

    const logoWrapper = el('div', 'meraki-logo-wrapper k-anim k-slam');
    logoWrapper.innerHTML = `<svg viewBox="0 0 684 97" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Meraki Studios"><g clip-path="url(#clip0_21_3)"><path d="M65.93 7.57499H76.095V85H65.93V33.13L43.605 85H36.1L13.68 33.13V85H3.61V7.57499H13.68L39.805 68.185L65.93 7.57499ZM91.9452 33.32C97.8985 27.3667 105.055 24.39 113.415 24.39C121.775 24.39 128.9 27.3667 134.79 33.32C140.743 39.21 143.72 46.335 143.72 54.695C143.72 56.2783 143.562 57.9567 143.245 59.73H98.6902V49.66H132.985C131.908 45.2267 129.533 41.585 125.86 38.735C122.25 35.885 118.102 34.46 113.415 34.46C107.715 34.46 102.902 36.455 98.9752 40.445C95.1118 44.435 93.1802 49.185 93.1802 54.695C93.1802 60.205 95.1118 64.955 98.9752 68.945C102.902 72.8717 107.715 74.835 113.415 74.835C119.305 74.835 124.213 72.7133 128.14 68.47H140.395C137.798 73.4733 134.093 77.495 129.28 80.535C124.467 83.5117 119.178 85 113.415 85C105.055 85 97.8985 82.055 91.9452 76.165C86.0552 70.2117 83.1102 63.055 83.1102 54.695C83.1102 46.335 86.0552 39.21 91.9452 33.32ZM150.654 54.695C150.654 46.335 153.599 39.21 159.489 33.32C165.379 27.3667 172.504 24.39 180.864 24.39V34.46C175.29 34.46 170.54 36.455 166.614 40.445C162.687 44.3717 160.724 49.1217 160.724 54.695V85H150.654V54.695ZM242.062 54.695V85H231.992V54.695C231.992 49.1217 229.997 44.3717 226.007 40.445C222.081 36.455 217.331 34.46 211.757 34.46C206.184 34.46 201.434 36.455 197.507 40.445C193.581 44.3717 191.617 49.1217 191.617 54.695C191.617 60.2683 193.581 65.0183 197.507 68.945C201.434 72.8717 206.184 74.835 211.757 74.835C218.091 74.835 223.252 72.4283 227.242 67.615V80.725C222.366 83.575 217.204 85 211.757 85C203.397 85 196.241 82.055 190.287 76.165C184.397 70.2117 181.452 63.055 181.452 54.695C181.452 46.335 184.397 39.21 190.287 33.32C196.241 27.3667 203.397 24.39 211.757 24.39C220.117 24.39 227.242 27.3667 233.132 33.32C239.086 39.21 242.062 46.335 242.062 54.695ZM261.752 7.57499V52.51L282.272 24.39H294.812L273.912 52.985L297.282 85H284.742L261.752 53.555V85H251.682V7.57499H261.752ZM303.27 24.39H313.34V85H303.27V24.39ZM304.695 9.095C305.709 8.08166 306.912 7.57499 308.305 7.57499C309.699 7.57499 310.87 8.08166 311.82 9.095C312.834 10.045 313.34 11.2167 313.34 12.61C313.34 14.0033 312.834 15.2067 311.82 16.22C310.87 17.17 309.699 17.645 308.305 17.645C306.912 17.645 305.709 17.17 304.695 16.22C303.745 15.2067 303.27 14.0033 303.27 12.61C303.27 11.2167 303.745 10.045 304.695 9.095ZM353.551 61.82H363.621C363.621 65.43 364.825 68.5017 367.231 71.035C369.701 73.5683 372.678 74.835 376.161 74.835C379.645 74.835 382.59 73.5683 384.996 71.035C387.466 68.5017 388.701 65.43 388.701 61.82C388.701 59.4133 388.1 57.355 386.896 55.645C385.756 53.8717 384.236 52.4783 382.336 51.465C380.436 50.4517 378.346 49.5017 376.066 48.615C373.786 47.7283 371.475 46.7467 369.131 45.67C366.851 44.53 364.761 43.2633 362.861 41.87C360.961 40.4133 359.41 38.45 358.206 35.98C357.066 33.4467 356.496 30.5017 356.496 27.145C356.496 21.7617 358.396 17.17 362.196 13.37C366.06 9.50666 370.715 7.57499 376.161 7.57499C381.608 7.57499 386.231 9.50666 390.031 13.37C393.895 17.17 395.826 21.7617 395.826 27.145H385.661C385.661 24.5483 384.711 22.3317 382.811 20.495C380.975 18.595 378.758 17.645 376.161 17.645C373.501 17.645 371.253 18.595 369.416 20.495C367.58 22.3317 366.661 24.5483 366.661 27.145C366.661 29.995 367.77 32.37 369.986 34.27C372.203 36.1067 374.863 37.6267 377.966 38.83C381.133 39.97 384.268 41.3 387.371 42.82C390.538 44.2767 393.23 46.62 395.446 49.85C397.663 53.0167 398.771 57.0067 398.771 61.82C398.771 68.2167 396.555 73.695 392.121 78.255C387.751 82.7517 382.431 85 376.161 85C369.891 85 364.54 82.7517 360.106 78.255C355.736 73.695 353.551 68.2167 353.551 61.82ZM410.222 64.765V34.745H402.717V24.675H410.222V7.57499H420.387V24.675H428.272V34.745H420.387V64.765C420.387 67.5517 421.369 69.9583 423.332 71.985C425.295 73.9483 427.67 74.93 430.457 74.93H433.687V85H430.457C424.884 85 420.102 83.0367 416.112 79.11C412.185 75.12 410.222 70.3383 410.222 64.765ZM486.206 24.39V61.44C486.206 67.9 483.895 73.4417 479.271 78.065C474.648 82.6883 469.106 85 462.646 85C456.186 85 450.645 82.6883 446.021 78.065C441.398 73.3783 439.086 67.8367 439.086 61.44V24.39H449.156V61.44C449.156 65.1133 450.486 68.28 453.146 70.94C455.806 73.5367 458.973 74.835 462.646 74.835C466.32 74.835 469.486 73.5367 472.146 70.94C474.806 68.28 476.136 65.1133 476.136 61.44V24.39H486.206ZM553.876 54.695C553.876 63.055 550.899 70.2117 544.946 76.165C539.056 82.055 531.931 85 523.571 85C515.211 85 508.054 82.055 502.101 76.165C496.211 70.2117 493.266 63.055 493.266 54.695C493.266 46.335 496.211 39.21 502.101 33.32C508.054 27.3667 515.211 24.39 523.571 24.39C529.144 24.39 534.306 25.7833 539.056 28.57V41.68C535.003 36.8667 529.841 34.46 523.571 34.46C517.998 34.46 513.216 36.4233 509.226 40.35C505.299 44.2767 503.336 49.0583 503.336 54.695C503.336 60.2683 505.299 65.0183 509.226 68.945C513.216 72.8717 517.998 74.835 523.571 74.835C529.144 74.835 533.894 72.8717 537.821 68.945C541.748 65.0183 543.711 60.2683 543.711 54.695V7.57499H553.876V54.695ZM562.016 24.39H572.086V85H562.016V24.39ZM563.441 9.095C564.454 8.08166 565.657 7.57499 567.051 7.57499C568.444 7.57499 569.616 8.08166 570.566 9.095C571.579 10.045 572.086 11.2167 572.086 12.61C572.086 14.0033 571.579 15.2067 570.566 16.22C569.616 17.17 568.444 17.645 567.051 17.645C565.657 17.645 564.454 17.17 563.441 16.22C562.491 15.2067 562.016 14.0033 562.016 12.61C562.016 11.2167 562.491 10.045 563.441 9.095ZM587.627 33.32C593.58 27.3667 600.737 24.39 609.097 24.39C617.457 24.39 624.582 27.3667 630.472 33.32C636.425 39.21 639.402 46.335 639.402 54.695C639.402 63.055 636.425 70.2117 630.472 76.165C624.582 82.055 617.457 85 609.097 85C600.737 85 593.58 82.055 587.627 76.165C581.737 70.2117 578.792 63.055 578.792 54.695C578.792 46.335 581.737 39.21 587.627 33.32ZM623.347 40.445C619.42 36.455 614.67 34.46 609.097 34.46C603.524 34.46 598.742 36.455 594.752 40.445C590.825 44.3717 588.862 49.1217 588.862 54.695C588.862 60.2683 590.825 65.0183 594.752 68.945C598.742 72.8717 603.524 74.835 609.097 74.835C614.67 74.835 619.42 72.8717 623.347 68.945C627.337 65.0183 629.332 60.2683 629.332 54.695C629.332 49.1217 627.337 44.3717 623.347 40.445ZM680.052 66.475C680.052 71.5417 678.247 75.9117 674.637 79.585C671.027 83.195 666.657 85 661.527 85C656.461 85 652.122 83.2267 648.512 79.68C644.902 76.07 643.066 71.7317 643.002 66.665H653.072C653.199 68.945 654.054 70.8767 655.637 72.46C657.284 74.0433 659.247 74.835 661.527 74.835C663.871 74.835 665.866 74.0433 667.512 72.46C669.159 70.8133 669.982 68.8183 669.982 66.475C669.982 64.2583 669.127 62.4217 667.417 60.965C665.771 59.445 663.744 58.21 661.337 57.26C658.994 56.2467 656.619 55.17 654.212 54.03C651.869 52.8267 649.842 51.085 648.132 48.805C646.486 46.4617 645.662 43.58 645.662 40.16C645.662 35.79 647.214 32.085 650.317 29.045C653.421 25.9417 657.157 24.39 661.527 24.39C665.897 24.39 669.634 25.9417 672.737 29.045C675.841 32.085 677.392 35.79 677.392 40.16H667.227C667.227 38.5767 666.657 37.2467 665.517 36.17C664.441 35.03 663.111 34.46 661.527 34.46C659.944 34.46 658.582 35.03 657.442 36.17C656.366 37.2467 655.827 38.5767 655.827 40.16C655.827 41.9333 656.651 43.4533 658.297 44.72C660.007 45.9233 662.034 47 664.377 47.95C666.784 48.8367 669.159 49.9133 671.502 51.18C673.846 52.4467 675.841 54.3783 677.487 56.975C679.197 59.5083 680.052 62.675 680.052 66.475Z" fill="white"/></g><defs><clipPath id="clip0_21_3"><rect width="684" height="97" fill="white"/></clipPath></defs></svg>`;
    introWrapper.appendChild(logoWrapper);

    container.appendChild(introWrapper);

    // Description
    const desc = elHTML('p', 'ktext-body k-anim k-slide-up mt-md mx-auto',
      meraki.description.replace('I lead', 'We lead'));
    desc.style.maxWidth = '750px';
    container.appendChild(desc);

    // Bullet list
    const list = el('ul', 'meraki-list k-stagger mt-md');
    meraki.list.forEach((item) => {
      const li = el('li', 'k-anim k-slide-right', item);
      list.appendChild(li);
    });
    container.appendChild(list);

    // Footer
    const footer = elHTML('p', 'ktext-body k-anim k-fade mt-md', meraki.footer);
    container.appendChild(footer);
  }

  // ============================================================
  // SCENE 3: Skills & Tools
  // ============================================================
  function buildSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    // Scene heading
    const label = el('p', 'ktext-label k-anim k-fade mb-sm', 'WHAT I WORK WITH');
    container.appendChild(label);

    const heading = el('h2', 'ktext-heading k-anim k-slam mb-lg', 'SKILLS & TOOLS');
    container.appendChild(heading);

    // Parent categories grid wrapper
    const categoriesGrid = el('div', 'skills-categories-grid');

    // Skill categories
    CONFIG.skills.forEach((category) => {
      const catDiv = el('div', 'skills-category k-anim k-slide-up');

      const catTitle = el('h3', 'ktext-subheading skills-category-title', category.title);
      catDiv.appendChild(catTitle);

      const grid = el('div', 'skills-grid k-stagger-fast');
      category.list.forEach((skill) => {
        const item = el('div', 'skill-item k-anim k-scale-in');

        if (skill.iconImg) {
          const img = document.createElement('img');
          img.src = skill.iconImg;
          img.alt = skill.name;
          item.appendChild(img);
        } else if (skill.icon) {
          const icon = el('i', skill.icon);
          item.appendChild(icon);
        }

        const span = el('span', '', skill.name);
        item.appendChild(span);
        grid.appendChild(item);
      });
      catDiv.appendChild(grid);
      categoriesGrid.appendChild(catDiv);
    });

    // Currently Learning
    if (CONFIG.currentlyLearning && CONFIG.currentlyLearning.length > 0) {
      const learnDiv = el('div', 'skills-category k-anim k-slide-up');

      const learnTitle = el('h3', 'ktext-subheading skills-category-title', 'Currently Learning');
      learnDiv.appendChild(learnTitle);

      const learnGrid = el('div', 'skills-grid k-stagger-fast');
      CONFIG.currentlyLearning.forEach((skill) => {
        const item = el('div', 'skill-item k-anim k-scale-in');
        if (skill.icon) {
          const icon = el('i', skill.icon);
          item.appendChild(icon);
        }
        const span = el('span', '', skill.name);
        item.appendChild(span);
        learnGrid.appendChild(item);
      });
      learnDiv.appendChild(learnGrid);
      categoriesGrid.appendChild(learnDiv);
    }

    container.appendChild(categoriesGrid);
  }

  // ============================================================
  // SCENE 4: Projects
  // ============================================================
  function buildProjects() {
    const container = document.getElementById('projects-content');
    if (!container) return;

    // Scene heading
    const label = el('p', 'ktext-label k-anim k-fade mb-sm', 'WHAT I\'VE CREATED');
    container.appendChild(label);

    const heading = el('h2', 'ktext-heading k-anim k-slam mb-lg', 'PROJECTS');
    container.appendChild(heading);

    CONFIG.projects.forEach((category) => {
      const catDiv = el('div', 'projects-category');

      // Category title
      const catTitle = el('h3', 'ktext-subheading projects-category-title k-anim k-slide-left', category.category);
      catDiv.appendChild(catTitle);

      // Determine layout based on category type
      if (category.layout === 'compact' && category.list[0] && category.list[0].imageUrl) {
        // Renders & Graphics — 3D Carousel
        build3DCarousel(catDiv, category.list, 'image');
      } else if (category.layout === 'compact' && category.list[0] && category.list[0].instagramId) {
        // Instagram embeds — media link cards
        buildMediaGrid(catDiv, category.list, 'instagram');
      } else if (category.layout === 'scrolling' || (category.list[0] && category.list[0].bandlabId)) {
        // Music — 3D Carousel
        build3DCarousel(catDiv, category.list, 'music');
      } else if (category.list[0] && (category.list[0].youtubeId || category.list[0].youtubeShortId)) {
        // YouTube — media cards
        buildMediaGrid(catDiv, category.list, 'youtube');
      } else {
        // Software projects — card grid
        buildProjectCards(catDiv, category.list);
      }

      container.appendChild(catDiv);
    });
  }

  function buildProjectCards(parent, projects) {
    const grid = el('div', 'projects-grid k-stagger');

    projects.forEach((project) => {
      const link = project.primaryUrl || project.githubUrl || '#';
      const card = document.createElement('a');
      card.href = link;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'project-card k-anim k-slide-up';

      const title = el('div', 'project-card-title');

      let faviconHTML = '';
      if (project.primaryUrl) {
        try {
          const urlObj = new URL(project.primaryUrl);
          const faviconUrl = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
          faviconHTML = `<img src="${faviconUrl}" alt="" class="project-favicon" style="width: 16px; height: 16px; margin-right: 8px; vertical-align: middle; filter: brightness(0) invert(1); opacity: 0.9;" />`;
        } catch (e) {
          console.error(e);
        }
      }

      title.innerHTML = faviconHTML + project.title;
      card.appendChild(title);

      if (project.description) {
        const desc = el('div', 'project-card-desc', project.description);
        card.appendChild(desc);
      }

      if (project.tags && project.tags.length) {
        const tags = el('div', 'project-card-tags');
        project.tags.forEach((t) => {
          tags.appendChild(el('span', 'project-tag', t));
        });
        card.appendChild(tags);
      }

      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  function buildMediaGrid(parent, items, type) {
    const grid = el('div', 'media-grid k-stagger');

    items.forEach((item) => {
      const card = el('div', 'media-card k-anim k-slide-up');

      const link = document.createElement('a');
      link.href = item.primaryUrl || '#';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      if (type === 'youtube') {
        card.classList.add('media-card--landscape');

        const id = item.youtubeId || item.youtubeShortId;
        if (id) {
          // YouTube thumbnail
          const img = document.createElement('img');
          img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
          img.alt = item.title;
          link.appendChild(img);
        }
        const text = el('div', 'media-card-title', item.title);
        link.appendChild(text);
      } else {
        // Instagram Reel — vertical layout
        card.classList.add('media-card--vertical');

        const placeholder = el('div', 'instagram-placeholder');
        const icon = el('i', 'fa-brands fa-instagram instagram-placeholder-icon');
        placeholder.appendChild(icon);
        link.appendChild(placeholder);

        const text = el('div', 'media-card-title', item.title || 'View Reel');
        link.appendChild(text);
      }

      card.appendChild(link);
      grid.appendChild(card);
    });

    parent.appendChild(grid);
  }

  function build3DCarousel(parent, items, type) {
    const scene = el('div', 'carousel-scene k-anim k-scale-in');
    const container = el('div', 'carousel-container');
    container.classList.add('type-' + type);

    // Dynamic sizing based on type and screen width
    let itemWidth = 560;
    let itemHeight = 280;
    const vw = window.innerWidth;

    if (type === 'music') {
      if (vw < 600) {
        // scale down proportionally for mobile viewports
        itemWidth = Math.max(280, vw - 40);
        itemHeight = Math.round(202 * (itemWidth / 560));
      } else {
        itemWidth = 560;
        itemHeight = 335;
      }
    } else if (type === 'image') {
      if (vw < 600) {
        // scale down proportionally for mobile viewports
        itemWidth = Math.max(280, vw - 40);
        itemHeight = Math.round(itemWidth * (9 / 16));
      } else {
        itemWidth = 560; // same width as music carousel items
        itemHeight = 315; // 16:9 aspect ratio
      }
    }

    // Set container and scene sizes
    container.style.width = itemWidth + 'px';
    container.style.height = itemHeight + 'px';
    scene.style.height = (itemHeight + 100) + 'px';
    scene.style.minHeight = (itemHeight + 100) + 'px';

    // Math for 3D layout
    const numItems = items.length;
    const theta = 360 / numItems;
    const radius = Math.round((itemWidth / 2) / Math.tan(Math.PI / numItems)) + 40;

    // Set initial transform of container translated back in Z space by -radius
    container.style.transform = `translateZ(${-radius}px) rotateY(0deg)`;

    // Interaction variables
    let currAngle = 0;
    let isDragging = false;
    let startX = 0;
    let dragAngle = 0;

    items.forEach((item, index) => {
      const panel = el('div', 'carousel-item');
      panel.style.width = itemWidth + 'px';
      panel.style.height = itemHeight + 'px';

      const angle = theta * index;
      panel.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

      if (type === 'image') {
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        img.loading = 'lazy';
        panel.appendChild(img);

        const title = el('div', 'carousel-item-title', item.title);
        panel.appendChild(title);
      } else if (type === 'music' && item.bandlabId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.bandlab.com/embed/shout/?id=${item.bandlabId}`;
        iframe.width = itemWidth;
        iframe.height = itemHeight;
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.loading = 'lazy';
        iframe.allow = 'autoplay';
        panel.appendChild(iframe);
      }

      // Hover centering logic for each panel
      panel.addEventListener('mouseenter', () => {
        if (isDragging) return;
        clearInterval(autoRotateInterval);

        // Target angle to face the front is -angle
        const targetAngle = -angle;
        const diff = ((targetAngle - currAngle) + 180) % 360 - 180;
        currAngle = currAngle + diff;

        container.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        container.style.transform = `translateZ(${-radius}px) rotateY(${currAngle}deg)`;
      });

      container.appendChild(panel);
    });

    scene.appendChild(container);
    parent.appendChild(scene);

    // Physical drag sensitivity based on radius
    const sensitivityMultiplier = 360 / (2 * Math.PI * radius);

    // Auto rotate
    let autoRotateInterval = setInterval(() => {
      if (!isDragging) {
        currAngle -= 0.5;
        container.style.transform = `translateZ(${-radius}px) rotateY(${currAngle}deg)`;
      }
    }, 30);

    // Stop auto-rotate on scene hover
    scene.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
    scene.addEventListener('mouseleave', () => {
      autoRotateInterval = setInterval(() => {
        if (!isDragging) {
          currAngle -= 0.5;
          container.style.transform = `translateZ(${-radius}px) rotateY(${currAngle}deg)`;
        }
      }, 30);
    });

    // Touch / Mouse Drag
    const onDragStart = (e) => {
      isDragging = true;
      startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      container.style.transition = 'none'; // remove transition during drag
    };

    const onDragMove = (e) => {
      if (!isDragging) return;
      const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
      const dx = x - startX;
      dragAngle = currAngle + (dx * sensitivityMultiplier);
      container.style.transform = `translateZ(${-radius}px) rotateY(${dragAngle}deg)`;
    };

    const onDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      currAngle = dragAngle;
      container.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
      container.style.transform = `translateZ(${-radius}px) rotateY(${currAngle}deg)`;
    };

    scene.addEventListener('mousedown', onDragStart);
    scene.addEventListener('touchstart', onDragStart, { passive: true });

    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove, { passive: true });

    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);
  }

  // ============================================================
  // SCENE 5: Experience & Education
  // ============================================================
  function buildExperience() {
    const container = document.getElementById('experience-content');
    if (!container) return;

    // Scene heading
    const label = el('p', 'ktext-label k-anim k-fade mb-sm', 'WHERE I\'VE BEEN');
    container.appendChild(label);

    const heading = el('h2', 'ktext-heading k-anim k-slam mb-lg', 'EXPERIENCE');
    container.appendChild(heading);

    // Experience entries
    CONFIG.experience.forEach((exp) => {
      const entry = el('div', 'experience-entry');

      const role = el('div', 'experience-role k-anim k-slide-left', exp.role);
      entry.appendChild(role);

      const company = el('div', 'experience-company k-anim k-slide-left', exp.company);
      entry.appendChild(company);

      const date = el('div', 'experience-date k-anim k-fade', exp.date);
      entry.appendChild(date);

      if (exp.duties && exp.duties.length) {
        const duties = el('ul', 'experience-duties k-stagger');
        exp.duties.forEach((duty) => {
          duties.appendChild(el('li', 'k-anim k-slide-right', duty));
        });
        entry.appendChild(duties);
      }

      container.appendChild(entry);
    });

    // Education
    const eduHeading = el('h2', 'ktext-heading k-anim k-slam mt-lg mb-md', 'EDUCATION');
    container.appendChild(eduHeading);

    const eduBlock = el('div', 'education-block k-anim k-slide-up');

    const institution = el('div', 'education-institution', CONFIG.education.institution);
    eduBlock.appendChild(institution);

    const degree = el('div', 'education-degree', CONFIG.education.degree);
    eduBlock.appendChild(degree);

    // Certifications
    if (CONFIG.certifications && CONFIG.certifications.length) {
      const certsLabel = el('p', 'ktext-label mt-md mb-sm', 'CERTIFICATIONS');
      eduBlock.appendChild(certsLabel);

      const certsList = el('ul', 'certs-list k-stagger-fast');
      CONFIG.certifications.forEach((cert) => {
        certsList.appendChild(el('li', 'k-anim k-slide-up', cert));
      });
      eduBlock.appendChild(certsList);
    }

    container.appendChild(eduBlock);
  }

  // ============================================================
  // SCENE 6: Contact / Outro
  // ============================================================
  function buildContact() {
    const container = document.getElementById('contact-content');
    if (!container) return;

    const contact = CONFIG.contact;

    // Heading
    const heading = el('h2', 'ktext-heading k-anim k-slam', 'LET\'S CONNECT');
    container.appendChild(heading);

    // Subtitle
    const subtitle = el('p', 'ktext-body k-anim k-slide-up mt-md', contact.text);
    container.appendChild(subtitle);

    // Email — typewriter style
    const emailWrapper = el('div', 'contact-email k-anim k-slide-up mt-md');
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${contact.email}`;
    emailLink.textContent = contact.email;
    emailLink.style.color = 'inherit';
    emailWrapper.appendChild(emailLink);
    container.appendChild(emailWrapper);

    // Social links
    const linksDiv = el('div', 'contact-links k-stagger');

    // Flatten all social link categories
    if (CONFIG.headerSocial) {
      CONFIG.headerSocial.forEach((group) => {
        group.links.forEach((link) => {
          const a = document.createElement('a');
          a.href = link.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'contact-link k-anim k-scale-in';

          const icon = el('i', link.icon);
          a.appendChild(icon);

          const text = el('span', '', link.platform);
          a.appendChild(text);

          linksDiv.appendChild(a);
        });
      });
    }

    // Telegram & Messenger
    if (contact.telegram) {
      const tg = document.createElement('a');
      tg.href = contact.telegram;
      tg.target = '_blank';
      tg.rel = 'noopener noreferrer';
      tg.className = 'contact-link k-anim k-scale-in';
      tg.appendChild(el('i', 'fa-brands fa-telegram'));
      tg.appendChild(el('span', '', 'Telegram'));
      linksDiv.appendChild(tg);
    }

    if (contact.messenger) {
      const msg = document.createElement('a');
      msg.href = contact.messenger;
      msg.target = '_blank';
      msg.rel = 'noopener noreferrer';
      msg.className = 'contact-link k-anim k-scale-in';
      msg.appendChild(el('i', 'fa-brands fa-facebook-messenger'));
      msg.appendChild(el('span', '', 'Messenger'));
      linksDiv.appendChild(msg);
    }

    container.appendChild(linksDiv);

    // Outro
    const outro = el('p', 'ktext-label contact-outro k-anim k-fade mt-lg',
      '© ' + new Date().getFullYear() + ' Omar Mohamed. Built with ♥');
    container.appendChild(outro);
  }

  // ============================================================
  // INIT — Build all scenes, then set up sub-element observers
  // ============================================================
  function init() {
    buildHero();
    buildMeraki();
    buildSkills();
    buildProjects();
    buildExperience();
    buildContact();

    // After building DOM, set up granular scroll-triggered animations
    // This observes individual elements within scenes for sub-scene level triggering
    if (window.ScrollEngine) {
      // Observe project cards, skill items, experience entries individually
      ScrollEngine.observeElements('.project-card', { threshold: 0.1 });
      ScrollEngine.observeElements('.skill-item', { threshold: 0.1 });
      ScrollEngine.observeElements('.experience-entry .k-anim', { threshold: 0.15 });
      ScrollEngine.observeElements('.media-card', { threshold: 0.1 });
      ScrollEngine.observeElements('.render-card', { threshold: 0.1 });
      ScrollEngine.observeElements('.music-card', { threshold: 0.1 });
      ScrollEngine.observeElements('.education-block', { threshold: 0.15 });
      ScrollEngine.observeElements('.contact-link', { threshold: 0.1 });
      ScrollEngine.observeElements('.certs-list .k-anim', { threshold: 0.1 });
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();