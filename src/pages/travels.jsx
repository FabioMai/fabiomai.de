import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TravelSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Travels() {
  return (
    <>
      <Head>
        <title>Travels - Fabio Maienschein</title>
        <meta
          name="description"
          content="Getting out of my comfort zone and putting myself in unknown environments has done wonders for my confidence as well as humility."
        />
      </Head>
      <SimpleLayout
        title="Getting out of my comfort zone and putting myself in unknown environments has done wonders for my confidence as well as humility."
        intro="Emerging into a local setting in cultures much different to your own makes you reconsider what's normal for you and your culture and ultimately broadens your horizon in terms of living standards and human experiences around the world."
      >
        <div className="space-y-20">
          <TravelSection title="North America">
            <Appearance
              href="https://tbaydreams.home.blog/"
              title="Semester abroad in Thunder Bay, Ontario (Canada) during my bachelors"
              description="Studying abroad at the university with probably the highest amount of foreign students allowed me to meet fascinating people from across the world in a unique campus life setting with a lovely fall and freezing winter (-30°C)."
              event="08/2017 - 12/2017"
              cta="Read blog"
            />
          </TravelSection>
          <TravelSection title="Central America">
            <Appearance
              href="http://elotesnearme.home.blog/"
              title="Volunteering in Mexico inbetween my bachelors and masters"
              description="Working as an English conversational teacher and travelling the country afterwards allowed me to visit many of my Mexican friends back from Canada as well as exploring the diverse landscapes, rich culture and delicious food of Mexico."
              event="10/18 - 12/18"
              cta="Read blog"
            />
          </TravelSection>
          <TravelSection title="Europe">
          <Appearance
              href="#"
              title="Backpacking Andalusia for 10 days after returning from Canada"
              description="My time in Canada instilled a sense of urgency and travel bug that lead me to use the leftover time I had before my master's to go backpacking in Andalusia."
              event="01/2018"
              cta=""
            />
            <Appearance
              href="#"
              title="Roadtrip through Finland & Norway after finishing a summer school in Helsinki"
              description="After falling in love with the snowy mountains and crystal clear glacier lakes in Canada, it was only logical to use the opportunity of a summer school offered in Helsinki to go on 4-week roadtrip through the north of Finland and Norway."
              event="08/19 - 09/19"
              cta=""
            />
          </TravelSection>
          <TravelSection title="South America">
            <Appearance
              href="https://felt.com/map/Peru-Bolivien-Kolumbien-h9BoglDmISUu25nwdDiFXeD"
              title="Getting lost in the most biodiverse region of the world and its surrounding countries (Peru/Bolivia/Colombia)"
              description="I met a lot of people in Mexico who loved their time in Colombia, so it was high up on my bucket list. After submitting my master's thesis I ended up quitting my part time job and going on a journey that would be the longest I was ever on in terms of travelled distance and diversity of landscapes as well as people."
              event="06/22 - 08/22"
              cta="See route"
            />
          </TravelSection>
        </div>
      </SimpleLayout>
    </>
  )
}
