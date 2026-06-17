import { getSocial } from '../data/social'

import Sticker from '../components/Sticker'
import { SocialIcon } from '../components/SocialIcon'
import PhotoSection from '../components/PhotoSection'
import { CTASection } from '../components/CTASection'
import { SocialIcons } from '../components/SocialIcons'
import { StickyNote } from '../components/StickyNote'
import { Button } from '../components/Button'

import PURPLE_WASHI from '../assets/doodles-stickers/purple-washi-tape.png'
import PURPLE_NOTE_PAPER from '../assets/backgrounds/purple-note-paper.png'
import GREEN_NOTE_PAPER from '../assets/backgrounds/green-note-paper.png'
import GREEN_STAR_DOODLE from '../assets/doodles-stickers/green-star-doodle.png'
import PINK_HEART_DOODLE from '../assets/doodles-stickers/pink-heart-doodle-unfilled.png'
import PINK_WASHI_LONG from '../assets/doodles-stickers/pink-washi-long.png'
import BRACELET from "../assets/doodles-stickers/bracelet.png"
import DOBBY from '../assets/IMG_7703.jpg'


export default function Contact() {
  return (
    <main className="px-6">

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-8 lg:gap-0 overflow-visible items-center">

        {/* Left — heading + intro text */}
        <div className="flex-1 lg:-rotate-3 font-mono text-ink leading-relaxed text-xl space-y-6">

          {/* Header with dashes */}
          <div className="flex items-center justify-center gap-2">
            <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <line x1="10" y1="14" x2="22" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="28" x2="22" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="42" x2="22" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h1 className="text-center font-display text-5xl leading-tight">
              contact me
            </h1>
            <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <line x1="18" y1="14" x2="6" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="28" x2="6" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="42" x2="6" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="">
            Thanks for stopping by! I'd love to connect and hear about your open roles and collaboration ideas. ♡
          </p>

          <p className='highlight-yellow'>At this time, I am only considering full-time employment opportunities.</p>
        </div>

        {/* Right — polaroid */}
        <div className="flex-1 flex flex-col items-center pt-8 overflow-visible">
          <PhotoSection
            photoUrl={DOBBY}
            caption="Dobby says hi!"
            rotation={10}
            sticker1={<Sticker imageSrc={PINK_HEART_DOODLE} customClasses="w-20 absolute top-10 -left-10 -rotate-20" />}
            sticker2={<Sticker imageSrc={GREEN_STAR_DOODLE} customClasses="w-24 absolute -bottom-12 -right-12" />}
          />
        </div>

      </section>

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PINK_WASHI_LONG}
        alt=""
        aria-hidden="true"
        className="lg:w-8/12 rotate-[-0.5deg] my-10 mx-auto drop-shadow-lg"
      />

      {/* ── How to reach me ──────────────────────────── */}
      <section className="space-y-10 max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex justify-center">
          <h2 className="header-highlight header-highlight-green tracking-wider hand-underline hand-underline-pink text-3xl rotate-2">how to reach me</h2>
        </div>

        {/* Two contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LinkedIn card */}
          <div className="pt-6">
            <StickyNote bgUrl={PURPLE_NOTE_PAPER} classNames='p-8 text-xl'>
              <div className='space-y-4'>
                <h3 className='text-center text-2xl mb-2'>🖥️ software engineering roles</h3>
                <SocialIcon icon={getSocial('linkedin')?.icon} width={60} height={60} />
                <p className="leading-8">
                  If you're reaching out about <span className="squiggle squiggle-yellow font-semibold">Front-End Developer</span>, <span className="squiggle squiggle-yellow font-semibold">Platform Engineer</span>, or <span className="squiggle squiggle-yellow font-semibold">UI/UX Developer</span> opportunities, please send me a message on LinkedIn. I'd be happy to connect and discuss how I can contribute to your team or project.
                </p>
                <div className="text-center">
                  <Button label="message me" href={getSocial('linkedin')?.href} />
                </div>
              </div>
            </StickyNote>
          </div>

          {/* Email card */}
          <div className="pt-6">
            <StickyNote bgUrl={GREEN_NOTE_PAPER} classNames='p-8 text-xl'>
              <div className='space-y-4'>
                <h3 className='text-center text-2xl mb-2'>✏️ YouTube Collaborations</h3>
                <SocialIcon icon={getSocial('email')?.icon} width={60} height={60} />
                <p className="leading-8">
                  If your brand aligns with cozy hobbies featured on my channel - <span className="font-semibold squiggle squiggle-pink">journaling</span>, <span className="font-semibold squiggle squiggle-pink ">stationery</span>, or <span className="font-semibold squiggle squiggle-pink ">crafting</span> - I'd love to hear from you. Send me an email and let's create something wonderful together.
                </p>
                <div className="text-center">
                  <Button label="email me" href={getSocial('email')?.href} />
                </div>
              </div>
            </StickyNote>
          </div>

        </div>

      </section>

      {/* ── Bottom washi divider ─────────────────────── */}
      <img
        src={PURPLE_WASHI}
        alt=""
        aria-hidden="true"
        className="w-full rotate-[0.5deg] my-10 mx-auto drop-shadow-lg md:mb-0"
      />

      <CTASection
        headerHighlightColor="yellow"
        handUnderlineColor="pink"
        note="⋆˙⟡ Reach out if you want to be friends! ˚⟡˖ ࣪"
        middle={
          <SocialIcons />
        }
        title="let's connect!"
        sticker={
          <Sticker imageSrc={BRACELET} float={true} customClasses="rotate-10 md:w-30 lg:w-40 xl:w-50" />
        }
      />
    </main>
  )
}