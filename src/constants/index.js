import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  igm,
  lsf,
  portfolio,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Freelancer',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'From Aug 2018 ',
  },
  {
    title: 'Mentor & Tutor (Volunteer)',
    company_name: 'Trans Hub',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2021 - March 2022',
  },
  {
    title: 'Data Analyst(Python)',
    company_name: 'Hon. Lillian Siyoi',
    icon: kelhel,
    iconBg: '#333333',
    date: 'April 2022 - Aug 2022',
  },
  {
    title: 'Mobile and Web Developer',
    company_name: 'Office of The Women Rep - TNC',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Mobile and Web Developer',
    company_name: 'Office of The Women Rep - TNC',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Mobile and Web Developer',
    company_name: 'Mojo ',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'IGM-Kenya',
    description: 'A Faith Based NGO - Charity Organization',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: igm,
    repo: '#',
    demo: 'https://www.igmkenya.org/',
  },
  {
    id: 'project-2',
    name: 'Lillian Siyoi Foundation',
    description:
      'Lillian Siyoi Foundation (LSF) is a registred non profit organization',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: lsf,
    repo: '#',
    demo: 'https://lilliansiyoifoundation.org/',
  },
  {
    id: 'project-3',
    name: 'My Portfolio',
    description: 'This is My Portfolio Built using React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
