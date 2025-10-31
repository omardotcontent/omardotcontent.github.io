// scripts/portfolio-main.js
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Cache all necessary DOM elements at once
    const domCache = {
      heroContainer: document.querySelector('.hero-container'),
      socialGroup: document.querySelector('header .social-group'),
      skillsContainer: document.querySelector('.skills-container'),
      projectsContainer: document.querySelector('.projects-container'),
      experienceTimeline: document.querySelector('.experience-timeline'),
      educationContainer: document.querySelector('.education-container'),
      contactInfo: document.querySelector('.contact-info'),
      modal: document.getElementById('project-modal'),
      primaryNav: document.querySelector('nav'),
      mobileNavToggle: document.querySelector('.mobile-nav-toggle'),
    };

    // Run all render and setup functions
    initializeCritical(domCache);
    initializeNonCritical(domCache);
    
    // Set up animations after a slight delay to ensure content is in place
    setTimeout(() => {
        if (window.MerakiAnimations && typeof window.MerakiAnimations.scroll.observe === 'function') {
            window.MerakiAnimations.scroll.observe('.animate-on-scroll');
        }
    }, 200);
  });

  // Functions that need to run immediately for above-the-fold content
  function initializeCritical(dom) {
    renderHero(dom.heroContainer);
    renderHeaderSocial(dom.socialGroup);
    renderSkills(dom.skillsContainer);
    setupMobileNav(dom.mobileNavToggle, dom.primaryNav);
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
        <img src="${h.profilePic}" alt="${h.name}" class="hero-profile-pic animate-on-scroll" />
        <div class="hero-text">
            <h1 class="animate-on-scroll" style="--delay: 100ms">${h.name}</h1>
            <h3 class="animate-on-scroll" style="--delay: 200ms">${h.title}</h3>
            <p class="animate-on-scroll" style="--delay: 300ms">${h.bio}</p>
        </div>
    `;
  }

  function renderHeaderSocial(container) {
    if (!container) return;
    container.innerHTML = PORTFOLIO_CONFIG.headerSocial.map(s => `
        <a href="${s.url}" target="_blank" title="${s.platform}" aria-label="${s.platform}"><i class="${s.icon}"></i></a>
    `).join('');
  }

  function renderSkills(container) {
    if (!container) return;
    container.innerHTML = PORTFOLIO_CONFIG.skills.map(skillCategory => `
        <div class="skill-card animate-on-scroll">
            <h3>${skillCategory.title}</h3>
            <ul>
                ${skillCategory.list.map(skill => `<li><i class="${skill.icon}"></i>${skill.name}</li>`).join('')}
            </ul>
        </div>
    `).join('');
  }

  function renderProjects(container) {
    if (!container) return;
    const frag = document.createDocumentFragment();
    PORTFOLIO_CONFIG.projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project-card animate-on-scroll";
      div.dataset.id = p.id;
      
      // Use the project's own image or a placeholder
      const imageSrc = p.image || 'images/placeholder.png';

      div.innerHTML = `
        <a href="#" class="project-card-link" data-modal-trigger="${p.id}" aria-label="View details for ${p.title}">
            <div class="project-image-container">
              <img class="project-image" src="${imageSrc}" alt="${p.title}" loading="lazy">
            </div>
            <div class="project-content">
              <h3>${p.title}</h3>
              <p>${p.shortDescription}</p>
              <div class="project-tags">
                ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
            </div>
        </a>
        <div class="project-links">
             ${p.links.map(l => `<a href="${l.url}" target="_blank" class="project-btn">${l.text}</a>`).join('')}
        </div>
      `;
      frag.appendChild(div);
    });
    container.appendChild(frag);
  }

  function renderExperience(container) {
    if (!container) return;
    container.innerHTML = PORTFOLIO_CONFIG.experience.map(job => `
        <div class="timeline-item animate-on-scroll">
            <div class="timeline-dot"></div>
            <h3>${job.role}</h3>
            <h4>${job.company}</h4>
            <div class="timeline-date">${job.date}</div>
            <ul>
                ${job.duties.map(duty => `<li>${duty}</li>`).join('')}
            </ul>
        </div>
    `).join('');
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
            ${PORTFOLIO_CONFIG.certifications.map(cert => `<div class="cert-item">${cert}</div>`).join('')}
        </div>
    `;
  }
  
  function renderFooter(container) {
      if(!container) return;
      const c = PORTFOLIO_CONFIG.contact;
      container.innerHTML = `
        <p class="animate-on-scroll">${c.text}</p>
        <a href="mailto:${c.email}" class="animate-on-scroll">${c.email}</a>
      `;
  }

  function setupMobileNav(toggle, nav) {
    if (!toggle || !nav) return;
    const navLinks = nav.querySelectorAll('.nav-links a');
    
    const closeNav = () => {
        nav.setAttribute('data-visible', 'false');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('i').className = 'fa-solid fa-bars';
        document.body.classList.remove('nav-open');
    };
    
    toggle.addEventListener('click', () => {
      const isVisible = nav.getAttribute('data-visible') === 'true';
      if (isVisible) {
        closeNav();
      } else {
        nav.setAttribute('data-visible', 'true');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.querySelector('i').className = 'fa-solid fa-xmark';
        document.body.classList.add('nav-open');
        
        // Clear all active states when opening mobile nav
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
    nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') closeNav(); });
  }

  function setupScrollHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("header nav .nav-links a[href^='#']");
    if (!sections.length || !navLinks.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Don't update active states when mobile nav is open
          if (document.body.classList.contains('nav-open')) return;
          
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });
    sections.forEach(s => observer.observe(s));
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
        m.links.innerHTML = project.links.map(l => `<a href="${l.url}" target="_blank" class="project-btn">${l.text}</a>`).join("");
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
    container.addEventListener("click", e => {
      const trigger = e.target.closest("[data-modal-trigger]");
      if (trigger) {
        e.preventDefault();
        const projectId = trigger.dataset.modalTrigger;
        const project = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
        openModal(project);
      }
    });
    modal.querySelector(".modal-close-btn")?.addEventListener("click", closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  }

})();