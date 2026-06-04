import { useNavigate } from 'react-router-dom'
import { skills } from '../data/content'

import { Button } from '../components/Button'
import Sticker from "../components/Sticker";

import PINK_WASHI_LONG from '../assets/doodles-stickers/pink-washi-long.png'
import PURPLE_WASHI from '../assets/doodles-stickers/purple-washi-tape.png'
import TAMAGOTCHI_STICKER from '../assets/doodles-stickers/tamagotchi.png'

import { AboutSection } from '../components/AboutSection'
import { BulletList } from '../components/BulletList'
import { CTASection } from '../components/CTASection'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { SocialIcons } from '../components/SocialIcons'

import { useProjects } from '../hooks/useProjects'

export default function Home() {
  const navigate = useNavigate()
   const { projects, loading, error } = useProjects();
   const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <main className="">

      {/* ── About Section ─────────────────────────────────── */}
      <AboutSection
        bulletList={
          <BulletList
            title="Top Skills"
            items={skills}
            borderColor="#FF2D9B"
          />}
        bioText={
          <>
            <p className="font-mono text-ink leading-relaxed">
              Hi! I'm <span className="highlight-yellow">Jessica</span> - a frontend developer who loves building clean, thoughtful, and functional user experiences with a touch of personality. As a proud 90's kid, I’m drawn to cozy nostalgia and enjoy sprinkling my own creative flavor into the things I make (this website included 😉).
            </p>
            <p className="font-mono text-ink leading-relaxed">
              Outside of coding, I’m a mama to three tiny humans who keep life wonderfully chaotic. When I manage to sneak in some time alone, I’m usually <span className="squiggle font-semibold text-neon-pink squiggle-pink">reading</span>, <span className="squiggle font-semibold text-retro-lilac squiggle-lilac">journaling</span>, <span className="squiggle font-semibold text-retro-green squiggle-green">crafting</span>, or finding new hobbies to keep my creative juices flowing.
            </p>
          </>
        } />

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PINK_WASHI_LONG}
        alt=""
        aria-hidden="true"
        className="lg:w-8/12 rotate-[-0.5deg] my-10 mx-auto drop-shadow-lg"
      />

      {/* ── Featured Work ──────────────────────────────────── */}
      <section id="work">
        <div className="text-center">
          <h2 className="header-highlight header-highlight-pink tracking-wider hand-underline hand-underline-yellow text-3xl mb-6 rotate-2">featured work</h2>
        </div>

        <ProjectsGrid projects={featuredProjects} loading={loading} error={error} />

        <div className="flex justify-center my-4">
          <Button label="view all projects →" onClick={() => navigate('/work')} />
        </div>
      </section>

      {/* ── Washi divider ─────────────────────────────────── */}
      <img
        src={PURPLE_WASHI}
        alt=""
        aria-hidden="true"
        className="lg:w-10/12 rotate-[0.5deg] my-10 mx-auto drop-shadow-lg md:mb-0"
      />

      {/* ── Socials Section ────────────────────────────────── */}
      <CTASection
        note="Thanks for stopping by! Let's build something cool together. ✿"
        middle={<SocialIcons />}
        title="let's connect!"
        sticker={
          <Sticker imageSrc={TAMAGOTCHI_STICKER} float={true} customClasses="w-30 md:w-35 lg:w-40" />
        }
      />
    </main>
  )
}
