import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Farhan Helmy',
   initials: 'Farhan H.',
   url: 'https://farhanhelmy.com',
   location: 'Kuala Lumpur, Malaysia',
   locationLink: 'https://www.google.com/maps/place/kuala+lumpur',
   description:
    'Open source lover, full stack developer, and a passionate learner. I love to build things.',
   summary:
    'Creator of [carisurau.com](https://carisurau.com), [tempahjer.com](https://tempahjer.com) and [others](https://farhanhelmy.com/projects). \n\n'
    + 'I am ex-Amazonian, I used to work at AWS as a Solutions Architect.\n\n'
    + 'Let\'s connect and grow the tech community in Malaysia!\n\n',
   avatarUrl: '/farhan.png',
   skills: [
      'React',
      'Cloud Optimization',
      'Next.js',
      'Typescript',
      'Node.js',
      'Postgres',
      'Docker',
      'Kubernetes',
      'PHP',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'farhanawsconsole@gmail.com',
      tel: '+6012-3456789',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/farhan-helmy',
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/muhammad-farhan-helmy-0529501a7/',
            icon: Icons.linkedin,

            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://x.com/farhanhelmycode',
            icon: Icons.x,

            navbar: true,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://www.youtube.com/channel/UCAby1ePn-lO3WiLpKMPvXyA',
            icon: Icons.youtube,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'SEEK',
         href: 'https://www.jobstreet.com.my/',
         badges: [],
         location: 'Hybrid',
         title: 'Software Engineer',
         logoUrl: '/seek.png',
         start: 'Aug 2023',
         end: 'Current',
         description:
        'Develop and maintain Jira and Confluence plugins.',
      },
      {
         company: 'ServiceRocket',
         href: 'https://www.servicerocket.com/',
         badges: [],
         location: 'Remote',
         title: 'Software Engineer',
         logoUrl: '/servicerocket_logo.jpeg',
         start: 'Oct 2022',
         end: 'Aug 2023',
         description:
        'Develop and maintain Jira and Confluence plugins.',
      },
      {
         company: 'AWS',
         href: 'https://aws.amazon.com/',
         badges: [],
         location: 'Hybrid',
         title: 'Solutions Architect',
         logoUrl: '/aws.webp',
         start: 'May 2021',
         end: 'Oct 2022',
         description:
        'Worked with customers to provide technical solutions to their business problems. Helped customers architect, deploy, and optimize their workloads on AWS.',
      },
   ],
   education: [
      {
         school: 'UNITEN',
         href: 'https://www.uniten.edu.my/',
         degree: 'Computer Science (Hons)',
         logoUrl: '/uniten.png',
         start: '2018',
         end: '2021',
      },
   ],
   projects: [
      {
         title: 'CariSurau',
         href: 'https://carisurau.com',
         dates: 'Oct 2023 - Present',
         active: true,
         description:
        'CariSurau is a platform that helps you find the nearest surau or mosque in Malaysia. It is a community-driven platform that allows users to add new surau or mosque to the platform.',
         technologies: [
            'webapp',
            'community',
            'nextjs',
            'platform',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://carisurau.com',
               icon: '',
            },
            {
               type: 'Source',
               href: 'https://github.com/farhan-helmy/carisurau',
               icon: '',
            },
         ],
         image: '/carisurau.png',
         video:
        '',
      },
      {
         title: 'More Projects',
         href: 'https://github.com/farhan-helmy?tab=repositories',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://github.com/farhan-helmy?tab=repositories',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '/farhan.png',
         video: '',
      },
   ],
} as const
