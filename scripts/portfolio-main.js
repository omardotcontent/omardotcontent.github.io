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
      projectsContainer: document.querySelector(".projects-container"),
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
                ${skillCategory.list.map((skill) => `<li><i class="${skill.icon}"></i>${skill.name}</li>`).join("")}
            </ul>
        </div>
    `,
      )
      .join("");
  }

  function renderProjects(container) {
    if (!container) return;
    
    // Clear out any previous content (like "Loading...")
    container.innerHTML = ''; 
    const frag = document.createDocumentFragment();
    
    PORTFOLIO_CONFIG.projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "project-card animate-on-scroll is-visible";
      div.dataset.id = project.id;
      
      const tags = project.tags || [];

      // Extract hostname to get favicon using Google's Favicon service
      let faviconUrl = '';
      if (project.primaryUrl) {
          try {
              const urlObj = new URL(project.primaryUrl);
              faviconUrl = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
          } catch(e) {
              console.error("Invalid URL provided for project:", project.primaryUrl);
          }
      }

      // Build the header with favicon, title, and optional github badge
      div.innerHTML = `
        <a href="${project.primaryUrl || '#'}" target="_blank" class="project-card-link" aria-label="View details for ${project.title}">
            <div class="project-content" style="padding-top: 2rem;">
              <h3 style="display: flex; align-items: center; gap: 0.75rem;">
                 ${faviconUrl ? `<img src="${faviconUrl}" alt="Icon" style="width: 24px; height: 24px; border-radius: 4px;" onerror="this.style.display='none'">` : ''}
                 ${project.title}
              </h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
            </div>
        </a>
        <div class="project-links" style="gap: 1rem;">
            ${project.primaryUrl ? `<a href="${project.primaryUrl}" target="_blank" class="project-btn" style="flex: 1; text-align: center;"><i class="fa-solid fa-arrow-up-right-from-square" style="margin-right: 8px;"></i> Visit</a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-btn" style="flex: 1; text-align: center; background: transparent; border: 1px solid var(--text-muted); color: var(--text-color);"><i class="fa-brands fa-github" style="margin-right: 8px;"></i> Source</a>` : ''}
        </div>
      `;
      frag.appendChild(div);
    });
    
    container.appendChild(frag);
    
    setTimeout(() => {
        if (window.MerakiAnimations && typeof window.MerakiAnimations.scroll.observe === 'function') {
            window.MerakiAnimations.scroll.observe('.project-card');
        }
    }, 100);
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
        <a href="mailto:${c.email}" class="animate-on-scroll">${c.email}</a>
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
      m.desc.textContent = project.fullDescription;
      m.links.innerHTML = project.links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" class="project-btn">${l.text}</a>`,
        )
        .join("");
      m.video.innerHTML = "";
      if (project.youtubeId && project.youtubeId !== "YOUR_YOUTUBE_ID_HERE") {
        m.video.style.display = "block";
        m.video.innerHTML = `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
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
        const project = PORTFOLIO_CONFIG.projects.find(
          (p) => p.id === projectId,
        );
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
