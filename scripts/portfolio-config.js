// scripts/portfolio-config.js

const PORTFOLIO_CONFIG = {
  // Hero Section
  hero: {
    name: "Omar Mohamed",
    title: "Founder @ <a href='https://www.merakistudios.dev/'>Meraki Studios</a> | Motion Designer & Java Developer",
    bio: "I build immersive digital experiences, from cinematic video animations to powerful Minecraft plugins. As the founder of Meraki Studios, I lead a team of creatives to turn ambitious ideas into reality, pouring our soul, creativity, and love into every project.",
    profilePic: "images/omarpic.png"
  },

  // Header Social Links
  headerSocial: [
    { platform: "GitHub", url: "https://github.com/omardotcontent", icon: "fab fa-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/omardotcontent/", icon: "fab fa-linkedin" },
    { platform: "YouTube", url: "https://www.youtube.com/@OmarDotContent", icon: "fab fa-youtube" }
  ],

  // Skills Section
  skills: [
    {
      title: "Design & Production",
      list: [
        { name: "Video Editing & Motion Graphics", icon: "fa-solid fa-video" },
        { name: "UI/UX & Presentation Design", icon: "fa-solid fa-pen-ruler" },
        { name: "Graphic Design", icon: "fa-solid fa-image" },
      ]
    },
    {
      title: "Development",
      list: [
        { name: "Java Development (IntelliJ)", icon: "fa-brands fa-java" },
        { name: "Minecraft Plugins (Spigot/Paper)", icon: "fa-solid fa-cube" },
        { name: "Discord Bots (JDA)", icon: "fa-brands fa-discord" },
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: "worldchatter",
      title: "WorldChatter Plugin",
      shortDescription: "A powerful, all-in-one chat overhaul plugin for Minecraft servers, featuring custom channels, anti-swear, and MiniMessage support.",
      fullDescription: "A powerful, all-in-one chat overhaul plugin for Minecraft servers. WorldChatter enhances the in-game chat experience with anti-swear filters, ad-blocking, and fully customizable channels with advanced MiniMessage formatting.",
      tags: ["Minecraft", "Java", "Tool"],
      image: "images/wclogo.png",
      youtubeId: "O95rzhgVSZI", // <-- Video ID Added
      links: [
        { text: "View on Modrinth", url: "https://modrinth.com/plugin/worldchatter" }
      ]
    },
    {
      id: "geminicraft",
      title: "GeminiCraft - AI Assistant",
      shortDescription: "Bring Google's cutting-edge Gemini AI into your Minecraft server for a unique, interactive community experience.",
      fullDescription: "Bring Google's cutting-edge Gemini AI into your Minecraft server. GeminiCraft allows players to interact with a powerful AI assistant directly through in-game chat, creating a unique and engaging community experience.",
      tags: ["Minecraft", "AI", "Concept"],
      image: "images/gclogo.png",
      youtubeId: "F-xHKUArMv4", // <-- Video ID Added
      links: [
         { text: "View on Modrinth", url: "https://modrinth.com/plugin/geminicraft" }
      ]
    },
    {
      id: "meraki-intro",
      title: "Meraki Studios Brand Intro",
      shortDescription: "A dynamic, command-line themed logo animation designed for the Meraki Studios brand identity.",
      fullDescription: "A dynamic, command-line themed logo animation designed for the Meraki Studios brand identity. This project showcases motion graphics and kinetic typography to create a memorable and impactful introduction.",
      tags: ["Logo Animation", "Motion Graphics"],
      image: "images/logo.png", 
      youtubeId: "lQrCyVOHZhk", // <-- Video ID Added
      links: []
    },
    {
      id: "windows-remake",
      title: "Windows Logo History Remake",
      shortDescription: "A technical exercise recreating the startup animations of various Microsoft Windows versions entirely in PowerPoint.",
      fullDescription: "A technical exercise and passion project recreating the startup animations of various Microsoft Windows versions. This entire project was uniquely crafted and animated within PowerPoint, pushing the software to its creative limits.",
      tags: ["Motion Graphics", "PowerPoint"],
      image: "images/windows.png",
      youtubeId: "5onPPYjIoRc", // <-- PLEASE REPLACE THIS ID
      links: []
    }
  ],

  // Professional Experience
  experience: [
    {
      role: "Motion Graphic Designer",
      company: "AKCallers",
      date: "June 2024 - Present (Remote)",
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