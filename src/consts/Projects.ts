import { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "Trello clone",
    description: "A Trello clone with drag & drop and customizable workspaces.",
    image: "trello-nuxt.png",
    technologies: ["devicon:vuejs", "devicon:tailwindcss", "devicon:nuxtjs"],
    links: [
      {
        name: "Github",
        url: "https://www.github.com/marcop96/vuellonuxt",
        icon: "carbon:logo-github",
      },
      {
        name: "deploy",
        url: "https://vuello.marcopianaroli.com",
        icon: "carbon:deploy",
      },
    ],
  },
  {
    title: "Ecommerce site",
    description:
      "A frontend project made with VueJS to create a fully functional ecommerce site.",
    image: "vuecommerce-img.png",
    technologies: ["devicon:vuejs", "devicon:tailwindcss", "devicon:vercel"],
    links: [
      {
        name: "Github",
        url: "vuecommerce-img.png",
        icon: "carbon:logo-github",
      },
      {
        name: "deploy",
        url: "https://vuecommerce.marcopianaroli.com/",
        icon: "carbon:deploy",
      },
    ],
  },
  // {
  //   title: "FutbOrg",
  //   description:
  //     "Football organization project with a google sheets backend to manage teams, matches and players.",
  //   image: "futborg-img.png",
  //   technologies: ["devicon:vuejs", "devicon:googlecloud"],
  //   links: [
  //     {
  //       name: "Github",
  //       url: "https://www.github.com/",
  //       icon: "carbon:logo-github",
  //     },
  //     {
  //       name: "deploy",
  //       url: "https://vuecommerce-nine.vercel.app/",
  //       icon: "carbon:deploy",
  //     },
  //   ],
  // },
  {
    title: "Expense tracker app",
    description:
      "An app made with React to track expenses and income. It uses local storage to save the data.",
    image: "expense-tracker-img.png",
    technologies: ["devicon:react", "devicon:tailwindcss"],
    links: [
      {
        name: "Github",
        url: "https://www.github.com/",
        icon: "carbon:logo-github",
      },
      {
        name: "deploy",
        url: "https://expenses.marcopianaroli.com/",
        icon: "carbon:deploy",
      },
    ],
  },
];
