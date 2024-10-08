export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: {name: string; icon: string }[];
  links: Link[];
}

export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface Palette {
  bg: string;
  text: string;
  accent: string;
  cta: string;
}
