export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
