// scripts/portfolio-main.js
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Cache all necessary DOM elements at once
    const domCache = {
      heroContainer: document.querySelector(".hero-container"),
      aboutMeContent: document.querySelector(".about-me-content"),
      merakiContent: document.querySelector(".meraki-content"),
      socialGroups: document.querySelectorAll(".social-group"), // targets both desktop and mobile top header
      skillsContainer: document.querySelector(".skills-container"),
      projectsContainer: document.querySelector("#projects-wrapper"),
      experienceTimeline: document.querySelector(".experience-timeline"),
      educationContainer: document.querySelector(".education-container"),
      contactInfo: document.querySelector(".contact-info"),
      modal: document.getElementById("project-modal"),
    };

    // Run all render and setup functions
    initializeCritical(domCache);
    initializeNonCritical(domCache);

    // Set up animations after a slight delay to ensure content is in place
    setTimeout(() => {
      if (
        window.MerakiAnimations &&
        typeof window.MerakiAnimations.scroll.observe === "function"
      ) {
        window.MerakiAnimations.scroll.observe(".animate-on-scroll");
      }
    }, 200);

    // Set up scroll progress indicator
    setupScrollProgress();
  });

  // Functions that need to run immediately for above-the-fold content
  function initializeCritical(dom) {
    renderHero(dom.heroContainer);
    renderAboutMe(dom.aboutMeContent);
    renderHeaderSocial(dom.socialGroups);
    renderSkills(dom.skillsContainer);
    renderMerakiStudios(dom.merakiContent);
    // Set body as loaded immediately since we removed the loader
    document.body.classList.add("loaded");
  }

  // Functions for below-the-fold content that can be deferred
  function initializeNonCritical(dom) {
    renderProjects(dom.projectsContainer);
    renderExperience(dom.experienceTimeline);
    renderEducationAndCerts(dom.educationContainer);
    renderFooter(dom.contactInfo);
    setupScrollHighlight();
    setupProjectModal(dom.modal, dom.projectsContainer);
  }

  // --- RENDER FUNCTIONS ---
  function renderHero(container) {
    if (!container) return;
    const h = PORTFOLIO_CONFIG.hero;
    container.innerHTML = `
        <img src="${h.profilePic}" alt="${h.name}" class="hero-profile-pic animate-on-scroll" loading="eager" fetchpriority="high" />
        <div class="hero-text">
            <h1 class="animate-on-scroll" style="--delay: 100ms">${h.name}</h1>
            <h3 class="animate-on-scroll" style="--delay: 200ms">${h.title}</h3>
            <p class="animate-on-scroll" style="--delay: 300ms">${h.bio}</p>
        </div>
    `;
  }

  function renderAboutMe(container) {
    if (!container || !PORTFOLIO_CONFIG.aboutMe) return;
    const paragraphs = PORTFOLIO_CONFIG.aboutMe.paragraphs
      .map(
        (p, i) =>
          `<p style="margin-bottom: 1.5rem; ${i === 0 ? "--delay: 100ms" : i === 1 ? "--delay: 200ms" : "--delay: 300ms"}" class="animate-on-scroll">${p}</p>`,
      )
      .join("");
    container.innerHTML = paragraphs;
  }

  function renderMerakiStudios(container) {
    if (!container || !PORTFOLIO_CONFIG.merakiStudios) return;
    const m = PORTFOLIO_CONFIG.merakiStudios;
    container.innerHTML = `
        <h2 class="animate-on-scroll">${m.title}</h2>
        <p class="animate-on-scroll" style="margin-bottom: 2rem; color: var(--text-muted); font-size: 1.1rem;">${m.description}</p>
        <ul class="animate-on-scroll" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; align-items: start; max-width: 600px; margin: 0 auto; text-align: left; color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem;">
            ${m.list.map(item => `<li><i class="fa-solid fa-check" style="color: var(--primary-color); margin-right: 15px;"></i>${item}</li>`).join('')}
        </ul>
        <p class="animate-on-scroll" style="color: var(--text-muted); font-size: 1.1rem;">${m.footer}</p>
    `;
  }

  function renderHeaderSocial(containers) {
    if (!containers || containers.length === 0) return;
    const htmlSnippet = PORTFOLIO_CONFIG.headerSocial
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" title="${s.platform}" aria-label="${s.platform}"><i class="${s.icon}"></i></a>
    `,
      )
      .join("");
      
    containers.forEach((c) => {
        c.innerHTML = htmlSnippet;
    });
  }

  function renderSkills(container) {
    if (!container) return;
    container.innerHTML = PORTFOLIO_CONFIG.skills
      .map(
        (skillCategory) => `
        <div class="skill-card animate-on-scroll">
            <h3>${skillCategory.title}</h3>
            <ul>
                ${skillCategory.list.map((skill) => {
                    if (skill.iconImg) {
                        return `<li><img src="${skill.iconImg}" alt="${skill.name} icon" style="width: 25px; height: 25px; object-fit: contain;" />${skill.name}</li>`;
                    }
                    return `<li><i class="${skill.icon}"></i>${skill.name}</li>`;
                }).join("")}
            </ul>
        </div>
    `,
      )
      .join("");
  }

  function renderProjects(container) {
    if (!container) return;
    
    // Show skeleton loading placeholders
    container.innerHTML = '<div class="projects-container animate-on-scroll is-visible">' +
      Array(6).fill('').map(() => `
        <div class="skeleton-card">
          <div class="skeleton-media"></div>
          <div class="skeleton-text">
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
          </div>
        </div>
      `).join('') + '</div>';

    // Small delay so skeleton is visible before real content replaces it
    requestAnimationFrame(() => {
      container.innerHTML = '';
      const frag = document.createDocumentFragment();

      PORTFOLIO_CONFIG.projects.forEach(categoryData => {
        if (!categoryData.list || categoryData.list.length === 0) return;

        // Category Header
        const header = document.createElement("h3");
        header.className = "category-header animate-on-scroll is-visible";
        header.textContent = categoryData.category;
        frag.appendChild(header);

        const grid = document.createElement("div");
        grid.className = categoryData.layout === "compact" 
          ? "projects-container compact animate-on-scroll is-visible"
          : "projects-container animate-on-scroll is-visible";
        
        categoryData.list.forEach(project => {
          const div = document.createElement("div");
          div.className = categoryData.layout === "compact" ? "project-card compact" : "project-card";
          div.dataset.id = project.id;
          
          const tags = project.tags || [];

          // Favicon
          let faviconUrl = '';
          if (project.primaryUrl) {
            try {
              const urlObj = new URL(project.primaryUrl);
              faviconUrl = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
            } catch(e) {}
          }



          // Generate media preview HTML
          let mediaHTML = "";
          if (project.youtubeId) {
            const thumbUrl = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
            mediaHTML = `<div class="project-image-container project-embed-container video-thumbnail" data-yt-id="${project.youtubeId}" data-yt-aspect="16/9">
              <img src="${thumbUrl}" alt="${project.title} – YouTube thumbnail" loading="lazy" decoding="async">
              <div class="play-button-overlay"></div>
            </div>`;
          } else if (project.youtubeShortId) {
            const thumbUrl = `https://img.youtube.com/vi/${project.youtubeShortId}/hqdefault.jpg`;
            mediaHTML = `<div class="project-image-container project-embed-container video-thumbnail" data-yt-id="${project.youtubeShortId}" data-yt-aspect="9/16">
              <img src="${thumbUrl}" alt="${project.title} – YouTube Short thumbnail" loading="lazy" decoding="async">
              <div class="play-button-overlay"></div>
            </div>`;
          } else if (project.instagramId) {
            mediaHTML = `<div class="project-image-container ig-placeholder" data-ig-url="${project.primaryUrl}">
              <i class="fa-brands fa-instagram"></i>
              <span>View on Instagram</span>
            </div>`;
          } else if (project.imageUrl) {
            mediaHTML = `<div class="project-image-container render-image-container">
              <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" decoding="async">
            </div>`;
          } else if (project.spotifyTrackId) {
            mediaHTML = `<div class="project-image-container spotify-embed-container">
              <iframe title="${project.title} on Spotify" style="border-radius:12px; border: none; width: 100%; height: 152px;" src="https://open.spotify.com/embed/track/${project.spotifyTrackId}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>`;
          }

          const faviconHTML = faviconUrl 
            ? `<img src="${faviconUrl}" alt="${project.title} icon" class="${categoryData.layout === 'compact' ? 'project-favicon' : 'project-favicon--large'}" onerror="this.style.display='none'">`
            : '';

          if (categoryData.layout === "compact") {
            div.innerHTML = `
              <a href="#" class="project-card-link" aria-label="View details for ${project.title}" data-modal-trigger="${project.id}">
                ${mediaHTML}
                <div class="project-content-compact">
                  <h3>${faviconHTML}${project.title}</h3>
                </div>
              </a>`;
          } else {
            div.innerHTML = `
              <a href="#" class="project-card-link" aria-label="View details for ${project.title}" data-modal-trigger="${project.id}">
                ${mediaHTML}
                <div class="project-content${mediaHTML ? ' project-content--with-media' : ''}">
                  <h3>${faviconHTML}${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="project-tags">
                    ${tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                  </div>
                </div>
              </a>
              <div class="project-links">
                ${project.primaryUrl ? `<a href="${project.primaryUrl}" target="_blank" rel="noopener" class="project-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i>Visit</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-btn project-btn--outline"><i class="fa-brands fa-github"></i>Source</a>` : ''}
              </div>`;
          }
          grid.appendChild(div);
        });
        
        frag.appendChild(grid);
      });
      
      container.appendChild(frag);
      
      setTimeout(() => {
        if (window.MerakiAnimations && typeof window.MerakiAnimations.scroll.observe === 'function') {
          window.MerakiAnimations.scroll.observe('.project-card');
          window.MerakiAnimations.scroll.observe('#projects-wrapper h3');
        }
      }, 100);

    });
  }

  function renderExperience(container) {
    if (!container) return;
    container.innerHTML = PORTFOLIO_CONFIG.experience
      .map(
        (job) => `
        <div class="timeline-item animate-on-scroll">
            <div class="timeline-dot"></div>
            <h3>${job.role}</h3>
            <h4>${job.company}</h4>
            <div class="timeline-date">${job.date}</div>
            <ul>
                ${job.duties.map((duty) => `<li>${duty}</li>`).join("")}
            </ul>
        </div>
    `,
      )
      .join("");
  }

  function renderEducationAndCerts(container) {
    if (!container) return;
    const edu = PORTFOLIO_CONFIG.education;
    container.innerHTML = `
        <div class="education-item animate-on-scroll">
            <h3>${edu.institution}</h3>
            <p>${edu.degree}</p>
        </div>
        <div class="certs-list animate-on-scroll">
            ${PORTFOLIO_CONFIG.certifications.map((cert) => `<div class="cert-item">${cert}</div>`).join("")}
        </div>
    `;
  }

  function renderFooter(container) {
    if (!container) return;
    const c = PORTFOLIO_CONFIG.contact;
    container.innerHTML = `
        <p class="animate-on-scroll">${c.text}</p>
        <div class="contact-links animate-on-scroll" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="mailto:${c.email}"><i class="fa-solid fa-envelope" style="margin-right: 8px;"></i>${c.email}</a>
            ${c.discord ? `<a href="https://discord.com/users/${c.discord}" target="_blank" rel="noopener"><i class="fa-brands fa-discord" style="margin-right: 8px;"></i>${c.discord}</a>` : ''}
        </div>
      `;
  }

  function setupScrollHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(
      ".desktop-nav .nav-btn, .mobile-bottom-nav .nav-btn"
    );
    if (!sections.length || !navLinks.length) return;

    // Use a center-band detection: when section crosses the middle of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to center (largest intersection ratio)
        let bestEntry = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (
            !bestEntry ||
            entry.intersectionRatio > bestEntry.intersectionRatio
          ) {
            bestEntry = entry;
          }
        }
        if (!bestEntry) return;

        const id = bestEntry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isActive);
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));

    // Add smooth scroll behavior to nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = document.querySelector(".desktop-header")?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - (headerHeight ? headerHeight + 20 : 0);

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Provide immediate visual feedback while smooth scrolling
          navLinks.forEach((l) => {
              const isActive = l.getAttribute("href") === `#${targetId}`;
              l.classList.toggle("active", isActive);
          });
        }
      });
    });

    // Initialize active state on load (e.g., refresh at mid-page)
    requestAnimationFrame(() => {
      let current = sections[0];
      const viewportCenter = window.innerHeight / 2;
      let bestDist = Infinity;
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const secCenter = rect.top + rect.height / 2;
        const dist = Math.abs(secCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          current = sec;
        }
      });
      const id = current.getAttribute("id");
      navLinks.forEach((link) =>
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
      );
    });
  }

  function setupScrollProgress() {
    const progressBar = document.querySelector(".scroll-progress");
    if (!progressBar) return;

    let ticking = false;
    let lastScrollY = 0;

    function updateScrollProgress() {
      const scrollTop = window.pageYOffset;

      // Only update if scroll changed significantly
      if (Math.abs(scrollTop - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progressBar.style.width = Math.min(scrollPercent, 100) + "%";
      lastScrollY = scrollTop;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupProjectModal(modal, container) {
    if (!modal || !container) return;
    const m = {
      title: modal.querySelector("#modal-project-title"),
      video: modal.querySelector("#modal-project-video"),
      desc: modal.querySelector("#modal-project-description"),
      links: modal.querySelector("#modal-project-links"),
    };
    const openModal = (project) => {
      if (!project) return;
      m.title.textContent = project.title;
      m.desc.textContent = project.fullDescription || project.description;
      
      const links = project.links || [];
      if (project.primaryUrl && !links.find(l => l.url === project.primaryUrl)) {
          links.push({text: "Visit", url: project.primaryUrl});
      }
      if (project.githubUrl && !links.find(l => l.url === project.githubUrl)) {
          links.push({text: "Source", url: project.githubUrl});
      }
      m.links.innerHTML = links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" rel="noopener" class="project-btn">${l.text}</a>`,
        )
        .join("");
        
      m.video.innerHTML = "";
      m.video.style.display = "";
      m.video.style.justifyContent = "";
      if (project.youtubeId && project.youtubeId !== "YOUR_YOUTUBE_ID_HERE") {
        m.video.style.display = "block";
        m.video.innerHTML = `<iframe title="${project.title} – YouTube" style="aspect-ratio: 16/9; width: 100%; border-radius: 8px; border: none;" src="https://www.youtube.com/embed/${project.youtubeId}?autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else if (project.youtubeShortId) {
        m.video.style.display = "flex";
        m.video.style.justifyContent = "center";
        m.video.innerHTML = `<iframe title="${project.title} – YouTube Short" style="aspect-ratio: 9/16; height: 75vh; max-height: 800px; border-radius: 8px; border: none;" src="https://www.youtube.com/embed/${project.youtubeShortId}?autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else if (project.instagramId) {
        // Instagram: open in new tab instead of embedding
        window.open(project.primaryUrl, '_blank', 'noopener');
        return;
      } else if (project.imageUrl) {
        m.video.style.display = "flex";
        m.video.style.justifyContent = "center";
        m.video.innerHTML = `<img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; border-radius: 8px; max-height: 80vh; object-fit: contain;">`;
      } else if (project.spotifyTrackId) {
        m.video.style.display = "block";
        m.video.innerHTML = `<iframe title="${project.title} on Spotify" style="border-radius:12px; border: none; width: 100%; height: 352px;" src="https://open.spotify.com/embed/track/${project.spotifyTrackId}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      } else {
        m.video.style.display = "none";
      }
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
      m.video.innerHTML = ""; // Stop video playback
    };
    container.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-modal-trigger]");
      if (trigger) {
        e.preventDefault();
        const projectId = trigger.dataset.modalTrigger;
        let project = null;
        for (const cat of PORTFOLIO_CONFIG.projects) {
          project = cat.list.find((p) => p.id === projectId);
          if (project) break;
        }
        openModal(project);
      }
    });
    modal
      .querySelector(".modal-close-btn")
      ?.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
})();
