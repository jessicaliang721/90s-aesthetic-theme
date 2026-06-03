export interface Role {
  title: string
  startDate: string
  endDate: string | 'Present'
  location: string
  description: string
  skills?: string[]
}

export interface Experience {
  id: number
  company: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  roles: Role[]
}

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Goldman Sachs',
    location: 'Dallas, Texas',
    type: 'full-time',
    roles: [
      {
        title: 'Platform Team Tech Lead',
        startDate: 'Jan 2024',
        endDate: 'Present',
        location: 'Dallas, Texas',
        description:
          'As Tech Lead, I focus on empowering my team to optimize our application in reliability and scale. My role often involves bridging the gap between technical teams and stakeholders to ensure we are building tools that truly solve user problems, such as our recent work integrating a third-party chat solution into our existing application that consolidated multiple workflows into a single interface. Additionally, I enjoy mentoring junior engineers and fostering a culture of best practices and quality code.',
        skills: ['System Architecture', 'User Experience Design', 'Mentorship', 'Stakeholder Management', 'Frontend Development'],
      },
      {
        title: 'Associate Software Engineer',
        startDate: 'May 2019',
        endDate: 'Jan 2024',
        location: 'Dallas, Texas',
        description:
          'During my time as an associate developer, I focused on creating seamless, intuitive user experiences for our agent application that served customers across our Apple and GM partners. Much of my work involved building reusable UI components and standardizing our micro-frontend architecture so our dev teams could deliver new features quickly and consistently. One of my favorite projects was developing a chronological customer timeline that helped our agents get the full picture of a user\'s journey at a glance, making their day-to-day work much easier and more efficient.',
        skills: ['React', 'Micro-Frontend Architecture', 'UI Components', 'TypeScript'],
      },
    ],
  },
  {
    id: 2,
    company: 'Capital One',
    location: 'Plano, Texas',
    type: 'contract',
    roles: [
      {
        title: 'Data Engineer',
        startDate: 'May 2018',
        endDate: 'May 2019',
        location: 'Plano, Texas',
        description:
          'I stepped into this role eager to expand my technical toolkit, quickly picking up Python and AWS to help modernize our data pipelines. I spent my time optimizing how we moved and stored data across the cloud, eventually building a flexible framework that made our loading processes much faster and more reliable. I also led the effort to automate these tasks using Airflow, ensuring our data stayed fresh without constant manual oversight.',
        skills: ['Python', 'Airflow', 'AWS', 'Data Pipelines'],
      },
      {
        title: 'Application Developer',
        startDate: 'May 2017',
        endDate: 'May 2018',
        location: 'Plano, Texas',
        description:
          'In this role, I had the opportunity to combine my technical and design skills. I focused on reimagining the front-end of one of our internal tools to make it more user-centric. By researching design patterns and using Sketch to prototype new interfaces, I was able to significantly simplify administrative tasks and create a much smoother experience for our users.',
        skills: ['Frontend Development', 'UI/UX Design', 'Sketch', 'Prototyping'],
      },
    ],
  },
  {
    id: 3,
    company: 'Imaginuity',
    location: 'Dallas, Texas',
    type: 'full-time',
    roles: [
      {
        title: 'Web Developer',
        startDate: 'Sep 2015',
        endDate: 'May 2017',
        location: 'Dallas, Texas',
        description:
          'Working at a digital agency allowed me to collaborate closely with a variety of clients to bring their brands to life online. I was responsible for the full lifecycle of a project, from the initial brainstorming sessions to the final deployment of responsive websites. It was a great environment for learning how to balance technical requirements with client goals and tight deadlines.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Client Management'],
      },
    ],
  },
]