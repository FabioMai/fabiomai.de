import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Fabio Maienschein</title>
        <meta
          name="description"
          content="I'm based in Munich, where I'm working on
          software products or leverage the internet to explore creative
          passions of mine."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              I am based in Munich, where I am working on software products or
              leverage the internet to explore creative passions of mine.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Most of what I do is driven by intellectual curiosity or
                creative outbursts - I love reverse-engineering others work and
                trying to recreate it from scratch, be it art, programming or
                design.
              </p>
              <p>
                I am a sucker for meetups and knowledge sharing, so if you will
                most likely run into me into events like that in the Munich area
                (if you have any recommendations let me know :).
              </p>
              <p>
                I believe in the value of building expertise by teaching and
                writing which led me to take an advisor position at the
                Precelerator - the community space for entrepreneurship and
                prototyping at the Munich university of applied sciences.
                Working with students and early-stage startups allowed me to
                practice the skill of breaking down complex technical topics for
                a beginner audience and communicating tradeoffs regarding
                choices of technologies.
              </p>
              <p>
                Nowadays I work as a consultant and full-stack developer for{' '}
                <a href="https://www.netlight.com/">Netlight</a>.
              </p>
              <p>
                In my free time you will probably find myself making music,
                drawing, playing spike-ball & frisbee or creating decoration
                using a lasercutter in a local makerspace.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/f_maienschein"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/FabioMai"
                icon={GitHubIcon}
                className="mt-4"
              >
                Check out GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/fabio-maienschein/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect on LinkedIn
              </SocialLink>
              {/* <SocialLink
                href="mailto:"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mail
              </SocialLink> */}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
