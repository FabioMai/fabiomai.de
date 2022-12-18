import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import iconCreative from '@/images/icons/creative.svg'
import iconDesktop from '@/images/icons/desktop.svg'
import iconMobile from '@/images/icons/phone.svg'
import iconBuilding from '@/images/icons/building.svg'

const projects = [
  {
    name: 'precelerator.de',
    description:
      'Landing page and event-section of the Precelerator, the Munich University of Applied Sciences Makerspace I have been working for from 2020-2022.',
    link: { href: 'https://precelerator.de', label: 'precelerator.de' },
    logo: iconDesktop,
    tags: ['Landing Page', 'Next.js', 'Bootstrap', 'Google Sheets API'],
  },
  {
    name: 'City Maps Europe',
    description:
      'Programmatically generated stylized maps of cities available as high quality prints.',
    link: { href: 'https://city-maps.eu', label: 'city-maps.eu' },
    logo: iconBuilding,
    tags: ['E-Commerce', 'Print-on-demand', 'Generative Art', 'Python'],
  },
  {
    name: 'Design Dekor',
    description:
      'Fancy decoration pieces made out of wood using a lasercutter.',
    link: { href: 'https://design-dekor.de', label: 'design-dekor.de' },
    logo: iconCreative,
    tags: ['Vector Graphics', 'Laser-Cutting', 'Art', 'Home Decor'],
  },
  {
    name: 'Biodiversitaet in Seen',
    description: 'Exploratory visualisation of biodiversity within lakes.',
    link: {
      href: 'https://fabiomai.github.io/visualisierung-see/',
      label: 'github.com',
    },
    logo: iconCreative,
    tags: ['Hackathon', 'Data Visualisation', 'Creative Coding'],
  },
  {
    name: 'Triangular Art',
    description:
      'Generative art project recreating photos in a polygonal/ triangular style.',
    link: {
      href: 'https://www.instagram.com/triangul4rt/',
      label: 'instagram.com',
    },
    logo: iconCreative,
    tags: ['Generative Art'],
  },
  {
    name: 'SAVEDiversity',
    description:
      'App idea for a hackathon project around the topic of biodiversity loss and conservation.',
    link: {
      href: 'https://savediversity.netlify.app/app',
      label: 'savediversity.de',
    },
    logo: iconMobile,
    tags: ['Hackathon', 'App Prototyping', 'Figma', 'Landing Page'],
  },
  {
    name: 'SAVEDiversity 3D visualisation',
    description:
      'App idea for a hackathon project around the topic of biodiversity loss and conservation.',
    link: {
      href: 'https://savediversity.netlify.app/demo',
      label: 'savediversity.de/demo',
    },
    logo: iconMobile,
    tags: ['Hackathon', 'App Prototyping', '3D Design', 'Spline'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Fabio Maienschein</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-200 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>
                {project.description}
                <div className="mt-6 flex flex-wrap text-xs">
                  {project.tags.map((tag) => (
                    <span
                      className="m-0.5 flex-none rounded-full border border-solid px-2 py-0.5"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
