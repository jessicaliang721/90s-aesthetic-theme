import PLACEHOLDER_SCREENSHOT from '../assets/placeholder-ss.png'
import MARCUS_LOGO from '../assets/projects/marcus-logo.png'
import GOLDMAN_APPLE from '../assets/projects/goldman-apple.jpg'
import CAPITAL_ONE_LOGO from '../assets/projects/capital-one-logo.png'
import LOFT_CITY_SCREENSHOT from '../assets/projects/loft-city-church.png'
import GRAVOCORE_SCREENSHOT from '../assets/projects/gravocore.png'
import NMSI_SCREENSHOT from '../assets/projects/nmsi.png'
import TXU_SCREENSHOT from '../assets/projects/txu-energy.png'
import ENTRUST_SCREENSHOT from '../assets/projects/entrust.png'
import CITY_OF_DENTON_SCREENSHOT from '../assets/projects/city-denton.png'
import CAIN_WATTERS_SCREENSHOT from '../assets/projects/cain-watters.png'
import TRIUMPH_BANCORP_SCREENSHOT from '../assets/projects/triumph.png'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Agent UI',
    slug: 'agent-ui',
    description: 'UI agents use to service credit card and savings customers',
    category: 'web apps',
    screenshots: {
      featured: MARCUS_LOGO,
      "Apple Card": GOLDMAN_APPLE,
    },
    date: '2019 - Present',
    longDescription: `Built a complex, production-grade Agent UI supporting customer servicing for credit card and savings products. Implemented key workflows including account management, transaction and dispute flows, document/file upload, and customer preference updates.
    \n\n
    Extended the application into a unified operations platform by integrating real-time customer chat application, fraud management, and case management tools. Focused on building scalable, maintainable UI architecture to support a growing set of tenants and microapps within a single interface.
    `,
    techStack: ["React", "React Query", "React Testing Library", "Redux", "Webpack", "Sass", "Figma", "Storybook"],
    highlights: [
      "Reduced agent context switching",
      "Improved agent workflow efficiency",
      "Faster and more consistent customer issue resolution"
    ],
    featured: true,
  },

  {
    id: 2,
    title: 'Profinity',
    slug: 'profinity',
    description: 'Data visualization app that models various risk profiles',
    longDescription: `Designed and implemented a Python-based data pipeline that transformed raw business data into a standardized format for downstream analytics and visualization applications. Built a flexible configuration-driven framework that enabled multiple datasets to be loaded through a single reusable process, reducing the need for custom pipeline development for each new data source.`,
    category: 'web apps',
    screenshots: {
      featured: CAPITAL_ONE_LOGO,
    },
    date: '2018-2019',
    techStack: ["Python", "Airflow", "AWS S3", "AWS RRedshift"],
    highlights: [
      "streamlined the onboarding of new datasets",
      "reduced overall data load times",
      "enabled faster delivery of insights to teams across the business"
    ],
    featured: false,
  },

  {
    id: 3,
    title: 'Loft City Church',
    slug: 'loft-city-church',
    description: 'Built Loft City Church\'s website from the ground up',
    longDescription: `After an unexpected loss of the existing WordPress theme and site structure, I rebuilt the Loft City Church website from the ground up. This became an opportunity to modernize the entire platform on an updated WordPress foundation, focusing on improving both the visitor experience and internal content management workflows.

Designed the site so non-technical users could easily update pages, manage content, and publish new information without developer assistance.

Implemented custom functionality for sermon archives and event management, making it easier for the church community to access content and stay informed. These improvements contributed to increased site engagement and more frequent content updates.`,
    category: 'website',
    screenshots: {
      featured: LOFT_CITY_SCREENSHOT,
      desktop: LOFT_CITY_SCREENSHOT,
    },
    href: 'http://loftcitychurch.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    highlights: [
      "rebuilt the website on a modern WordPress foundation",
      "improved content management workflows for non-technical users",
      "end-to-end ownership — handled everything from recovery/rebuild to deployment"
    ],
    featured: false,
  },

  {
    id: 4,
    title: 'Gravocore',
    slug: 'gravocore',
    description: 'Gym equipment e-commerce site built on WordPress.',
    category: 'website',
    screenshots: {
      featured: GRAVOCORE_SCREENSHOT,
      desktop: GRAVOCORE_SCREENSHOT,
    },
    href: 'https://gravocore.com',
    date: '2017',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
    featured: false,
  },

  {
    id: 5,
    title: 'National Math and Science Initiative',
    slug: 'nmsi',
    description: 'Landing page for a journaling subscription box.',
    category: 'website',
    screenshots: {
      featured: NMSI_SCREENSHOT,
      desktop: NMSI_SCREENSHOT,
    },
    href: 'https://www.nms.org',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Kentico"],
    date: '2017',
    featured: false,
  },

  {
    id: 6,
    title: 'TXU Energy',
    slug: 'txu-energy',
    description: 'Created wireframes for TXU\'s website makeover and built marketing email templates.',
    category: 'website',
    screenshots: {
      featured: TXU_SCREENSHOT,
      desktop: TXU_SCREENSHOT,
    },
    href: 'https://www.txu.com',
    date: '2017',
    featured: false,
  },
  {
    id: 7,
    title: 'Entrust Datacard',
    slug: 'entrust-datacard',
    description: 'Built out the payment flow to purchase SSL certificates',
    category: 'website',
    screenshots: {
      featured: ENTRUST_SCREENSHOT,
      desktop: ENTRUST_SCREENSHOT,
    },
    href: 'https://buy.entrust.net/index.html',
    date: '2017',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
    featured: false,
  },
  {
    id: 8,
    title: 'City of Denton',
    slug: 'city-of-denton',
    description: 'Built out the website for the City of Denton',
    category: 'website',
    screenshots: {
      featured: CITY_OF_DENTON_SCREENSHOT,
      desktop: CITY_OF_DENTON_SCREENSHOT,
    },
    href: 'https://www.cityofdenton.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Kentico"],
    featured: false,
  },
  {
    id: 9,
    title: 'Cain Watters & Associates',
    slug: 'cain-watters',
    description: 'Built out the website for Cain Watters & Associates',
    category: 'website',
    screenshots: {
      featured: CAIN_WATTERS_SCREENSHOT,
      desktop: CAIN_WATTERS_SCREENSHOT,
    },
    href: 'https://www.cainwatters.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
    highlights: [
      "trained the client on how to update and maintain the site independently",
    ],
    featured: false,
  },
  {
    id: 10,
    title: 'Triumph Bancorp',
    slug: 'triumph-bancorp',
    description: 'Built out the website for Triumph Bancorp',
    category: 'website',
    screenshots: {
      featured: TRIUMPH_BANCORP_SCREENSHOT,
      desktop: TRIUMPH_BANCORP_SCREENSHOT,
    },
    href: 'https://www.triumphbancorp.com',
    date: '2015',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
    featured: false,
  },
]