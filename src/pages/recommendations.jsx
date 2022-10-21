import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function RecommendationSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Entry({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Recommendations() {
  return (
    <>
      <Head>
        <title>Recommendations - Fabio Maienschein</title>
        <meta
          name="description"
          content="Projects and work by others I admire."
        />
      </Head>
      <SimpleLayout
        title="Projects and work by others I admire."
        intro="I love recommendations. That's probably why I spend too much time browsing the internet to discover the works of others and to learn from them about their crafts and adjacent creators."
      >
        <div className="space-y-20">
          <RecommendationSection title="Photography">
            <Entry title="Humans of New York - Brandon Stanton">
              There's something deeply touching about the way Brandon approaches the unfiltered human core of those he meets and photographs and the resulting work clearly shows that. I own both his HONY and Humans book and gifted it to a couple of people because I enjoy it so much.
            </Entry>
            <Entry title="Christina Mittermeyer">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Entry>
            <Entry title="Ladzinski">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Entry>
          </RecommendationSection>
          <RecommendationSection title="Crafts">
            <Entry title="Laser Cut Guy">
              Up until 2020 I haven't even seen a laser-cutter in my life, but being exposed to his works opened up a world of creative outlets for me (if you think 3D-printing is awesome then think about what cutting wood into any desirable shape within minutes enables you to do!). Without him and his behind the scenes stuff on Instagram I would have never picked up that hobby.
            </Entry>
            <Entry title="Joony Art">
              I've never been much of an artist, in fact I don't think my drawing skills ever went beyond elementary school level. Somehow I ended up with some some acrylic colors and stumbled upon Joony's channel on Youtube, making for another very relaxing hobby.
            </Entry>
          </RecommendationSection>
          <RecommendationSection title="Developers/ Designers">
            <Entry title="Adam Wathan/ Steve Schoger">
              Finding good ways to re-use existing code and design artifacts across projects is an interesting challenge, and Adam and Steve went beyond that by creating a reusable CSS Framework based on utility classes (Tailwind CSS) and even productized their solution in an amazing fashion (a masterclass in pre-selling, building in public and so much more). I bought access to their full materials and don't regret supporting them one bit.
            </Entry>
            <Entry title="Jeff Delaney - Fireship.io">
              Whenever there is a shiny new framework or technology on the horizon, this is where I look for a quick five minute introduction. Jeff's excitement for new tech is ANSTECKEND and his way of breaking down how-to knowledge in conscise bits is inspiring. 
            </Entry>
            <Entry title="Courtland Allen - Indiehackers.com">
              Courtland got into YC as part of STARTUP, but felt like their had to be another way of entrepreneurship that puts developers more into charge of their companies fate than going the venture capital route. He started and grew a now global community of so called indie hackers pursuing entrepreneurship on their own terms. His work inspired me to dedicate my master's thesis to software developers turned indie entrepreneurs.
            </Entry>
          </RecommendationSection>
          <RecommendationSection title="Books">
            <Entry title="The way to love">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Entry>
            <Entry title="The wisdom of anxiety">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Entry>
            <Entry title="Similliarion/ Hobbit/ Lord of the rings">
              This one needs no introduction, I soaked up the Tolkien works like a sponge when I was younger.
            </Entry>
            <Entry title="Brandon Sanderson metal wizard thing">
              Another fantasy universe that I really enjoyed reading when I was younger.
            </Entry>
          </RecommendationSection>
        </div>
      </SimpleLayout>
    </>
  )
}
