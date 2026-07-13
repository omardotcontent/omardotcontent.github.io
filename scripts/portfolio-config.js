// scripts/portfolio-config.js

const PORTFOLIO_CONFIG = {
  hero: {
    name: "Omar Mohamed",
    title: "Founder @ <a href='https://www.merakistudios.dev/'>Meraki Studios</a> | Motion Designer & Java Developer"
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
        { name: "Paint.NET", icon: "fa-solid fa-palette" },
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
    }
  ],

  // Currently Learning Section
  currentlyLearning: [
    { name: "C++", icon: "fa-brands fa-cuttlefish" },
    { name: "Java Technical (Hult Prize SAMS)", icon: "fa-brands fa-java" }
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
          primaryUrl: "https://modrinth.com/mod/interactivestuff",
          githubUrl: "https://github.com/omardotcontent/InteractiveStuff",
          tags: ["Java", "Minecraft", "Vyn"]
        },
        {
          title: "WorldChatter",
          description: "Enhance your chatting experience.",
          primaryUrl: "https://modrinth.com/plugin/worldchatter",
          githubUrl: "https://github.com/omardotcontent/WorldChatter",
          tags: ["Java", "Minecraft"]
        },
        {
          title: "WorldCaster",
          description: "Standalone Broadcast Add-on for WorldChatter!",
          primaryUrl: "https://modrinth.com/plugin/worldcaster",
          githubUrl: "https://github.com/omardotcontent/WorldCaster",
          tags: ["Java", "Minecraft"]
        },
        {
          title: "SimpleToDO",
          description: "A Simple TO-DO JavaFX Desktop Application",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/SimpleToDO",
          tags: ["Java"]
        },
        {
          title: "meraki-studios",
          description: "The Official Organization where a bunch of Nerds create limitless projects.",
          primaryUrl: "",
          githubUrl: "https://github.com/MerakiDotStudios/meraki-studios",
          tags: ["JavaScript", "Contributor"]
        },
        {
          title: "Sync",
          description: "A Simple Utilities Discord Bot made with JDA ",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/sync",
          tags: ["Java"]
        },
        {
          title: "AStudioApp",
          description: "A Fully Working JavaFX Social Media App with basic features",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/AStudioApp",
          tags: ["Java"]
        },
        {
          title: "MusclePrototype",
          description: "A JavaFX Simulation Project for an Old Competition",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/MusclePrototype",
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
      layout: "scrolling",
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
      layout: "scrolling",
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
      layout: "compact",
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
    "Digital Egypt Clubs Initiative 2024 - Level Three: Data Science and Ai"
  ],

  // Contact Information
  contact: {
    text: "Feel free to reach out for collaborations, inquiries, or just to say hi!",
    email: "omar@merakistudios.dev",
    telegram: "https://t.me/omardotsocial",
    messenger: "https://m.me/omardotsocial"
  }
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;