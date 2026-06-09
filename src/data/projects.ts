import MARCUS_LOGO from '../assets/projects/marcus-logo.png'
import GOLDMAN_APPLE from '../assets/projects/goldman-apple.jpg'
import CAPITAL_ONE_LOGO from '../assets/projects/capital-one-logo.png'
import LOFT_CITY_SCREENSHOT from '../assets/projects/loft-city-church.png'
import LOFT_CONNECT_SCREENSHOT from '../assets/projects/loft-connect.png'
import LOFT_EVENT_SCREENSHOT from '../assets/projects/loft-events-list.png'
import LOFT_EVENT_DETAIL_SCREENSHOT from '../assets/projects/loft-event-detail.png'
import GRAVOCORE_SCREENSHOT from '../assets/projects/gravocore.png'
import NMSI_SCREENSHOT from '../assets/projects/nmsi.png'
import NMSI_BLOG_SCREENSHOT from '../assets/projects/nmsi-blog.png'
import NMSI_NEWS_SCREENSHOT from '../assets/projects/nmsi-news.png'
import NMSI_HOMEPAGE_SCREENSHOT from '../assets/projects/nmsi-home.png'
import NMSI_MOBILE_SCREENSHOT from '../assets/projects/nmsi-mobile-view.png'
import NMSI_TABLET_SCREENSHOT from '../assets/projects/nmsi-tablet-view.png'
import NMSI_IMPACT_SCREENSHOT from '../assets/projects/nmsi-impact.jpg'
import TXU_SCREENSHOT from '../assets/projects/txu-energy.png'
import TXU_CONTENT_TILES_SMALL from '../assets/projects/txu-content-tiles-sm.png'
import TXU_CONTENT_TILES_MEDIUM from '../assets/projects/txu-content-tiles-med.png'
import TXU_CONTENT_TILES_LARGE from '../assets/projects/txu-content-tiles-lg.png'
import ENTRUST_CONTACT from '../assets/projects/entrust-contact.png'
import ENTRUST_MEDIUM_VIEW from '../assets/projects/entrust-med-view.png'
import ENTRUST_PAYMENT from '../assets/projects/entrust-payment.png'
import CITY_OF_DENTON_SCREENSHOT from '../assets/projects/city-denton.png'
import CITY_OF_DENTON_MAPS_SCREENSHOT from '../assets/projects/city-denton-maps.png'
import CITY_OF_DENTON_DTV_SCREENSHOT from '../assets/projects/city-denton-tv.png'
import CITY_OF_DENTON_TABLET_SCREENSHOT from '../assets/projects/city-denton-tablet.jpeg'
import CAIN_WATTERS_SCREENSHOT from '../assets/projects/cain-watters.png'
import CAIN_WATTERS_TABLET_SCREENSHOT from '../assets/projects/cain-watters-tablet.png'
import CAIN_WATTERS_MOBILE_SCREENSHOT from '../assets/projects/cain-watters-mobile.png'
import CAIN_WATTERS_DESKTOP_SCREENSHOT from '../assets/projects/cain-watters-desktop.png'
import CAIN_WATTERS_HOVER_BLOCK from '../assets/projects/cain-watters-hover-block.jpeg'
import TRIUMPH_BANCORP_SCREENSHOT from '../assets/projects/triumph.png'
import TRIUMPH_BLOG_SCREENSHOT from '../assets/projects/triumph-blog.png'
import TRIUMPH_COMPONENTS_SCREENSHOT from '../assets/projects/triumph-components.png'
import TRIUMPH_MOBILE_SCREENSHOT from '../assets/projects/triumph-mobile.png'
import TRIUMPH_TABLET_SCREENSHOT from '../assets/projects/triumph-tablet.png'
import TRIUMPH_SUBSIDIARY_SCREENSHOT from '../assets/projects/triumph-subsidiary.png'
import TRIUMPH_SUBSIDIARY2_SCREENSHOT from '../assets/projects/triumph-subsidiary-2.png'
import TRIUMPH_BLOG2_SCREENSHOT from '../assets/projects/triumph-subsidiary-blog.png'

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
    techStack: ["Python", "Airflow", "AWS S3", "AWS Redshift"],
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
    longDescription: `Rebuilt the Loft City Church website from the ground up in WordPress after the original theme and site structure were unexpectedly lost, restoring the organization’s digital presence under urgent conditions while improving the platform for long-term use.
\n\n
The project involved modernizing the WordPress architecture, rebuilding key content systems, and creating a more intuitive experience for both site visitors and content editors. I developed custom functionality for sermon archives and integrated an event calendar system that allowed administrators to easily create and manage events with detailed event pages.
\n\n
I also focused heavily on improving content management workflows, enabling non-technical staff to independently update and publish content. The rebuilt site was fully responsive and structured to support ongoing growth, increased publishing frequency, and a more reliable CMS experience.`,
    category: 'website',
    screenshots: {
      featured: LOFT_CITY_SCREENSHOT,
      desktop: LOFT_CITY_SCREENSHOT,
      "events page": LOFT_EVENT_SCREENSHOT,
      "event detail page": LOFT_EVENT_DETAIL_SCREENSHOT,
      "connect page": LOFT_CONNECT_SCREENSHOT,
    },
    href: 'http://loftcitychurch.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    highlights: [
      "rebuilt the website on a modern WordPress foundation",
      "improved content management workflows for non-technical users",
      "improved overall visitor experience through clearer content structure and navigation",
      "handled everything from recovery/rebuild to deployment",
    ],
    featured: false,
  },

  {
    id: 4,
    title: 'Gravocore',
    slug: 'gravocore',
    description: 'Gym equipment e-commerce site built on WordPress.',
    longDescription: `Developed a WordPress-based e-commerce website for a fitness equipment company specializing in portable workout products. The project focused on creating a responsive shopping experience that worked seamlessly across desktop and mobile devices.
\n\n
My contributions included building front - end features and custom WordPress functionality using HTML, CSS, JavaScript, jQuery, and PHP. One feature I distinctly remember developing was a persistent social media navigation component that remained visible as users browsed the site, while intelligently adapting its size and layout on mobile devices to avoid obstructing content.
\n\n
Throughout the project, I collaborated with designers and fellow developers to implement responsive user interfaces, support e - commerce functionality, and help prepare the site for production launch.`,
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
    description: 'Built website for NMSI, a nonprofit focused on improving student performance and interest in STEM',
    longDescription: `Built a responsive website for the National Math and Science Initiative using Kentico CMS, marking my first experience working with the platform. This project required quickly learning Kentico’s templating system and how to build flexible layouts for multiple page types.

I developed key sections of the site including the homepage with a hero slider, blog, and news pages, ensuring each layout was reusable and aligned with the CMS structure. The entire site was built to be fully responsive across desktop, tablet, and mobile devices using JavaScript, jQuery, and CSS.`,
    category: 'website',
    screenshots: {
      featured: NMSI_SCREENSHOT,
      desktop: NMSI_SCREENSHOT,
      tablet: NMSI_TABLET_SCREENSHOT,
      mobile: NMSI_MOBILE_SCREENSHOT,
      "home page": NMSI_HOMEPAGE_SCREENSHOT,
      "blog page": NMSI_BLOG_SCREENSHOT,
      "news page": NMSI_NEWS_SCREENSHOT,
      "impact page": NMSI_IMPACT_SCREENSHOT,
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
    longDescription: `Contributed to a website redesign initiative and supporting marketing efforts for TXU Energy, with a focus on improving both customer-facing communications and early-stage UX direction.
\n\n
My primary work included building responsive marketing email templates using HTML and CSS, carefully optimizing layouts to ensure readability and visual consistency across email clients and smaller mobile screens. I also worked on annotating wireframes across multiple viewport sizes, helping define how redesigned page layouts should adapt to different form factors and user contexts.
\n\n
This project combined hands-on front-end email development with UX exploration, requiring close collaboration with designers and stakeholders to translate early concepts into structured, implementation-ready assets.`,
    category: 'website',
    screenshots: {
      featured: TXU_SCREENSHOT,
      desktop: TXU_SCREENSHOT,
      "wireframes - small": TXU_CONTENT_TILES_SMALL,
      "wireframes - medium": TXU_CONTENT_TILES_MEDIUM,
      "wireframes - large": TXU_CONTENT_TILES_LARGE,
    },
    href: 'https://www.txu.com',
    date: '2017',
    techStack: ["HTML", "CSS", "Wireframing", "UX Design", "Email Development"],
    featured: false,
  },
  {
    id: 7,
    title: 'Entrust Datacard',
    slug: 'entrust-datacard',
    description: 'Built out the payment flow to purchase SSL certificates',
    longDescription: `Built a multi-step e-commerce checkout flow for purchasing SSL certificates for Entrust Datacard, focused on guiding users through a complex, form-heavy transaction in a clear and structured way.
\n\n
My work involved implementing the full purchase workflow, including order details, contact information, website/security configuration, payment, and final confirmation. Each step was built as a validated form-based interface, requiring users to complete required fields before progressing to the next stage.
\n\n
I also focused on improving usability across smaller screen sizes, ensuring the experience remained accessible and readable on tablet devices. This project strengthened my experience building multi-step forms, managing client-side validation logic, and designing user-friendly purchase flows that reduce friction in complex transactions.`,
    category: 'website',
    screenshots: {
      featured: ENTRUST_CONTACT,
      desktop: ENTRUST_CONTACT,
      tablet: ENTRUST_MEDIUM_VIEW,
      "payment step": ENTRUST_PAYMENT,
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
    longDescription: `Contributed to the development of the City of Denton’s public-facing website as part of a broader redesign effort aimed at creating a more modern, accessible, and visually engaging civic web experience.

My work focused on building responsive page templates and reusable components based on provided design specifications, ensuring consistency across a wide range of site content. I also integrated and managed content within Kentico CMS, helping structure and deliver information across multiple page types.

A key highlight of this project was developing interactive features, including a Google Maps integration for exploring city points of interest such as parks and trails, with color-coded markers based on category type. I also built a “DTV” page using the YouTube API to surface city-produced video content as a dynamic news and media experience.

The site was fully responsive and designed to be mobile-friendly, and the project marked a meaningful milestone in my experience working with external APIs, CMS-driven architecture, and large-scale public sector websites.`,
    category: 'website',
    screenshots: {
      featured: CITY_OF_DENTON_SCREENSHOT,
      desktop: CITY_OF_DENTON_SCREENSHOT,
      tablet: CITY_OF_DENTON_TABLET_SCREENSHOT,
      "maps page": CITY_OF_DENTON_MAPS_SCREENSHOT,
      "DTV (news) page": CITY_OF_DENTON_DTV_SCREENSHOT,
    },
    href: 'https://www.cityofdenton.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Kentico"],
    highlights: [
      "Built an interactive Google Maps feature to showcase local points of interest",
      "Used the YouTube API to create a “DTV” page that displayed city video content as a dynamic media feed.",
      "Helped bring a colorful, mobile-friendly city website design to life across multiple page types.",
    ],
    featured: true,
  },
  {
    id: 9,
    title: 'Cain Watters & Associates',
    slug: 'cain-watters',
    description: 'Built out the website for Cain Watters & Associates',
    longDescription: `Developed a responsive corporate website for Cain Watters & Associates using WordPress, translating detailed design specifications into a polished, professional web experience.

The project focused on building reusable page components and CMS-driven templates to support structured content management across the site. I also implemented interactive UI elements, including a hover card feature with a subtle transparent overlay and text reveal effect to improve content engagement while maintaining a clean corporate aesthetic.

A key part of this project was working directly with the client, including an on-site training session where I walked stakeholders through how to update and manage their website content. This helped ensure they could confidently maintain the site post-launch and established a strong working relationship with their team.

The site was fully responsive and built to support long-term maintainability within WordPress.`,
    category: 'website',
    screenshots: {
      featured: CAIN_WATTERS_SCREENSHOT,
      desktop: CAIN_WATTERS_DESKTOP_SCREENSHOT,
      tablet: CAIN_WATTERS_TABLET_SCREENSHOT,
      mobile: CAIN_WATTERS_MOBILE_SCREENSHOT,
      "hover block component": CAIN_WATTERS_HOVER_BLOCK,
    },
    href: 'https://www.cainwatters.com',
    date: '2016',
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
    highlights: [
      "Built a responsive WordPress site from design specs for a clean, corporate experience.",
      "Added a hover card interaction with a subtle overlay and text reveal for better content engagement.",
      "Trained the client in person on how to update and manage their website content.",
      "Helped the client become fully self-sufficient with ongoing site updates.",
    ],
    featured: false,
  },
  {
    id: 10,
    title: 'Triumph Bancorp',
    slug: 'triumph-bancorp',
    description: 'Built out the website for Triumph Bancorp',
    longDescription: `Designed and developed my first professional personal portfolio website to showcase my work, experience, and growth as a frontend engineer.

The site highlights selected projects through structured case studies, focusing on both technical execution and real-world impact across CMS-driven websites, e-commerce flows, and interactive web experiences. I built reusable components for project layouts, responsive image galleries, and device mockups to create a consistent and engaging presentation of my work.

Built with a mobile-first, responsive approach, the site emphasizes clear storytelling, usability, and visual hierarchy while serving as a foundation for documenting and evolving my professional work over time.`,
    category: 'website',
    screenshots: {
      featured: TRIUMPH_BANCORP_SCREENSHOT,
      desktop: TRIUMPH_BANCORP_SCREENSHOT,
      tablet: TRIUMPH_TABLET_SCREENSHOT,
      mobile: TRIUMPH_MOBILE_SCREENSHOT,
      "healthcare subsidiary": TRIUMPH_SUBSIDIARY_SCREENSHOT,
      "insurance subsidiary": TRIUMPH_SUBSIDIARY2_SCREENSHOT,
      "news datafeed": TRIUMPH_COMPONENTS_SCREENSHOT,
      "post detail page": TRIUMPH_BLOG_SCREENSHOT,
      "subsidiary post detail page": TRIUMPH_BLOG2_SCREENSHOT,
    },
    href: 'https://www.triumphbancorp.com',
    date: '2015',
    highlights: [
      "Built my first professional portfolio website to showcase projects, experience, and technical growth as a frontend engineer.",
      "Built a unified, date-sorted news feed aggregating posts across multiple subsidiaries.",
      "Designed and developed a mobile-first, responsive experience focused on clear storytelling and usability.",
      "Structured the site to highlight real-world work across CMS, e-commerce, and interactive web projects.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
    featured: false,
  },
]