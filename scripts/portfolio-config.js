// scripts/portfolio-config.js

const PORTFOLIO_CONFIG = {
  hero: {
    name: "Omar Mohamed",
    title: "Founder @ <a href='https://www.merakistudios.dev/'>Meraki Studios</a> | Motion Designer & Java Developer",
    resumeUrl: "Resume.pdf",
    servicesAnchor: "#services" // The anchor to scroll to for the View Services CTA
  },

  // About Me Section
  aboutMe: {
    paragraphs: [
      "Creative developer and motion designer with 3+ years of hands-on experience — I blend technical precision with artistic direction to produce digital experiences that are both visually impactful and functionally solid.",
      "I've shipped production-grade Java software and open source tools with 223,000+ combined downloads, while producing high-impact visual content for commercial brands. Whether it's architecting a Minecraft plugin, crafting a cinematic animation in Premiere Pro, or leading a team of creators — I approach every project with the same philosophy: clean, intentional, and meaningful.",
      "I'm also the Founder of Meraki Studios, a multi-disciplinary creative studio spanning software development, 3D art, motion design, and media production. Equally fluent in technical stacks and artistic tooling, with a track record of delivering polished, real-world products — independently and within teams."
    ]
  },

  // Header Social Links
  headerSocial: [
    {
      links: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/omardotcontent", icon: "fa-brands fa-linkedin" },
        { platform: "GitHub", url: "https://github.com/omardotcontent", icon: "fa-brands fa-github" }
      ]
    },
    {
      links: [
        { platform: "YouTube", url: "https://www.youtube.com/@omardotcontent", icon: "fa-brands fa-youtube" },
        { platform: "BandLab", url: "https://www.bandlab.com/omardotmusic", icon: "fa-solid fa-music" }
      ]
    },
    {
      links: [
        { platform: "Twitter / X", url: "https://x.com/omardotsocial", icon: "fa-brands fa-x-twitter" },
        { platform: "Instagram", url: "https://www.instagram.com/omardotsocial", icon: "fa-brands fa-instagram" },
        { platform: "TikTok", url: "https://www.tiktok.com/@omardotsocial", icon: "fa-brands fa-tiktok" },
        { platform: "Discord", url: "https://discord.com/invite/8Ap2gGaKbw", icon: "fa-brands fa-discord" }
      ]
    }
  ],

  // Skills Section
  skills: [
    {
      title: "Motion Graphics & Design",
      list: [
        { name: "Adobe Premiere Pro", icon: "fa-solid fa-video" },
        { name: "Figma", icon: "fa-brands fa-figma" },
        { name: "Microsoft PowerPoint", icon: "fa-solid fa-file-powerpoint" },
        { name: "Pinta & Photopea", icon: "fa-solid fa-palette" },
      ]
    },
    {
      title: "Development",
      list: [
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "Vyn", iconImg: "images/vyn_logo.png" },
      ]
    },
    {
      title: "Audio",
      list: [
        { name: "BandLab", icon: "fa-solid fa-music" },
        { name: "Premire Pro (For SFX & Audio Mixing)", icon: "fa-solid fa-volume-high" }
      ]
    },
  ],

  // Currently Learning Section
  currentlyLearning: [
    { name: "C++", icon: "fa-brands fa-cuttlefish" },
    { name: "UI/UX Design (DEPI)", icon: "fa-solid fa-pen-ruler" }
  ],

  // Meraki Studios section
  merakiStudios: {
    description: "At <strong>Meraki Studios</strong>, I lead creative direction, design systems, and development across all projects. My work includes:",
    list: [
      "Overseeing video editing & motion graphics",
      "Building UI/UX concepts and branding",
      "Developing Java-based tools & utilities",
      "Managing community operations & workflow structure"
    ],
    footer: "My goal is to create <strong>clean, intuitive, and meaningful</strong> digital experiences — visually and technically."
  },
  // Services Section
  services: [
    {
      category: "Minecraft Development",
      items: [
        {
          title: "Minecraft Plugins",
          description: "Custom Java plugins built for Spigot/Paper networks (e.g., WorldChatter, WorldCaster, GeminiCraft).",
          icon: "fa-solid fa-code"
        },
        {
          title: "Minecraft Mods",
          description: "Enhance your client/server experience with custom mods (e.g., InteractiveStuff).",
          icon: "fa-solid fa-cubes"
        }
      ]
    },
    {
      category: "Video & Motion Graphics",
      items: [
        {
          title: "Video Editing",
          description: "High-quality video editing tailored for YouTube, Shorts, and Promos using Premiere Pro.",
          icon: "fa-solid fa-film"
        },
        {
          title: "Motion Graphics",
          description: "Cinematic, engaging animations and intros that capture attention.",
          icon: "fa-solid fa-wand-magic-sparkles"
        }
      ]
    },
    {
      category: "Design & Branding",
      items: [
        {
          title: "Text Logos",
          description: "Eye-catching custom text logos crafted for your brand.",
          icon: "fa-solid fa-font"
        },
        {
          title: "Logo Refinement",
          description: "Polishing existing logos for a professional look (Figma + Paint.NET) — see FalconMC & Arioxa Cloud.",
          icon: "fa-solid fa-pen-nib"
        },
        {
          title: "3D Minecraft Graphics",
          description: "Custom 3D renders and pictures created with Mine-Imator.",
          icon: "fa-solid fa-cube"
        }
      ]
    },
    {
      category: "Audio & Presentations",
      items: [
        {
          title: "Sound Design",
          description: "Mixing AI-generated and free sounds in Premiere Pro for an original audio experience.",
          icon: "fa-solid fa-volume-high"
        },
        {
          title: "PowerPoint Presentations",
          description: "Professional, clean, and animated presentation design.",
          icon: "fa-solid fa-file-powerpoint"
        }
      ]
    }
  ],

  // Bundles Section
  bundles: [
    {
      title: "The Ultimate Creator Pack",
      description: "Everything you need to launch a top-tier Minecraft server: Custom Plugins, Logos, 3D Renders, and a cinematic Promo Video.",
      icon: "fa-solid fa-bolt"
    },
    {
      title: "Full Minecraft Server Package",
      description: "A complete server setup with plugins, images, designs, and everything needed to run smoothly.",
      icon: "fa-solid fa-server"
    },
    {
      title: "Full Minecraft Animations Package",
      description: "Complete custom 3D animations and motion graphics specifically tailored for Minecraft content.",
      icon: "fa-solid fa-video"
    }
  ],

  // Projects Collection
  projects: [
    {
      category: "Software & Development",
      list: [
        {
          title: "InteractiveStuff",
          description: "Items Interact within your First-Person View, now powered by the Vyn Scripting Engine!",
          longDescription: `
### The First-Person Item Interactions Mod!
**InteractiveStuff** is a client-side Fabric mod for Minecraft 1.21.10+ that adds immersive, interactive behaviors to items and blocks natively in first-person view. 

#### Key Features:
- 🎮 **Immersive Interactions:** Features animated held items, reactive note blocks, sculk sensors, lanterns, and much more—all directly from your first-person perspective.
- ⚙️ **Vyn Engine Support:** Integrates seamlessly with the Vyn scripting engine, allowing resource pack creators to script item rendering and custom behaviors in any way they want, with zero Java required!
- ⚡ **High Performance:** Designed as a fully client-side mod. First-person mode is strongly recommended for the best experience.
          `,
          primaryUrl: "https://modrinth.com/mod/interactivestuff",
          githubUrl: "https://github.com/omardotcontent/InteractiveStuff",
          media: ["https://www.youtube.com/watch?v=noj6l1028vI", "https://cdn.modrinth.com/data/KDfqMm8K/images/0da07f98d8333d3516a3085532778f38e1adfa49.gif", "https://cdn.modrinth.com/data/KDfqMm8K/images/4d7934c0414324929d0421e1b1025b0f3721f612.gif", "https://cdn.modrinth.com/data/KDfqMm8K/images/9cc693d18fcd25b1b173c2031dae32d4db68fb41.png"],
          tags: ["Java", "Minecraft", "Vyn"]
        },
        {
          title: "WorldChatter",
          description: "Enhance your chatting experience.",
          longDescription: `
### The Ultimate Chat Management Plugin
**WorldChatter** is an advanced chat management plugin for Minecraft servers that helps keep your community clean, organized, and secure. 

#### Security & Moderation
- 🛡️ **Anti-Swear, Anti-AD, Anti-Caps:** Automatically blocks profanity, IP/URL advertisements, and excessive uppercase messages.
- 🚫 **Anti-Repeat & Anti-Spam:** Prevents players from flooding the chat with repeated characters or messages.
- 🔒 **Chat Locking & Clearing:** Allows staff to lock or wipe the chat instantly.

#### Powerful Utilities
- 🌐 **Proxy Support (BungeeCord/Velocity):** Notifies the network when players switch between servers.
- 📣 **Channels & Aliases:** Organize players into custom chat channels and create gradient aliases for names.
- ✨ **Custom Join/Quit Messages:** Create personalized, permission-based join and quit notifications.
- 🔔 **Sound Notifications:** Trigger custom sounds for staff when rules are broken.

WorldChatter is highly configurable, supports PlaceholderAPI, and features a full API for developers.
          `,
          primaryUrl: "https://modrinth.com/plugin/worldchatter",
          githubUrl: "https://github.com/omardotcontent/WorldChatter",
          media: ["https://youtu.be/O95rzhgVSZI", "https://cdn.modrinth.com/data/12lXE0dp/images/0ecac0a4fb6beb0deaf0edd4196d1b267db6a681.png", "https://cdn.modrinth.com/data/12lXE0dp/images/355bc5ae6dc127c119f3cc563f83a3c58c0668c4.png", "https://cdn.modrinth.com/data/12lXE0dp/images/3eacf6855bd3f9f1b115a0bbfad3d8510dde20a3.png"],
          tags: ["Java", "Minecraft"]
        },
        {
          title: "WorldCaster",
          description: "Standalone Broadcast Add-on for WorldChatter!",
          longDescription: `
### Standalone Broadcast Add-on
**WorldCaster** is a powerful standalone broadcast plugin ported directly from WorldChatter, designed to handle cross-server or cross-world announcements with ease.

#### Key Features:
- 📡 **Advanced Broadcast System:** Send different messages to specific worlds or proxy servers.
- 🎲 **Shuffle & Randomize:** Display random messages from a pool on a custom timer.
- ✨ **MiniMessage Support:** Fully supports colored texts, gradients, and text replacements.
- 🔧 **Custom Prefixes:** Add customized prefixes to all broadcast announcements.
          `,
          primaryUrl: "https://modrinth.com/plugin/worldcaster",
          githubUrl: "https://github.com/omardotcontent/WorldCaster",
          media: [],
          tags: ["Java", "Minecraft"]
        },
        {
          title: "SimpleToDO",
          description: "A Simple TO-DO JavaFX Desktop Application",
          longDescription: `
### SimpleToDO
A lightweight, efficient JavaFX desktop application designed to keep your daily tasks organized. 

#### Features:
- **Task Management:** Create, edit, and delete your daily to-do tasks.
- **Progress Tracking:** Easily mark tasks as completed or pending to stay on top of your workflow.
          `,
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/SimpleToDO",
          media: ["images/projects/todo.jpeg", "images/projects/todo2.jpeg", "images/projects/todo3.jpeg"],
          tags: ["Java"]
        },
        {
          title: "Sync",
          description: "A Simple Utilities Discord Bot made with JDA ",
          longDescription: `
### Sync Discord Bot
**Sync** is a handy utility Discord bot built using the Java Discord API (JDA).

#### Features:
- **Server Insights:** Instantly retrieve detailed information about your server.
- **Member Utilities:** Helpful commands to view details about server members and manage community information effortlessly.
          `,
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/sync",
          media: ["images/projects/sync.jpeg", "images/projects/sync2.jpeg"],
          tags: ["Java"]
        },
        {
          title: "AStudioApp",
          description: "A Fully Working JavaFX Social Media App with basic features",
          longDescription: `
### AStudioApp
A fully working, feature-rich Social Media application built with JavaFX.

#### Features:
- **Rich Chatting:** Full emoji support and dedicated channel structures.
- **Smooth UX:** Custom-built smooth animations for a premium feel.
- **User Profiles:** Complete username and profile management system for users.
          `,
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/AStudioApp",
          media: [],
          tags: ["Java"]
        },
        {
          title: "MusclePrototype",
          description: "A JavaFX Simulation Project for an Old Competition",
          longDescription: `
### MusclePrototype
An advanced JavaFX simulation project created for a technical competition. 

#### Features:
- **Hardware Simulation:** Showcased how live hardware readings (muscle detection, weight, and height info) could seamlessly stream into a JavaFX application.
- **Data Validation:** Included complex data validation and processing logic to mimic real-world sensors in a simulated environment.
          `,
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/MusclePrototype",
          media: ["images/projects/muscle.jpeg"],
          tags: ["Java"]
        }
      ]
    },
    {
      category: "Content & Media",
      list: [
        {
          title: "[MC/FNAF] Demons",
          description: "Video content created for YouTube.",
          primaryUrl: "https://www.youtube.com/watch?v=pyReY80-Pd4",
          youtubeId: "pyReY80-Pd4",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          title: "[MI/MC] Lighting Test",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/tdlf_Lt6fJQ",
          youtubeId: "tdlf_Lt6fJQ",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          title: "I'M AT SOUP",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/chCtnrT1MZ0",
          youtubeId: "chCtnrT1MZ0",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          title: "Mathematical Questions.",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/-2PuvoV-jX0",
          youtubeId: "-2PuvoV-jX0",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          title: "Meraki Studios - GeminiCraft",
          description: "Video Edit for GeminiCraft",
          primaryUrl: "https://youtu.be/F-xHKUArMv4",
          youtubeId: "F-xHKUArMv4",
          tags: ["YouTube", "Edit"]
        },
        {
          title: "WorldChatter",
          description: "Video Edit for WorldChatter",
          primaryUrl: "https://youtu.be/zuHdnLSL5CQ",
          youtubeId: "zuHdnLSL5CQ",
          tags: ["YouTube", "Edit"]
        },
        {
          title: "Fazbear's Return | Video Edit",
          description: "Video Edit for my old indie game.",
          primaryUrl: "https://youtu.be/5mVHEP1LHes",
          youtubeId: "5mVHEP1LHes",
          tags: ["YouTube", "Edit"]
        },
        {
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://www.youtube.com/shorts/QecSNWdMtEA",
          youtubeShortId: "QecSNWdMtEA",
          tags: ["YouTube", "Shorts", "Edit"]
        },
        {
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://youtube.com/shorts/Z6OwqV8kn2M",
          youtubeShortId: "Z6OwqV8kn2M",
          tags: ["YouTube", "Shorts", "Edit"]
        },
        {
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://youtube.com/shorts/E__UR37Avn8",
          youtubeShortId: "E__UR37Avn8",
          tags: ["YouTube", "Shorts", "Edit"]
        }
      ]
    },

    {
      category: "Original Tracks",
      layout: "grid",
      list: [
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_5fb2c88ac2bcf0118196000d3a96100f"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_5352a43b9e64f0118dc9000d3a960be3"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_748321f3ca38ef1186c3000d3a42581b"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_764d51d3c661f0118dc9000d3a960be3"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_e2d347d72539ef1186c3000d3a42581b"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_8eaa38636cf0ef1190c900224848fea7"
        }
      ]
    },
    {
      category: "Remixes",
      layout: "grid",
      list: [
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_6597f45e1ef1ef1190c900224848fea7"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_3a341ef4ec09f011aaa70022484892d6"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_f233dd49c306f011aaa70022484892d6"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_02b5d6f9ae60f0118dc9000d3a960be3"
        },
        {
          bandlabId: "c263bc9e13e54acf8587093a15770039_52d83473c591ed119d7a000d3a98096b"
        }
      ]
    },
    {
      category: "Renders & Graphics",
      layout: "slideshow",
      list: [
        {
          title: "1v1",
          imageUrl: "images/renders/1v1.webp"
        },
        {
          title: "Herobrine Alpha",
          imageUrl: "images/renders/HerobrineAlpha.webp"
        },
        {
          title: "Spring Fab",
          imageUrl: "images/renders/SpringFab.webp"
        },
        {
          title: "Steve in Nether",
          imageUrl: "images/renders/SteveinNether.webp"
        },
        {
          title: "Fireball",
          imageUrl: "images/renders/Test.webp"
        },
        {
          title: "Breaking Bad",
          imageUrl: "images/renders/breaking bad.webp"
        },
        {
          title: "Car",
          imageUrl: "images/renders/car.webp"
        },
        {
          title: "Old Banner",
          imageUrl: "images/renders/fnaf2.webp"
        },
        {
          title: "New Banner",
          imageUrl: "images/renders/iconbanner.webp"
        },
        {
          title: "Lines",
          imageUrl: "images/renders/render.webp"
        },
        {
          title: "Starweevil",
          imageUrl: "images/renders/starfinal.webp"
        }
      ]
    },
    {
      category: "Branding & Logos",
      layout: "grid",
      list: [
        {
          title: "Arioxa Cloud",
          imageUrl: "images/arioxa/icon.png"
        },
        {
          title: "FalconMC",
          imageUrl: "images/falconMC/bannerSmall.png"
        },
        {
          title: "BetyBites",
          imageUrl: "images/BetyBites/betybites.png"
        }
      ]
    }
  ],

  experience: [
    {
      role: "Founder & Lead Developer",
      company: "Meraki Studios",
      date: "2024 - Present",
      duties: [
        "Leading creative direction and UI/UX development across all studio projects.",
        "Managing a team of talented creators to build tools, games, and digital experiences."
      ]
    },
    {
      role: "Motion Graphic Designer",
      company: "AKCallers",
      date: "June 2024 - November 2025",
      duties: [
        "Produced engaging motion graphics for brand marketing campaigns.",
        "Collaborated with creative teams to deliver high-quality video assets."
      ],
      videos: [
        { title: "AKCallers Reel | Old TV Theme", primaryUrl: "https://www.instagram.com/reel/DChgDNyMi1W/", instagramId: "DChgDNyMi1W" },
        { title: "AKCallers Reel | Motion Graphics Shop Promo", primaryUrl: "https://www.instagram.com/reel/DCEp7HFNaaR/", instagramId: "DCEp7HFNaaR" },
        { title: "AKCallers Reel | Motion Graphics Leads Generation Promo", primaryUrl: "https://www.instagram.com/reel/C-tJaZfAtDt/", instagramId: "C-tJaZfAtDt" },
        { title: "AKCallers Reel | Unreal Engine Animated Promo", primaryUrl: "https://www.instagram.com/reel/C-5u6eTOcVp/", instagramId: "C-5u6eTOcVp" },
        { title: "AKCallers Reel | Motion Graphics Promo 2", primaryUrl: "https://www.instagram.com/reel/C-JMoSPO5kq/", instagramId: "C-JMoSPO5kq" },
        { title: "AKCallers Reel | Miami Retro Promo", primaryUrl: "https://www.instagram.com/reel/C8LADDxNBoJ/", instagramId: "C8LADDxNBoJ" }
      ]
    },
    {
      role: "Motion Graphic Designer",
      company: "Zumrafood",
      date: "June 2023 - March 2024 (On-Site)",
      duties: [
        "Designed animated visual content to enhance the company's online presence.",
        "Created promotional assets for social media and digital platforms."
      ],
      videos: [
        { title: "ZumraFood Reel | Motion Graphics Products Promo", primaryUrl: "https://www.instagram.com/reel/Cz52N_Uy_lu/", instagramId: "Cz52N_Uy_lu" },
        { title: "ZumraFood Reel | Motion Graphics Products Promo 2", primaryUrl: "https://www.instagram.com/reel/CzVsvrmynUu/", instagramId: "CzVsvrmynUu" },
        { title: "ZumraFood Reel | Motion Graphics Products Promo 3", primaryUrl: "https://www.instagram.com/reel/CzI1H2QymP8/", instagramId: "CzI1H2QymP8" },
        { title: "ZumraFood Reel | Motion Graphics Products Promo 4", primaryUrl: "https://www.instagram.com/reel/CyfiNYbyvg8/", instagramId: "CyfiNYbyvg8" },
        { title: "ZumraFood Reel | Motion Graphics Products Promo 5", primaryUrl: "https://www.instagram.com/reel/Cvb0pp9okVl/", instagramId: "Cvb0pp9okVl" },
        { title: "ZumraFood Reel | Motion Graphics Products Promo 6", primaryUrl: "https://www.instagram.com/reel/CwR5ggbIclS/", instagramId: "CwR5ggbIclS" },
        { title: "ZumraFood Reel | Motion Graphics Products Halloween Promo", primaryUrl: "https://www.instagram.com/reel/Cy0HccJBWr9/", instagramId: "Cy0HccJBWr9" },
        { title: "ZumraFood Reel | Unreal Engine Products Promo", primaryUrl: "https://www.instagram.com/reel/CxZ_uU7IP_o/", instagramId: "CxZ_uU7IP_o" },
        { title: "ZumraFood Reel | Motion Graphics Beach Products Promo", primaryUrl: "https://www.instagram.com/reel/CwhWLAyoc2B/", instagramId: "CwhWLAyoc2B" }
      ]
    }
  ],

  // Education & Certifications
  education: {
    institution: "Sadat Academy for Management Sciences (SAMS)",
    degree: "B.S. in Software Engineering (Ongoing)"
  },
  certifications: [
    "Agile Project Management - HP LIFE",
    "Fundamentals of Digital Marketing - Google",
    "Digital Egypt Clubs Initiative 2023 - Level Two Lite",
    "Microsoft Office Specialist: PowerPoint (2016 & 2019)",
    "Beaver Egypt Challenge 2023 - Ministry of Communications",
    "ICPC Sadat Academy Community 2026 - Level 1 SAMS Contest",
    "Java Member - Hult Prize Program, Sadat Academy (2025-2026)",
    "Best Member Award, Java Committee - Hult Prize SAMS (2025/2026)",
    "Java Committee Training Completion - Hult Prize SAMS (2025/2026)",
    "Digital Egypt Clubs Initiative 2024 - Level Three: Data Science and Ai",
    "ICPC ECPC Qualifications Collegiate Programming Contest 2026 - 95th Place" 
  ],

  // Languages
  languages: [
    { name: "Arabic", level: "Native", percent: 100 },
    { name: "English", level: "B2 — Upper-Intermediate", percent: 72 }
  ],

  // Testimonials (client reviews — add quotes here when you have them)
  // testimonials: [
  //   {
  //     quote: "Omar delivered an incredible plugin for our server — professional, fast, and exactly what we needed.",
  //     author: "ServerOwner123",
  //     role: "Minecraft Server Owner",
  //     avatar: "" // URL to avatar image (optional)
  //   },
  //   {
  //     quote: "The motion graphics Omar made for our brand were stunning. Clients loved the promo video!",
  //     author: "ClientName",
  //     role: "Marketing Director @ SomeCompany",
  //     avatar: ""
  //   }
  // ],

  // Contact Information
  contact: {
    text: "Feel free to reach out for collaborations, inquiries, or just to say hi!",
    categories: [
      {
        title: "Socials",
        links: [
          { platform: "YouTube", url: "https://www.youtube.com/@omardotcontent", icon: "fa-brands fa-youtube" },
          { platform: "Instagram", url: "https://www.instagram.com/omardotrandom", icon: "fa-brands fa-instagram" },
          { platform: "TikTok", url: "https://www.tiktok.com/@omardotsocial", icon: "fa-brands fa-tiktok" }
        ]
      },
      {
        title: "Work & Code",
        links: [
          { platform: "LinkedIn", url: "https://www.linkedin.com/in/omardotcontent", icon: "fa-brands fa-linkedin" },
          { platform: "GitHub", url: "https://github.com/omardotcontent", icon: "fa-brands fa-github" },
          { platform: "Modrinth", url: "https://modrinth.com/user/OmarDotContent", icon: "fa-solid fa-link" },
          { platform: "CurseForge", url: "https://www.curseforge.com/members/omardotcontent/projects", icon: "fa-solid fa-link" }
        ]
      },
      {
        title: "Music & Support",
        links: [
          { platform: "BandLab", url: "https://www.bandlab.com/omardotmusic", icon: "fa-solid fa-music" },
          { platform: "Spotify", url: "https://open.spotify.com/artist/3ZsYOoNLRJw51wOf8l6j3z", icon: "fa-brands fa-spotify" },
          { platform: "Discord", url: "https://discord.com/invite/8Ap2gGaKbw", icon: "fa-brands fa-discord" },
          { platform: "Ko-fi", url: "https://ko-fi.com/omardotcontent", icon: "fa-brands fa-ko-fi" }
        ]
      },
      {
        title: "Reach Out",
        links: [
          { platform: "Email", url: "mailto:omar@merakistudios.dev", icon: "fa-solid fa-envelope" },
          { platform: "WhatsApp", url: "https://wa.me/201020906531", icon: "fa-brands fa-whatsapp" },
          { platform: "Telegram", url: "https://t.me/omardotsocial", icon: "fa-brands fa-telegram" },
          { platform: "Messenger", url: "https://m.me/omardotsocial", icon: "fa-brands fa-facebook-messenger" }
        ]
      }
    ]
  }
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;