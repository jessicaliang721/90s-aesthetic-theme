import PLACEHOLDER_SCREENSHOT from '../assets/placeholder-ss.png'
import AUI_SCREENSHOT from '../assets/projects/aui-dashboard.png'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Agent UI',
    slug: 'agent-ui',
    description: 'UI agents use to service credit card and savings customers.',
    category: 'web apps',
    screenshots: {
      desktop: AUI_SCREENSHOT,
    },
    date: 'May 2019',
    featured: true,
    longDescription: `Built a complex, production-grade Agent UI supporting customer servicing for credit card and savings products. Implemented key workflows including account management, transaction and dispute flows, document/file upload, and customer preference updates.
    \n\n
    Extended the application into a unified operations platform by integrating real-time customer chat application, fraud management, and case management tools. Focused on building scalable, maintainable UI architecture to support a growing set of tenants and microapps within a single interface.
    `,
    techStack: ["React", "React Query", "Redux", "WebPack", "Sass"],
    highlights: [
      "Reduced agent context switching", 
      "Improved agent workflow efficiency", 
      "Faster and more consistent customer issue resolution"
    ]
  },

  {
    id: 2,
    title: 'sunset hotel',
    slug: 'sunset-hotel',
    description: 'Responsive website for a boutique hotel.',
    category: 'landing pages',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
      mobile: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Nov 2024',
    featured: true,
  },

  {
    id: 3,
    title: 'plan it.',
    slug: 'plan-it',
    description: 'Task management app built with React.',
    category: 'web apps',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Jan 2024',
    featured: true,
  },

  {
    id: 4,
    title: 'palette studio',
    slug: 'palette-studio',
    description: 'Color palette generator tool for designers.',
    category: 'tools',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Feb 2023',
    featured: false,
  },

  {
    id: 5,
    title: 'journaling co.',
    slug: 'journaling-co',
    description: 'Landing page for a journaling subscription box.',
    category: 'landing pages',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'Jun 2022',
    featured: false,
  },

  {
    id: 6,
    title: 'component kitchen',
    slug: 'component-kitchen',
    description: 'A personal UI component library and design system.',
    category: 'ui experiments',
    screenshots: {
      desktop: PLACEHOLDER_SCREENSHOT,
    },
    href: '#',
    date: 'May 2023',
    featured: false,
  },
]