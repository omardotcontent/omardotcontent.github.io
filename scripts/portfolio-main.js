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
      learningContainer: document.querySelector(".learning-container"),
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
    renderLearning(dom.learningContainer);
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
    setupThemeToggle();
  }

  // --- RENDER FUNCTIONS ---
  // Helper for simulated loading
  function simulateLoading(container, skeletonHTML, renderContentFn, delay = 600) {
    if (!container) return;
    container.innerHTML = skeletonHTML;
    setTimeout(() => {
      container.innerHTML = "";
      renderContentFn(container);
      // Re-trigger scroll observer for new elements if animation system exists
      if (window.MerakiAnimations && typeof window.MerakiAnimations.scroll.observe === "function") {
        window.MerakiAnimations.scroll.observe(".animate-on-scroll");
      }
    }, delay);
  }

  function renderHero(container) {
    const skeleton = `
      <div style="display: flex; flex-direction: row; gap: 4rem; width: 100%; align-items: center; justify-content: center; flex-wrap: wrap;">
        <div class="skeleton-media" style="width: 250px; height: 250px; border-radius: 50%; flex-shrink: 0;"></div>
        <div class="skeleton-text" style="flex-grow: 1; max-width: 600px;">
          <div class="skeleton-line" style="width: 70%; height: 4rem; margin-bottom: 1rem;"></div>
          <div class="skeleton-line" style="width: 50%; height: 2rem; margin-bottom: 2rem;"></div>
          <div class="skeleton-line" style="width: 100%; height: 1.2rem; margin-bottom: 0.5rem;"></div>
          <div class="skeleton-line" style="width: 90%; height: 1.2rem; margin-bottom: 0.5rem;"></div>
          <div class="skeleton-line" style="width: 80%; height: 1.2rem;"></div>
        </div>
      </div>
    `;
    simulateLoading(container, skeleton, (cont) => {
      const h = PORTFOLIO_CONFIG.hero;
      cont.innerHTML = `
          <img src="${h.profilePic}" alt="${h.name}" class="hero-profile-pic animate-on-scroll" loading="eager" fetchpriority="high" />
          <div class="hero-text">
              <h1 class="animate-on-scroll" style="--delay: 100ms">${h.name}</h1>
              <h3 class="animate-on-scroll" style="--delay: 200ms">${h.title}</h3>
              ${h.bio ? `<p class="animate-on-scroll" style="--delay: 300ms">${h.bio}</p>` : ""}
          </div>
      `;
    }, 500);
  }

  function renderAboutMe(container) {
    if (!PORTFOLIO_CONFIG.aboutMe) return;
    const skeleton = `
      <div class="skeleton-text" style="width: 100%; text-align: left;">
        <div class="skeleton-line" style="width: 30%; height: 1.5rem; margin-bottom: 0.8rem;"></div>
        <div class="skeleton-line" style="width: 90%; height: 1.2rem; margin-bottom: 0.5rem;"></div>
        <div class="skeleton-line" style="width: 85%; height: 1.2rem; margin-bottom: 2rem;"></div>
        <div class="skeleton-line" style="width: 40%; height: 1.5rem; margin-bottom: 0.8rem;"></div>
        <div class="skeleton-line" style="width: 95%; height: 1.2rem; margin-bottom: 0.5rem;"></div>
        <div class="skeleton-line" style="width: 70%; height: 1.2rem; margin-bottom: 1rem;"></div>
      </div>
    `;
    simulateLoading(container, skeleton, (cont) => {
      if (PORTFOLIO_CONFIG.aboutMe.sections) {
        const sectionsHtml = PORTFOLIO_CONFIG.aboutMe.sections
          .map(
            (section, i) => `
            <div class="about-me-part animate-on-scroll" style="--delay: ${i * 100}ms">
              <h3 style="color: var(--primary-color); font-size: 1.4rem; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.75rem;">
                ${section.icon ? `<i class="${section.icon}" style="font-size: 1.1rem; opacity: 0.8;"></i>` : ''}
                ${section.subtitle}
              </h3>
              <p style="text-align: left; line-height: 1.8; margin-bottom: 0;">${section.content}</p>
            </div>
            `
          )
          .join("");
        cont.innerHTML = `<div class="about-me-grid">${sectionsHtml}</div>`;
      } else if (PORTFOLIO_CONFIG.aboutMe.paragraphs) {
        const paragraphs = PORTFOLIO_CONFIG.aboutMe.paragraphs.map((p, i) => `<p style="margin-bottom: 1.5rem; ${i === 0 ? "--delay: 100ms" : i === 1 ? "--delay: 200ms" : "--delay: 300ms"}" class="animate-on-scroll">${p}</p>`).join("");
        cont.innerHTML = paragraphs;
      }
    }, 600);
  }

  function renderMerakiStudios(container) {
    if (!PORTFOLIO_CONFIG.merakiStudios) return;
    const skeleton = `
      <div class="skeleton-text" style="width: 100%; text-align: center;">
        <div class="skeleton-line" style="width: 40%; height: 2.5rem; margin: 0 auto 2rem;"></div>
        <div class="skeleton-line" style="width: 80%; height: 1.2rem; margin: 0 auto 2rem;"></div>
        <div class="skeleton-line" style="width: 60%; height: 1.2rem; margin: 0 auto 1rem;"></div>
        <div class="skeleton-line" style="width: 50%; height: 1.2rem; margin: 0 auto 1rem;"></div>
      </div>
    `;
    simulateLoading(container, skeleton, (cont) => {
      const m = PORTFOLIO_CONFIG.merakiStudios;
      cont.innerHTML = `
          <h2 class="animate-on-scroll">${m.title}</h2>
          <p class="animate-on-scroll" style="margin-bottom: 2rem; color: var(--text-muted); font-size: 1.1rem;">${m.description}</p>
          <ul class="animate-on-scroll" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; align-items: start; max-width: 600px; margin: 0 auto; text-align: left; color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem;">
              ${m.list.map(item => `<li><i class="fa-solid fa-check" style="color: var(--primary-color); margin-right: 15px;"></i>${item}</li>`).join('')}
          </ul>
          <p class="animate-on-scroll" style="color: var(--text-muted); font-size: 1.1rem;">${m.footer}</p>
      `;
    }, 700);
  }

  function renderHeaderSocial(containers) {
    if (!containers || containers.length === 0) return;
    const htmlSnippet = PORTFOLIO_CONFIG.headerSocial
      .map(
        (category) => {
          const links = category.links.map(
            (s) => `<a href="${s.url}" target="_blank" title="${s.platform}" aria-label="${s.platform}"><i class="${s.icon}"></i></a>`
          ).join("");
          return `<div class="social-category">${links}</div>`;
        }
      )
      .join('<div class="social-divider"></div>');
      
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
                        const lightAttr = skill.iconImgLight ? `data-dark-src="${skill.iconImg}" data-light-src="${skill.iconImgLight}" class="theme-image"` : '';
                        return `<li><img src="${skill.iconImg}" ${lightAttr} alt="${skill.name} icon" style="width: 25px; height: 25px; object-fit: contain;" />${skill.name}</li>`;
                    }
                    return `<li><i class="${skill.icon}"></i>${skill.name}</li>`;
                }).join("")}
            </ul>
        </div>
    `,
      )
      .join("");
  }

  function renderLearning(container) {
    if (!container) return;
    if (!PORTFOLIO_CONFIG.currentlyLearning || PORTFOLIO_CONFIG.currentlyLearning.length === 0) {
      const section = container.closest('.learning-section');
      if (section) section.style.display = 'none';
      return;
    }
    container.innerHTML = PORTFOLIO_CONFIG.currentlyLearning
      .map(
        (item) => {
          let iconHTML = '';
          if (item.iconImg) {
             const lightAttr = item.iconImgLight ? `data-dark-src="${item.iconImg}" data-light-src="${item.iconImgLight}" class="theme-image"` : '';
             iconHTML = `<img src="${item.iconImg}" ${lightAttr} alt="${item.name} icon" style="width: 20px; height: 20px; object-fit: contain;" />`;
          } else if (item.icon) {
             iconHTML = `<i class="${item.icon}"></i>`;
          }
          return `<div class="learning-tag">${iconHTML}<span>${item.name}</span></div>`;
        }
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
        if (categoryData.layout === "compact") {
          grid.className = "projects-container compact animate-on-scroll is-visible";
        } else if (categoryData.layout === "scrolling") {
          grid.className = "projects-container scrolling animate-on-scroll is-visible";
        } else {
          grid.className = "projects-container animate-on-scroll is-visible";
        }
        
        categoryData.list.forEach(project => {
          const div = document.createElement("div");
          if (categoryData.layout === "compact") {
            div.className = "project-card compact";
          } else if (categoryData.layout === "scrolling") {
            div.className = "project-card scrolling";
          } else {
            div.className = "project-card";
          }
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
          if (project.bandlabId || project.spotifyTrackId) {
            div.className = "embed-wrapper animate-on-scroll";
            if (project.bandlabId) {
              div.innerHTML = `<iframe title="${project.title} on BandLab" style="border-radius:12px; border: none; width: 100%; height: 360px; display: block; margin: 0 auto; overflow: hidden;" src="https://www.bandlab.com/embed/shout/?id=${project.bandlabId}" allowfullscreen loading="lazy"></iframe>`;
            } else {
              div.innerHTML = `<iframe title="${project.title} on Spotify" style="border-radius:12px; border: none; width: 100%; height: 352px; display: block; margin: 0 auto; overflow: hidden;" src="https://open.spotify.com/embed/track/${project.spotifyTrackId}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            }
            grid.appendChild(div);
            return; // Skip normal card generation
          }

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
    const initialTheme = document.documentElement.classList.contains("light-mode") ? "light" : "dark";
    container.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; gap: 4rem; flex-wrap: wrap; max-width: 1000px; margin: 0 auto;">
        <div style="flex: 1; min-width: 300px; text-align: left;">
          <h3 class="animate-on-scroll" style="font-size: 1.8rem; margin-bottom: 1rem; color: var(--primary-color);">Get In Touch</h3>
          <p class="animate-on-scroll">${c.text}</p>
          <div class="contact-links animate-on-scroll" style="display: flex; justify-content: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
              <a href="mailto:${c.email}"><i class="fa-solid fa-envelope" style="margin-right: 8px;"></i>${c.email}</a>
              ${c.discord ? `<a href="https://discord.com/users/${c.discord}" target="_blank" rel="noopener"><i class="fa-brands fa-discord" style="margin-right: 8px;"></i>${c.discord}</a>` : ''}
              ${c.phone ? `<a href="tel:${c.phone}"><i class="fa-solid fa-phone" style="margin-right: 8px;"></i>${c.phone}</a>` : ''}
              ${c.whatsapp ? `<a href="${c.whatsapp}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" style="margin-right: 8px;"></i>WhatsApp</a>` : ''}
              ${c.telegram ? `<a href="${c.telegram}" target="_blank" rel="noopener"><i class="fa-brands fa-telegram" style="margin-right: 8px;"></i>Telegram</a>` : ''}
              ${c.messenger ? `<a href="${c.messenger}" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-messenger" style="margin-right: 8px;"></i>Messenger</a>` : ''}
              ${c.linkedin ? `<a href="${c.linkedin}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin" style="margin-right: 8px;"></i>LinkedIn</a>` : ''}
              ${c.twitter ? `<a href="${c.twitter}" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter" style="margin-right: 8px;"></i>Twitter / X</a>` : ''}
              ${c.behance ? `<a href="${c.behance}" target="_blank" rel="noopener"><i class="fa-brands fa-behance" style="margin-right: 8px;"></i>Behance</a>` : ''}
              ${c.upwork ? `<a href="${c.upwork}" target="_blank" rel="noopener"><i class="fa-brands fa-upwork" style="margin-right: 8px;"></i>Upwork</a>` : ''}
              ${c.calendly ? `<a href="${c.calendly}" target="_blank" rel="noopener"><i class="fa-regular fa-calendar" style="margin-right: 8px;"></i>Book a Call</a>` : ''}
          </div>
        </div>
        <div class="animate-on-scroll" style="flex-shrink: 0; text-align: center;">
          <h3 style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--primary-color);">Join the Community</h3>
          <iframe id="discord-widget" src="https://discord.com/widget?id=1444791753529102428&theme=${initialTheme}" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style="max-width: 100%; border-radius: 8px;"></iframe>
        </div>
      </div>`;
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
      } else if (project.bandlabId) {
        m.video.style.display = "block";
        m.video.innerHTML = `<iframe title="${project.title} on BandLab" style="border-radius:12px; border: none; width: 100%; height: 360px; overflow: hidden;" src="https://www.bandlab.com/embed/shout/?id=${project.bandlabId}" allowfullscreen></iframe>`;
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

  function setupThemeToggle() {
    const themeToggles = document.querySelectorAll(".theme-toggle");
    
    const updateThemeAssets = () => {
      const isLight = document.documentElement.classList.contains("light-mode");
      
      themeToggles.forEach(btn => {
        const icon = btn.querySelector("i");
        if (icon) {
          if (isLight) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
          } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
          }
        }
      });
      
      const themeImages = document.querySelectorAll("img.theme-image");
      themeImages.forEach(img => {
        const darkSrc = img.getAttribute("data-dark-src");
        const lightSrc = img.getAttribute("data-light-src");
        if (isLight && lightSrc) {
          img.setAttribute("src", lightSrc);
        } else if (!isLight && darkSrc) {
          img.setAttribute("src", darkSrc);
        }
      });

      // Update Discord Widget Theme
      const discordWidget = document.getElementById("discord-widget");
      if (discordWidget) {
        const newTheme = isLight ? "light" : "dark";
        const currentSrc = discordWidget.getAttribute("src");
        // Use a simple regex to replace the theme parameter
        const newSrc = currentSrc.replace(/theme=(dark|light)/, `theme=${newTheme}`);
        // Only update if the src has changed to prevent unnecessary reloads
        if (currentSrc !== newSrc) discordWidget.setAttribute("src", newSrc);
      }
    };
    
    updateThemeAssets();

    themeToggles.forEach(btn => {
      btn.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-mode");
        const theme = document.documentElement.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", theme);
        updateThemeAssets();
      });
    });
  }
})();
