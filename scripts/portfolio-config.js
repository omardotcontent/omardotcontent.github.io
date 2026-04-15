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
      "I’m <strong>Omar Mohamed</strong>, born on <strong>May 12, 2006</strong> — just a creator who loves design, storytelling, and making clean digital stuff.",
      "I'm also the <strong>Founder of Meraki Studios</strong>! The whole idea started when we were a bunch of friends each with talents, and we thought into making 1 studio to bring all of our projects to life! Now I lead the creative direction and development there.",
      "I've been a <strong>Motion Graphic Designer & Video Editor</strong> for over <strong>6 years</strong> now, making cinematic visuals and marketing stuff for brands like <strong>AKCallers</strong> and <strong>Zumrafood</strong> using <strong>Premiere Pro</strong>. I also make modern layouts and brand designs on <strong>Figma</strong>, <strong>PowerPoint</strong>, and <strong>Paint.NET</strong>.",
      "But as a <strong>Developer</strong>, I really enjoy building tools, clean and interactive UIs, and creative digital experiences! I work alot with <strong>Java</strong> (JavaFX apps, Minecraft plugins), <strong>Python</strong>, <strong>C++</strong>, <strong>HTML & CSS</strong>, and recently our new scripting engine <strong>Vyn</strong>.",
      "I'm currently getting my <strong>B.S. in Computer Science</strong> at <strong>Sadat Academy for Management Sciences</strong>. I'm always learning and improving whatever I'm cooking up... this is still the beginning and there is yet more to come."
    ]
  },

  // Header Social Links
  headerSocial: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/omardotcontent", icon: "fa-brands fa-linkedin" },
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
        { name: "Vyn", iconImg: "images/vyn_logo.png" },
      ]
    },
    {
      title: "Audio",
      list: [
        { name: "Music Production", icon: "fa-solid fa-music" },
        { name: "SFX Design", icon: "fa-solid fa-volume" }
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
      category: "Software & Development",
      list: [
        {
          id: "interactivestuff",
          title: "InteractiveStuff",
          description: "Items Interact within your First-Person View, now powered by the Vyn Scripting Engine!",
          primaryUrl: "https://modrinth.com/mod/interactivestuff",
          githubUrl: "https://github.com/omardotcontent/InteractiveStuff",
          tags: ["Java", "Minecraft", "Vyn"]
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
          id: "sync",
          title: "Sync",
          description: "A Simple Utilities Discord Bot made with JDA ",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/sync",
          tags: ["Java"]
        },
        {
          id: "astudioapp",
          title: "AStudioApp",
          description: "A Fully Working JavaFX Social Media App with basic features",
          primaryUrl: "",
          githubUrl: "https://github.com/omardotcontent/AStudioApp",
          tags: ["Java"]
        },
        {
          id: "muscleprototype",
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
          id: "yt-video-1",
          title: "[MC/FNAF] Demons",
          description: "Video content created for YouTube.",
          primaryUrl: "https://www.youtube.com/watch?v=pyReY80-Pd4",
          youtubeId: "pyReY80-Pd4",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          id: "yt-video-2",
          title: "[MI/MC] Lighting Test",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/tdlf_Lt6fJQ",
          youtubeId: "tdlf_Lt6fJQ",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          id: "yt-video-3",
          title: "I'M AT SOUP",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/chCtnrT1MZ0",
          youtubeId: "chCtnrT1MZ0",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          id: "yt-video-4",
          title: "Mathematical Questions.",
          description: "Video content created for YouTube.",
          primaryUrl: "https://youtu.be/-2PuvoV-jX0",
          youtubeId: "-2PuvoV-jX0",
          tags: ["YouTube", "Video", "Animation"]
        },
        {
          id: "yt-edit-1",
          title: "Meraki Studios - GeminiCraft",
          description: "Video Edit for GeminiCraft",
          primaryUrl: "https://youtu.be/F-xHKUArMv4",
          youtubeId: "F-xHKUArMv4",
          tags: ["YouTube", "Edit"]
        },
        {
          id: "yt-short-1",
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://www.youtube.com/shorts/QecSNWdMtEA",
          youtubeShortId: "QecSNWdMtEA",
          tags: ["YouTube", "Shorts", "Edit"]
        },
        {
          id: "yt-short-2",
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://youtube.com/shorts/Z6OwqV8kn2M",
          youtubeShortId: "Z6OwqV8kn2M",
          tags: ["YouTube", "Shorts", "Edit"]
        },
        {
          id: "yt-short-3",
          title: "Nitro-ify Short",
          description: "Short-form video content created for Nitro-ify.",
          primaryUrl: "https://youtube.com/shorts/E__UR37Avn8",
          youtubeShortId: "E__UR37Avn8",
          tags: ["YouTube", "Shorts", "Edit"]
        }
      ]
    },
    {
      category: "AKCallers Videos",
      layout: "compact",
      list: [
        {
          id: "ig-akcallers-1",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/DChgDNyMi1W/",
          instagramId: "DChgDNyMi1W",
          tags: ["Instagram", "AKCallers"]
        },
        {
          id: "ig-akcallers-2",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/DCEp7HFNaaR/",
          instagramId: "DCEp7HFNaaR",
          tags: ["Instagram", "AKCallers"]
        },
        {
          id: "ig-akcallers-3",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/C-tJaZfAtDt/",
          instagramId: "C-tJaZfAtDt",
          tags: ["Instagram", "AKCallers"]
        },
        {
          id: "ig-akcallers-4",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/C-5u6eTOcVp/",
          instagramId: "C-5u6eTOcVp",
          tags: ["Instagram", "AKCallers"]
        },
        {
          id: "ig-akcallers-5",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/C-JMoSPO5kq/",
          instagramId: "C-JMoSPO5kq",
          tags: ["Instagram", "AKCallers"]
        },
        {
          id: "ig-akcallers-6",
          title: "AKCallers Reel",
          description: "Promotional content created for AKCallers.",
          primaryUrl: "https://www.instagram.com/reel/C8LADDxNBoJ/",
          instagramId: "C8LADDxNBoJ",
          tags: ["Instagram", "AKCallers"]
        }
      ]
    },
    {
      category: "ZumraFood Videos",
      layout: "compact",
      list: [
        {
          id: "ig-zumra-1",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/Cz52N_Uy_lu/",
          instagramId: "Cz52N_Uy_lu",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-2",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CzVsvrmynUu/",
          instagramId: "CzVsvrmynUu",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-3",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CzI1H2QymP8/",
          instagramId: "CzI1H2QymP8",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-4",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CyfiNYbyvg8/",
          instagramId: "CyfiNYbyvg8",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-5",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/Cy0HccJBWr9/",
          instagramId: "Cy0HccJBWr9",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-6",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CxZ_uU7IP_o/",
          instagramId: "CxZ_uU7IP_o",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-7",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CwhWLAyoc2B/",
          instagramId: "CwhWLAyoc2B",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-8",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/Cvb0pp9okVl/",
          instagramId: "Cvb0pp9okVl",
          tags: ["Instagram", "ZumraFood"]
        },
        {
          id: "ig-zumra-9",
          title: "ZumraFood Reel",
          description: "Animated visual content for ZumraFood.",
          primaryUrl: "https://www.instagram.com/reel/CwR5ggbIclS/",
          instagramId: "CwR5ggbIclS",
          tags: ["Instagram", "ZumraFood"]
        }
      ]
    },
    {
      category: "Music & Audio",
      list: [
        {
          id: "spotify-1",
          title: "Avenoir",
          description: "Y'all like jazz?",
          spotifyTrackId: "5WyWet5iP1Pky2LtRZUMBY",
          tags: ["Music", "Spotify"]
        },
        {
          id: "spotify-2",
          title: "Obsidiana",
          description: "Calm vibes.",
          spotifyTrackId: "0ZC7l1MCYRbJW27JjkS72K",
          tags: ["Music", "Spotify"]
        }
      ]
    },
    {
      category: "Design & Art",
      list: [
        // Add design & art projects here
      ]
    },
    {
      category: "Renders & Graphics",
      layout: "compact",
      list: [
        {
          id: "render-1",
          title: "1v1",
          description: "Made in Mine-Imator + Paint.NET.",
          imageUrl: "images/renders/1v1.webp",
          tags: ["Render", "Minecraft"]
        },
        {
          id: "render-2",
          title: "Herobrine Alpha",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/HerobrineAlpha.webp",
          tags: ["Render", "Minecraft"]
        },
        {
          id: "render-3",
          title: "Spring Fab",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/SpringFab.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-4",
          title: "Steve in Nether",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/SteveinNether.webp",
          tags: ["Render", "Minecraft"]
        },
        {
          id: "render-5",
          title: "Fireball",
          description: "Made in Mine-Imator + Paint.NET.",
          imageUrl: "images/renders/Test.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-6",
          title: "Breaking Bad",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/breaking bad.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-7",
          title: "Car",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/car.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-8",
          title: "Old Banner",
          description: "Made in Mine-Imator.",
          imageUrl: "images/renders/fnaf2.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-9",
          title: "New Banner",
          description: "Made in Mine-Imator + Paint.NET.",
          imageUrl: "images/renders/iconbanner.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-10",
          title: "Lines",
          description: "Made in Mine-Imator + Paint.NET.",
          imageUrl: "images/renders/render.webp",
          tags: ["Render", "Design"]
        },
        {
          id: "render-11",
          title: "Starweevil",
          description: "Made in Mine-Imator + Paint.NET.",
          imageUrl: "images/renders/starfinal.webp",
          tags: ["Render", "Design"]
        }
      ]
    }
  ],

  // Professional Experience
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
    discord: "omardotsocial"
  }
};
