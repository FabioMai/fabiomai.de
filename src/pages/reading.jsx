import Image from 'next/future/image'
import React from 'react'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const quotes = [
  {
    author: 'Arthur Schopenhauer',
    quoteText:
      '“When we read, another person thinks for us: we merely repeat his mental process. In learning to write, the pupil goes over with his pen what the teacher has outlined in pencil: so in reading; the greater part of the work of thought is already done for us. This is why it relieves us to take up a book after being occupied with our own thoughts. And in reading, the mind is, in fact, only the playground of another’s thoughts. So it comes about that if anyone spends almost the whole day in reading, and by way of relaxation devotes the intervals to some thoughtless pastime, he gradually loses the capacity for thinking; just as the man who always rides, at last forgets how to walk. This is the case with many learned persons: they have read themselves stupid.”',
    tags: ['Reading', 'Learning'],
  },
  {
    author: 'Whole Earth Catalogue Opening Statement',
    quoteText:
      '"We are as gods and might as well get used to it. A realm of intimate, personal power is developing - power of the individual to conduct his own education, find his own inspiration, shape his own environment, and share his adventure with whoever is interested."',
    tags: ['Self', 'Learning'],
  },
  {
    author: 'E.M. Cioran',
    quoteText:
      '"Society teaches us how to acquire things when it ought to initiate us in the art of letting them go."',
    tags: ['Material World'],
  },
  {
    author: 'Bill Waterson',
    quoteText:
      '"Creating a life that reflects your values and satisfies your soul is a rare achievement. In a culture that relentlessly promotes avarice and excess as the good life, a person happy doing his own work is usually considered an eccentric, if not a subversive. Ambition is only understood if it is to rise to the top of some imaginary ladder of success. Someone who takes an undemanding job because it affords him the time to pursue other interests and activities is considered a flake. A person who abandons a career in order to stay home and raise children is considered not to be living up to his potential-as if a job title and salary are the sole measure of human worth. You will be told in a hundred ways, some subtle and some not, to keep climbing, and never be satisfied with where you are, who you are, and what you are doing. There are a million ways to sell yourself out, and I guarantee you will hear about them. To invent your own life s meaning is not easy, but it is still allowed, and I think you will be happier for the trouble."',
    tags: ['Meaning', 'Career'],
  },
  {
    author: 'Ludwig Wittgenstein',
    quoteText: '"The limits of my language are the limits of my world"',
    tags: ['Perspective'],
  },
  {
    author: 'Richard Feynman',
    quoteText:
      '"You are under no obligation to remain the same person you were a year ago, a month ago, or even a day ago. You are here to create yourself, continuously."',
    tags: ['Self'],
  },
  {
    author: 'Stephen M.R. Covey',
    quoteText:
      '“We judge ourselves by our intentions and others by their behaviour.”',
    tags: ['Self', 'Perspective'],
  },
  {
    author: 'Leo Tolstoy (misquoted)',
    quoteText:
      '"All bad advice is alike, but all good advice is unique to the problem at hand."',
    tags: ['Wisdom'],
  },
  {
    author: 'Carl Jung',
    quoteText:
      '"The perpetual hesitation of the neurotic to launch out into life is readily explained by his desire to stand aside so as not to get involved in the dangerous struggle for existence. But anyone who refuses to experience life must stifle his desire to live - in other words, he must commit partial suicide."',
    tags: ['Self'],
  },
  {
    author: 'Carl Jung',
    quoteText:
      '"In constructing a theory which derives the neurosis from causes in the distant past, we are first and foremost following the tendency of our patient to lure us as far away as possible from the critical present... It is mainly in the present that the affective causes lie, and here alone are the possibilities of removing them."',
    tags: ['Self'],
  },
  {
    author: 'Mortimer J. Adler',
    quoteText:
      '"... the very media we have mentioned are so designed as to make thinking seem unnecessary (though this is only an appearance). The packaging of intellectual positions and views is one of the most active enterprises of some of the best minds of our day. The viewer of television, the listener to radio, the reader of magazines, is presented with a whole complex of elements - all the way from ingenious rhetoric to carefully selected data and statistics - to make  it easy from him to "make up his own mind" with the minimum of difficulty and effort. But the packaging is often done so effectively that the viewer, listener or reader does not make up his own mind at all. Instead, he inserts a packaged opinion into his mind, somewhat like inserting a cassette into a cassette player. He then pushes a button and "plays back" the opinion whenever it seems appropriate to do so. He has performed acceptably without having had to think."',
    tags: ['Wisdom'],
  },
  {
    author: 'Epictetus',
    quoteText:
      '"If you now neglect things and are lazy and are always making delay after delay and set one day after another as the day for paying attention to yourself, then without realizing it you will make no progress but will end up a non-philosopher all through life and death. So decide now that you are worthy of living as a full-grown man who is making progress, and make everything that seems best to be a law that you cannot go against. And if you meet with any hardship or anything pleasant or reputable or disreputable, then remember that the contest is now... and you cannot put things off anymore and that your progress made or destroyed by a single day and a single action."',
    tags: ['Discipline'],
  },
  {
    author: 'Douglas Malloch',
    quoteText:
      '"Good timber does not grow with ease - The stronger wind, the stronger trees; The further sky, the greater length; The more the storm, the more the strength. By sun and cold, by rain and storm, In trees and men good timbers grow."',
    tags: ['Perspective'],
  },
  {
    author: 'Ella Wilcox',
    quoteText:
      '"One ship drives East, and another drives West, By the same gale that blows; ´Tis the set of the sail, and not the gale, That determines the way she goes."',
    tags: ['Perspective'],
  },
  {
    author: 'Susan Sontag (1977)',
    quoteText:
      '"A capitalist society requires a culture based on images. It need to furnish vast amounts of entertainment in order to stimulate buying and anaestetize the injuries of class, race, and sex... Social change is replaced by a change in images. The freedom to consume a plurality of images and goods is equated with freedom itself."',
    tags: ['Society'],
  },
  {
    author: 'Adam Philips',
    quoteText:
      '"Part of the project of adolescence is finding out what makes adults so addicted to life. A life that still involved the infantile pleasures of being loved, adored, stroked, held, cuddled, infinitely attended to and responded to, and thought about; of only sleeping and eating and playing because these are the truly satisfying pleasures. We fall from childhood and find ourselves in a world where we are not enough. We can never be enough. Sanity is a talent for not letting whatever frightens us about ourselves destroy our pleasure in life... The sane create, the mad merely suffer."',
    tags: ['Life & Death'],
  },
  {
    author: 'Unknown',
    quoteText:
      '"If you destroy the ideal, there is nothing to aspire to. Nothing to judge you, even when it is not looking. Woe are we who ourselves of virtues and ideal, so that we may be reprimanded with pity. And as such sell our minds to the worms in the earth, so that they may make us hollow as in life, so in death."',
    tags: ['Life & Death'],
  },
  {
    author: 'Blaise Pascal',
    quoteText:
      '"I have discovered that all the unhappiness of men arises from one single fact: that they cannot stay quietly in their own chamber. I have found that there is one very real reason, namely, the natural poverty of our feeble and mortal condition, so miserable that nothing can comfort us when we think of it closely."',
    tags: ['Self'],
  },
  {
    author: 'Epictetus',
    quoteText:
      '"Do not seek to have events happen as you want them to, but instead want them to happen as they do happen, and your life will go well."',
    tags: ['Perspective'],
  },
  {
    author: 'Unknown',
    quoteText:
      '"Poised midway between the unvisaizable cosmic vastness of curved spacetime and the dubious shadowy flickerings of chaged quanta, we human beings, more like rainbows and mirages than like raindrops and boulders, are unpredicatable self-writing poems - vague, metaphorical, ambitious, and sometimes exceedingly beautiful."',
    tags: ['Life & Death'],
  },
  {
    author: 'Waldo Emerson',
    quoteText:
      '"The common man imprisons himself with the demands of civilised society; he wakes at dawn and sleepwalks through the day, his head bowing towards his feet, never noticing the colours of the leaves or the patterns in the sky. Yet nature is charitable, it continues to produce, blossoming and hibernating according to the cycle of the seasons. Still, man never gives nor appreciates, only receives. He is apathetic, even unconscious to nature. His chest bares only emptiness and he loses himself in phoney attachments and greed. He does not realise that the soil in the ground, the fallen rain from the sky and the blowing of wind are the same as the blood in his veins."',
    tags: ['Self', 'Society'],
  },
  {
    author: 'Yogi Bhajan',
    quoteText:
      '"If you are willing to look at another person`s behaviour toward you as a reflection of the state of their relationship with themselves rather than a statement about your value as a person, then you will, over a period of time cease to react at all."',
    tags: ['Self'],
  },
  {
    author: 'Thich Nhat Hanh',
    quoteText:
      '"When you plant lettuce, if it does not grow well, you don`t blame the lettuce. You look for reasons it is not doing well. It may need fertilizer, or more water, or less sun. You never blame the lettuce. Yet, if we have problems with our friends or family, we blame the other person. But if we know how to take care of them, they will grow well, like the lettuce. Blaming has no positive effect at all, nor does trying to persuade using reason and argument. That is my experience. No blame, no reasoning, no argument, just understanding. If you understand, and you show that you understand, you can love, and the situation will change."',
    tags: ['Self', 'Love'],
  },
  {
    author: 'Michael Fishman',
    quoteText:
      '"Self-made is an illusion. There are many people who played divine roles in you having the life that you have today. Be sure to let them know how grateful you are."',
    tags: ['Perspective'],
  },
  {
    author: 'Wall Street Journal',
    quoteText:
      '"Instead of saying "I don`t have time" try saying "it`s not a priority." and see how that feels. Often, that`s a perfectly adequate explanation. I have time to iron my sheets, I just don`t want to. But other things are harder. Try it "I`m not going to edit your resume, sweetie, because it`s not a priority." "I don`t go to the doctor because my health is not a priority." If these phrases don`t sit well, that`s the point. Changing our language reminds us that time is a choice. If we don`t like how we`re spending an hour, we can choose differently."',
    tags: ['Perspective'],
  },
  {
    author: 'Arthur Schopenhauer',
    quoteText:
      '"What disturbs and depresses young people is the hunt for happiness on the firm assumption that it must be met with in life. From this arises constantly deluded hope and dissatisfaction. Deceptive images of a vague happiness hover before us in our dreams, and we search in vain for their original. Much would have been gained if, through timely advice and instruction, young people could have had eradicated from their minds the erroneous notion that the world has a great deal to offer them."',
    tags: ['Wisdom'],
  },
  {
    author: 'Salvador Dali',
    quoteText:
      '"Have no fear from perfection in life, because you will never reach it."',
    tags: ['Wisdom'],
  },
  {
    author: 'William Shakespeare',
    quoteText:
      '"Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt."',
    tags: ['Self'],
  },
  {
    author: 'Jim Carrey',
    quoteText:
      '"You can fail on what you don`t want, so you might as well take a chance on doing what you love."',
    tags: ['Perspective'],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reading() {
  const [filter, setFilter] = React.useState('')

  function handleClick(tag) {
    if (tag === filter) {
      setFilter('')
    } else {
      setFilter(tag)
    }
  }

  function getFilteredQuotes(quotes) {
    if (filter === '') {
      return quotes
    } else {
      return quotes.filter((quote) => quote.tags.includes(filter))
    }
  }

  return (
    <>
      <Head>
        <title>Reading - Fabio Maienschein</title>
        <meta
          name="description"
          content="Some quotes and ideas that stuck with me over the years."
        />
      </Head>
      <SimpleLayout
        title="Some quotes and ideas that stuck with me over the years."
        intro="If you're reading this, chances are that our interests overlap to a certain extent - give the quotes below a try and see if something reasonates!"
      >
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a category to filter by
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            onClick={() => handleClick(tag)}
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {[...new Set(quotes.map((q) => q.tags).flat(1))]
              .sort()
              .map((tag) => (
                <option key={tag}>{tag}</option>
              ))}
          </select>
        </div>
        <div className="hidden rounded-md border p-4 sm:block">
          <div className="flex flex-wrap space-x-4" aria-label="Tabs">
            {[...new Set(quotes.map((q) => q.tags).flat(1))]
              .sort()
              .map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleClick(tag)}
                  className={classNames(
                    tag === filter
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-gray-500 hover:text-gray-700',
                    'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer'
                  )}
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <ul
          role="list"
          className="mt-4 gap-4 divide-y divide-gray-200 md:columns-2 lg:columns-3"
        >
          {getFilteredQuotes(quotes).map((quote) => (
            <div
              className="relative mx-auto mb-4 max-w-prose break-inside-avoid-column text-base lg:max-w-none"
              key={quote.quoteText}
            >
              <blockquote className="relative rounded-lg bg-white shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="relative mt-8 text-gray-700">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{quote.quoteText}</p>
                  </div>
                </div>
                <cite className="relative flex items-center rounded-b-lg bg-teal-100 py-5 px-6 not-italic sm:py-5 sm:pl-12 sm:pr-10">
                  <span className="relative leading-6">
                    <span className=" text-sm text-teal-700">
                      {quote.author}
                    </span>
                  </span>
                </cite>
              </blockquote>
            </div>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
