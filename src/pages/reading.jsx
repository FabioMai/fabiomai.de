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
  {
    author: 'Ludwig von Mises',
    quoteText:
      '"The specific anticipative understanding of the conditions of the uncertain future defies any rules and systematization. It can be neither taught nor learned. If it were different, everybody could embark upon entrepreneurship with the same prospect of success. What distinguishes the successful entrepreneur and promoter from other people is precisely the fact that he does not let himself be guided by what was and is, but arranges his affairs on the ground of his opinion about the future. He sees the past and the present as other people do; but he judges the future in a different way. In his actions he is directed by an opinion about the future which deviates from that held by the crowd."',
    tags: ['Entrepreneurship'],
  },
  {
    author: 'Joost Meerloo',
    quoteText:
      '"Modern technology teaches man to take for granted the world he is looking at, he takes no time to retreat and reflect. Technology lures him on, dropping him into its wheels and movements. No rest, no meditation, no reflection, no conversation - the senses are continually overloaded with stimuli. The child doesn`t learn to question his world any more; the screen offers him answers - ready-made."',
    tags: ['Society'],
  },
  {
    author: 'Tim Grover',
    quoteText:
      '"Every minute, every hour, every day that you sit around trying to figure out what to do, someone else is already doing it. While you`re trying to choose whether to go left or right, this way or that way, someone else is already there. While you`re paralyzed from overthinking and overanalyzing your next move, someone else went with his gut and beat you to it. Make a choice, or a choice will be made for you."',
    tags: ['Perspective'],
  },
  {
    author: 'Bertrand Russell (1932)',
    quoteText:
      '"The pleasures of urban populations have become mainly passive: seeing cinemas, watching football matches, listening to the radio, and so on. This results from the fact that their active energies are fully taken up with work; if they had more leisure, they would again enjoy pleasures in which they took an active part."',
    tags: ['Society'],
  },
  {
    author: 'Martin Heidegger',
    quoteText: '"Every man is born as many men and dies as a single one."',
    tags: ['Life & Death'],
  },
  {
    author: 'Austin Kleon',
    quoteText:
      '“Plagiarism is trying to pass someone else’s work as your own. Copying is about reverse-engineering. It’s like a mechanic taking apart a car to see how it works.”',
    tags: ['Perspective'],
  },
  {
    author: 'Epicurus',
    quoteText:
      '"Do not spoil what you have by desiring what you have not, remember that what you have now was once a month the things that you only hoped for."',
    tags: ['Perspective'],
  },
  {
    author: 'Hindu Proverb',
    quoteText:
      '"There is nothing noble in being superior to some other man. The true nobility is in being superior to your former self"',
    tags: ['Perspective'],
  },
  {
    author: 'Epictetus',
    quoteText:
      '“If a person gave away your body to some passerby, you’d be furious. Yet you hand over your mind to anyone who comes along, so they may abuse you, leaving itdisturbed and troubled—have you no shame in that?”',
    tags: ['Self'],
  },
  {
    author: 'Jean-Luc Picard',
    quoteText:
      '"It is possible to commit no mistakes and still lose. That is not a weakness. That is life."',
    tags: ['Life & Death'],
  },
  {
    author: 'Musonius Rufus',
    quoteText:
      '“If you achieve something good with hard work, the labour passes away, but the good remains. If you do something shameful for the sake of pleasure, the pleasure passes, but the shame remains.”',
    tags: ['Perspective'],
  },
  {
    author: 'Unknown',
    quoteText:
      '"The capacity to be alone is the capacity to love. It may look paradoxical to you, but it`s not. It is an existential truth: only those people who are capable of being alone are capable of love, of sharing, of going into the deepest core of another person--without possessing the other, without becoming dependent on the other, without reducing the other to a thing, and without becoming addicted to the other. They allow the other absolute freedom, because they know that if the other leaves, they will be as happy as they are now. Their happiness cannot be taken by the other, because it is not given by the other."',
    tags: ['Love'],
  },
  {
    author: 'C.S. Lewis',
    quoteText:
      '"You cannot go back and change the beginning, but you can start where you are and change the ending."',
    tags: ['Life & Death'],
  },
  {
    author: 'Chinese Proverb',
    quoteText:
      '“We have two lives, and the second begins when we realize we only have one.”',
    tags: ['Life & Death'],
  },
  {
    author: 'Seneca',
    quoteText: '“A man is as unhappy as he has convinced himself he is.”',
    tags: ['Happiness'],
  },
  {
    author: 'Steven Pressfield',
    quoteText:
      '"The professional knows that the mundane physical act of sitting down and starting to work, sets in motion a mysterious process that produces inspiration. The amateur waits for inspiration, the professional knows that it will come after he starts. The professional therefore acts in the face of fear, when the amateur fears a big creative endeavor he waits for the fear to disappear, the professional knows this will never happen and starts anyway."',
    tags: ['Work'],
  },
  {
    author: 'Joan Didion',
    quoteText:
      '“Character — the willingness to accept responsibility for one’s own life — is the source from which self-respect springs"',
    tags: ['Life & Death'],
  },
  {
    author: 'Henry Thoreau',
    quoteText: '"Not until we are lost do we begin to understand ourselves."',
    tags: ['Self'],
  },
  {
    author: 'Upton Sinclair',
    quoteText:
      '"It is difficult to get a man to understand something, when his salary depends upon his not understanding it!"',
    tags: ['Work'],
  },
  {
    author: 'Ralph Waldo Emerson',
    quoteText:
      '“To laugh often and much; to win the respect of the intelligent people and the affection of children; to earn the appreciation of honest critics and endure the betrayal of false friends; to appreciate beauty; to find the beauty in others; to leave the world a bit better whether by a healthy child, a garden patch, or a redeemed social condition; to know that one life has breathed easier because you lived here. This is to have succeeded.”',
    tags: ['Life & Death'],
  },
  {
    author: 'Andre Gide',
    quoteText:
      '"Man cannot discover new oceans unless he has the courage to lose sight of the shore.”',
    tags: ['Perspective'],
  },
  {
    author: 'Seneca',
    quoteText:
      '"If a man knows not which port he sails, every wind is favorable."',
    tags: ['Perspective'],
  },
  {
    author: 'William Blake',
    quoteText:
      '"If the doors of perception were cleansed every thing would appear to man as it is, Infinite. For man has closed himself up, till he sees all things thro` narrow chinks of his cavern.”',
    tags: ['Perspective'],
  },
  {
    author: 'Antoine de Saint Exupéry',
    quoteText:
      '“If you want to build a ship, don`t drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.”',
    tags: ['Work'],
  },
  {
    author: 'Mr. Peanutbutter',
    quoteText:
      '“The universe is a cruel, uncaring void. The key to being happy isn`t a search for meaning. It`s to just keep yourself busy with unimportant nonsense, and eventually, you`ll be dead.”',
    tags: ['Life & Death'],
  },
  {
    author: 'Francis of Assisi',
    quoteText:
      '"Start by doing what`s necessary; then do what`s possible; and suddenly you are doing the impossible."',
    tags: ['Work'],
  },
  {
    author: 'Unknown',
    quoteText: '"You can`t direct the wind, but you can adjust your sails."',
    tags: ['Perspective'],
  },
  {
    author: 'Maya Angelou',
    quoteText:
      '“If you don’t like something, change it. If you can’t change it, change your attitude.”',
    tags: ['Self'],
  },
  {
    author: 'Charles Dickens',
    quoteText:
      '“My advice is to never do tomorrow what you can do today. Procrastination is the thief of time.”',
    tags: ['Work'],
  },
  {
    author: 'John Wooden',
    quoteText:
      '“Never make excuses. Your friends don’t need them, and your foes won’t believe them.”',
    tags: ['Work'],
  },
  {
    author: 'Jiddu Krishnamurti',
    quoteText:
      'It is no measure of health to be well adjusted to a profoundly sick society."',
    tags: ['Society'],
  },
  {
    author: 'Henri Bergson',
    quoteText:
      '"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.”',
    tags: ['Life & Death'],
  },
  {
    author: 'Martin Luther King, Jr.',
    quoteText:
      '“You who are in the field of psychology have given us a great word. It is the word maladjusted. This word is probably used more than any other word in psychology. It is a good word; certainly it is good that in dealing with what the word implies you are declaring that destructive maladjustment should be destroyed. You are saying that all must seek the well-adjusted life in order to avoid neurotic and schizophrenic personalities. But on the other hand, I am sure that we will recognize that there are some things in our society, some things in our world, to which we should never be adjusted. There are some things concerning which we must always be maladjusted if we are to be people of good will. We must never adjust ourselves to racial discrimination and racial segregation. We must never adjust ourselves to religious bigotry. We must never adjust ourselves to economic conditions that take necessities from the many to give luxuries to the few. We must never adjust ourselves to the madness of militarism, and the self-defeating effects of physical violence.”',
    tags: ['Society'],
  },
  {
    author: 'Uncle Iroh',
    quoteText:
      '"Pride is not the opposite of shame, but its source. True humility is the only antidote"',
    tags: ['Self'],
  },
  {
    author: 'Chuck Close',
    quoteText:
      '"The advice I like to give young artists, or really anybody who`ll listen to me, is not to wait around for inspiration. Inspiration is for amateurs; the rest of us just show up and get to work. If you wait around for the clouds to part and a bolt of lightning to strike you in the brain, you are not going to make an awful lot of work. All the best ideas come out of the process; they come out of the work itself. Things occur to you. If you`re sitting around trying to dream up a great art idea, you can sit there a long time before anything happens. But if you just get to work, something will occur to you and something else will occur to you and something else that you reject will push you in another direction. Inspiration is absolutely unnecessary and somehow deceptive. You feel like you need this great idea before you can get down to work, and I find that`s almost never the case."',
    tags: ['Work'],
  },
  {
    author: 'Erich Fromm',
    quoteText:
      '"Vielleicht ist kein Leben vom Standpunkt einer Bilanz aus lebenswert. Es endet unausweichlich mit dem Tode, viele unserer Hoffnungen werden enttäuscht, unser Leben bringt Leiden und Mühe ... Wer wollte aber andererseits behaupten, dass ein glücklicher Augenblick der Liebe oder die Lust zu atmen oder ein Gang in frischer Morgenluft nicht alles Leiden und alle Mühe wieder aufwiegt, die das Leben mir sich bringt?"',
    tags: ['Life & Death'],
  },
  {
    author: 'Alan Watts',
    quoteText:
      'Once upon a time there was a Chinese farmer whose horse ran away. That evening, all of his neighbors came around to commiserate. They said, “We are so sorry to hear your horse has run away. This is most unfortunate.” The farmer said, “Maybe.” The next day the horse came back bringing seven wild horses with it, and in the evening everybody came back and said, “Oh, isn’t that lucky. What a great turn of events. You now have eight horses!” The farmer again said, “Maybe.” The following day his son tried to break one of the horses, and while riding it, he was thrown and broke his leg. The neighbors then said, “Oh dear, that’s too bad,” and the farmer responded, “Maybe.” The next day the conscription officers came around to conscript people into the army, and they rejected his son because he had a broken leg. Again all the neighbors came around and said, “Isn’t that great!” Again, he said, “Maybe.”',
    tags: ['Perspective'],
  },
  {
    author: 'Unknown Monk 1100 A.D.',
    quoteText:
      '“When I was a young man, I wanted to change the world. I found it was difficult to change the world, so I tried to change my nation. When I found I couldn`t change the nation, I began to focus on my town. I couldn`t change the town and as an older man, I tried to change my family. Now, as an old man, I realize the only thing I can change is myself, and suddenly I realize that if long ago I had changed myself, I could have made an impact on my family. My family and I could have made an impact on our town. Their impact could have changed the nation and I could indeed have changed the world.”',
    tags: ['Self'],
  },
  {
    author: 'Don Norman',
    quoteText:
      '"Don’t ask people what they want. Watch them and figure out their needs. If you ask, people usually focus on what they have and ask for it to be better: cheaper, faster, smaller. A good observer might discover that the task is unnecessary, that it is possible to restructure things or provide a new technology that eliminates the painstaking parts of their procedures. If you just follow what people ask for, you could end up making their lives even more complicated."',
    tags: ['Work'],
  },
  {
    author: 'Unknown',
    quoteText:
      '"There can be no design without a customer, a problem and some constraints. Therefore engaging heavily in the visual aspect alone leads to unrealistic outcomes which also misrepresent product design as a practice."',
    tags: ['Work'],
  },
  {
    author: 'David Foster Wallace',
    quoteText:
      '”…in the day to day trenches of adult existence, banal platitudes can have a life or death importance.”',
    tags: ['Life & Death'],
  },
  {
    author: 'Jeff Hammerbacher',
    quoteText:
      '“The best minds of my generation are thinking about how to make people click ads. That sucks.”',
    tags: ['Society', 'Work'],
  },
  {
    author: 'Unknown',
    quoteText:
      '"Kate, this is the 7th culture transformation I have been through. They have all failed. What are you going to do differently?" I reply with, "I`m not. It`s what you are going to do differently." This leads to a bit of a blank stare and open mouth from leaders. I then say, "I can`t do the work for you because then you haven`t learned anything and are dependent on my abilities. I am here as your gym trainer. I will work as hard as you do and at the pace you want to go at. I will guide you, but it`s up to you to put in the effort."',
    tags: ['Work'],
  },
  {
    author: 'Friedrich Nietzsche',
    quoteText:
      '"In so far as the word "knowledge" has any meaning, the world is knowable; but it is interpretable otherwise, it has no meaning behind it, but countless meanings.—"Perspectivism." It is our needs that interpret the world; our drives and their For and Against. Every drive is a kind of lust to rule; each one has its perspective that it would like to compel all the other drives to accept as a norm."',
    tags: ['Perspective'],
  },
  {
    author: 'Hannah Arendt',
    quoteText:
      '"So long as we desire temporal things, we are constantly under this threat, and our fear of losing always corresponds to our desire to have. Temporal goods originate and perish independently of man, who is tied to them by his desire. Constantly bound by craving and fear to a future full of uncertainties, we strip each present moment of its calm, its intrinsic import, which we are unable to enjoy. And so, the future destroys the present."',
    tags: ['Happiness'],
  },
  {
    author: 'James Baldwin',
    quoteText:
      '"It took many years of vomiting up all the filth I`d been taught about myself, and half-believed, before I was able to walk on this earth as though I had a right to be here."',
    tags: ['Self'],
  },
  {
    author: 'Stephen R. Covey',
    quoteText:
      '“In the space between stimulus (what happens) and how we respond, lies our freedom to choose. Ultimately, this power to choose is what defines us as human beings. We may have limited choices but we can always choose. We can choose our thoughts, emotions, moods, our words, our actions; we can choose our values and live by principles. It is the choice of acting or being acted upon.”',
    tags: ['Self'],
  },
  {
    author: 'Hermann Hesse',
    quoteText:
      '"Most men, the herd, have never tasted solitude. They leave father and mother, but only to crawl to a wife and quietly succumb to new warmth and new ties. They are never alone, they never commune with themselves. And when a solitary man crosses their path, they fear him and hate him like the plague; they fling stones at him and find no peace until they are far away from him. The air around him smells of stars, of cold stellar spaces; he lacks the soft warm fragrance of the home and hatchery. "',
    tags: ['Self'],
  },
  {
    author: 'Tao Te Ching Ch.17',
    quoteText:
      '"The best leaders are those the people hardly know exist. The next best is a leader who is loved and praised. Next comes the one who is feared. The worst one is the leader that is despised. If you don’t trust the people, they will become untrustworthy. The best leaders value their words, and use them sparingly. When she has accomplished her task, the people say, “Amazing: we did it, all by ourselves!”',
    tags: ['Work'],
  },
  {
    author: 'J.J. Thomson',
    quoteText:
      '“If you pay a man a salary for doing research, he and you will want to have something to point to at the end of the year to show that the money has not been wasted. In promising work of the highest class, however, results do not come in this regular fashion, in fact years may pass without any tangible result being obtained, and the position of the paid worker would be very embarrassing and he would naturally take to work on a lower, or at any rate a different plane where he could be sure of getting year by year tangible results which would justify his salary. The position is this: You want one kind of research, but, if you pay a man to do it, it will drive him to research of a different kind. The only thing to do is to pay him for doing something else and give him enough leisure to do research for the love of it."',
    tags: ['Work'],
  },
  {
    author: 'Steve Jobs',
    quoteText:
      '“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”',
    tags: ['Perspective'],
  },
  {
    author: 'Viktor Frankl',
    quoteText:
      '“What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him. What he needs is not the discharge of tension at any cost, but the call of a potential meaning waiting to be fulfilled by him.”',
    tags: ['Self'],
  },
  {
    author: 'Bei Viktor Frankl weitermachen bis Seneca + Epictetus Kombo',
    quoteText: '',
    tags: ['Perspective'],
  },
  {
    author: '',
    quoteText: '',
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
