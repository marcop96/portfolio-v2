import { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "QR Code + Shortener",
    description:
      "An URL Shortener with QR Code generator made with Nuxt and Supabase",
    image: "qr-generator.png",
    technologies: [
      { name: "Nuxt.js", icon: "devicon:nuxtjs" },
      { name: "Supabase", icon: "devicon:supabase" },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/marcop96/reactcourse",
        icon: "carbon:logo-github",
      },
      {
        name: "Deploy",
        url: "https://short.marcopianaroli.com/",
        icon: "ph:code",
      },
    ],
  },
  {
    title: "Incremental game",
    description:
      "A game inspired on RuneScape and Melvor Idle, where the player can train skills and gather resources",
    image: "incremental.png",
    technologies: [
      { name: "Nuxt.js", icon: "devicon:nuxtjs" },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/marcop96/reactcourse",
        icon: "carbon:logo-github",
      },
      {
        name: "Deploy",
        url: "https://incremental.marcopianaroli.com/",
        icon: "ph:code",
      },
    ],
  },
  {
    title: "Trello clone",
    description: "A Trello clone with drag & drop and customizable workspaces.",
    image: "trello-nuxt.png",
    technologies: [
      { name: "Vue.js", icon: "devicon:vuejs" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "Nuxt.js", icon: "devicon:nuxtjs" },
    ],
    links: [
      {
        name: "Github",
        url: "https://www.github.com/marcop96/vuellonuxt",
        icon: "carbon:logo-github",
      },
      {
        name: "Deploy",
        url: "https://vuello.marcopianaroli.com",
        icon: "ph:code",
      },
    ],
  },
  {
    title: "Ecommerce site",
    description:
      "A frontend project made with VueJS to create a fully functional ecommerce site.",
    image: "vuecommerce-img.png",
    technologies: [
      { name: "Vue.js", icon: "devicon:vuejs" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "Vercel", icon: "devicon:vercel" },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/marcop96/vuecommerce",
        icon: "carbon:logo-github",
      },
      {
        name: "Deploy",
        url: "https://vuecommerce.marcopianaroli.com/",
        icon: "ph:code",
      },
    ],
  },
  {
    title: "Expense tracker app",
    description:
      "An app made with React to track expenses and income. It uses local storage to save the data.",
    image: "expense-tracker-img.png",
    technologies: [
      { name: "React", icon: "devicon:react" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/marcop96/reactcourse",
        icon: "carbon:logo-github",
      },
      {
        name: "Deploy",
        url: "https://expenses.marcopianaroli.com/",
        icon: "ph:code",
      },
    ],
  },
];
