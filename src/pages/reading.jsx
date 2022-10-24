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
]

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
        <ul className="flex flex-row" role="list">
          {[...new Set(quotes.map((q) => q.tags).flat(1))].sort().map((tag) => (
            <li
              key={tag}
              onClick={() => handleClick(tag)}
              className={'m-0.5 flex-none rounded-full px-2 py-0.5 hover:cursor-pointer '.concat(
                tag === filter
                  ? 'border-4 border-solid bg-gray-100'
                  : 'border-2 border-solid'
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul
          role="list"
          className="divide-y divide-gray-200"
        >
          {getFilteredQuotes(quotes).map((quote) => (
            <li key={quote.quoteText} className="px-4 py-4 sm:px-0">
                <h1 className="text-bold text-small">{quote.author}</h1>
                {quote.quoteText}
                <div className="mt-6 flex flex-wrap text-xs">
                  {quote.tags.map((tag) => (
                    <span
                      className="m-0.5 flex-none rounded-full border-2 border-solid px-2 py-0.5"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
