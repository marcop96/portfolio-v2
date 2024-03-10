export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: Link[];
}

export interface Link {
  name: string;
  url: string;
  icon: string;
}
