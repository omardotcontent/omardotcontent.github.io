// scripts/portfolio-config.js

const PORTFOLIO_CONFIG = {
  hero: {
    name: "Omar Mohamed",
    title: "Founder @ <a href='https://www.merakistudios.dev/'>Meraki Studios</a> | Motion Designer & Java Developer",
    bio: "",
    profilePic: "images/omarpic.png"
  },

  // About Me expansion
  aboutMe: {
    title: "ABOUT ME",
    paragraphs: [
      "I’m <strong>Omar Mohamed</strong>, born on <strong>May 12, 2006</strong> — a creator driven by design, storytelling, and clean digital experiences.",
      "For over <strong>6 years</strong>, I’ve been working as a <strong>Video Editor</strong>, building cinematic visuals and motion-driven projects in <strong>Adobe Premiere Pro</strong>. Alongside video, I craft modern layouts, interfaces, and brand visuals across <strong>Figma</strong>, <strong>PowerPoint</strong>, and <strong>Paint.NET</strong>.",
      "I’m also a <strong>Developer</strong> who enjoys building practical tools, clean user interfaces, and creative digital experiences. I work with <strong>Java</strong> (JavaFX apps, Minecraft plugins), <strong>Python</strong>, <strong>C++</strong>, and <strong>HTML & CSS</strong>.",
      "I’m constantly learning, iterating, and improving — whether it's visual, interactive, or technical work."
    ]
  },

  // Header Social Links
  headerSocial: [
    { platform: "GitHub", url: "https://github.com/omardotcontent", icon: "fa-brands fa-github" },
    { platform: "YouTube", url: "https://www.youtube.com/@omardotcontent", icon: "fa-brands fa-youtube" },
    { platform: "Twitter / X", url: "https://x.com/omardotsocial", icon: "fa-brands fa-x-twitter" },
    { platform: "Instagram", url: "https://www.instagram.com/omardotsocial", icon: "fa-brands fa-instagram" },
    { platform: "TikTok", url: "https://www.tiktok.com/@omardotsocial", icon: "fa-brands fa-tiktok" }
  ],

  // Skills Section
  skills: [
    {
      title: "Design & Media",
      list: [
        { name: "Adobe Premiere Pro", icon: "fa-solid fa-video" },
        { name: "Figma", icon: "fa-brands fa-figma" },
        { name: "Microsoft PowerPoint", icon: "fa-solid fa-file-powerpoint" },
        { name: "Paint.NET", icon: "fa-solid fa-palette" },
      ]
    },
    {
      title: "Development",
      list: [
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "C++", icon: "fa-solid fa-c" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "HTML / CSS", icon: "fa-brands fa-html5" },
      ]
    }
  ],

  // Meraki Studios section
  merakiStudios: {
    title: "What I Do at Meraki Studios",
    description: "At <strong>Meraki Studios</strong>, I lead creative direction, design systems, and development across all projects. My work includes:",
    list: [
      "Overseeing video editing & motion graphics",
      "Building UI/UX concepts and branding",
      "Developing Java-based tools & utilities",
      "Managing community operations & workflow structure"
    ],
    footer: "My goal is to create <strong>clean, intuitive, and meaningful</strong> digital experiences — visually and technically."
  },

  // Projects Collection
  projects: [
    {
      id: "interactivestuff",
      title: "InteractiveStuff",
      description: "Items Interact within your First-Person View!",
      primaryUrl: "https://modrinth.com/mod/interactivestuff",
      githubUrl: "https://github.com/omardotcontent/InteractiveStuff",
      tags: ["Java", "Minecraft"]
    },
    {
      id: "worldchatter",
      title: "WorldChatter",
      description: "Enhance your chatting experience.",
      primaryUrl: "https://modrinth.com/plugin/worldchatter",
      githubUrl: "https://github.com/omardotcontent/WorldChatter",
      tags: ["Java", "Minecraft"]
    },
    {
      id: "worldcaster",
      title: "WorldCaster",
      description: "Standalone Broadcast Add-on for WorldChatter!",
      primaryUrl: "https://modrinth.com/plugin/worldcaster",
      githubUrl: "https://github.com/omardotcontent/WorldCaster",
      tags: ["Java", "Minecraft"]
    },
    {
      id: "hultproject",
      title: "hultProject",
      description: "Collaborative academic/university project.",
      primaryUrl: "",
      githubUrl: "https://github.com/omardotcontent/hultProject",
      tags: ["Java"]
    },
    {
      id: "numberguessinggame",
      title: "NumberGuessingGame",
      description: "I'm just having fun with the number guessing",
      primaryUrl: "",
      githubUrl: "https://github.com/omardotcontent/NumberGuessingGame",
      tags: ["Java", "Forked"]
    },
    {
      id: "simpletodo",
      title: "SimpleToDO",
      description: "A Simple TO-DO JavaFX Desktop Application",
      primaryUrl: "",
      githubUrl: "https://github.com/omardotcontent/SimpleToDO",
      tags: ["Java"]
    },
    {
      id: "meraki-studios",
      title: "meraki-studios",
      description: "The Official Organization where a bunch of Nerds create limitless projects.",
      primaryUrl: "",
      githubUrl: "https://github.com/MerakiDotStudios/meraki-studios",
      tags: ["JavaScript", "Contributor"]
    },
    {
      id: "ffaplus",
      title: "FFaPlus",
      description: "FFA+ Minecraft Plugin",
      primaryUrl: "",
      githubUrl: "https://github.com/omardotcontent/FFaPlus",
      tags: ["Java", "Contributor"]
    },
    {
      id: "vyn",
      title: "Vyn",
      description: "A statement-driven scripting language with a focus on readability, blueprints, and concurrency.",
      primaryUrl: "",
      githubUrl: "https://github.com/Abdelaziz1586/Vyn",
      tags: ["Java", "Contributor"]
    }
  ],

  // Professional Experience
  experience: [
    {
      role: "Motion Graphic Designer",
      company: "AKCallers",
      date: "June 2024 - November 2025",
      duties: [
        "Produced engaging motion graphics for brand marketing campaigns.",
        "Collaborated with creative teams to deliver high-quality video assets."
      ]
    },
    {
      role: "Motion Graphic Designer",
      company: "Zumrafood",
      date: "June 2023 - March 2024 (On-Site)",
      duties: [
        "Designed animated visual content to enhance the company's online presence.",
        "Created promotional assets for social media and digital platforms."
      ]
    }
  ],

  // Education & Certifications
  education: {
    institution: "Sadat Academy for Management Sciences (SAMS)",
    degree: "B.S. in Computer Science (Ongoing)"
  },
  certifications: [
    "Fundamentals of Digital Marketing - Google",
    "Microsoft Office Specialist: PowerPoint (2016 & 2019)",
    "Beaver Egypt Challenge 2023 - Ministry of Communications"
  ],

  // Contact Information
  contact: {
    text: "GET IN TOUCH",
    email: "omar@merakistudios.dev",
  }
};
