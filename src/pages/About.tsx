import { AboutSection } from "../components/AboutSection";
import { BulletList } from "../components/BulletList";
import { CTASection } from "../components/CTASection";
import { SocialIcons } from "../components/SocialIcons";
import { YTSection } from "../components/YTSection";

import BOOMBOX_STICKER from "../assets/doodles-stickers/boombox.png"
import COMPUTER_STICKER from "../assets/doodles-stickers/computer.png"
import GAMEBOY_STICKER from "../assets/doodles-stickers/gameboy.png"
import BUCKET_HAT from '../assets/doodles-stickers/bucket-hat.png'

import Sticker from "../components/Sticker";

export default function About() {
  return (
    <main className="">
      {/* ── About Section ─────────────────────────────────── */}
      <AboutSection
        bioText={
          <>
            <p className="font-mono text-ink leading-relaxed">
              I’m a <span className="highlight-pink">Senior Frontend Engineer</span> with 10+ years of experience building thoughtful, polished experiences for the web. I’m a self-taught developer who got my start building customer websites before spending the last 8 years creating large-scale enterprise applications. Over the years, I’ve developed both a strong technical foundation and a sharp eye for detail — bringing designs to life with care and a focus on creating high-quality user experiences.
            </p>
            <p className="font-mono text-ink leading-relaxed">
              When I’m not coding, I’m usually taking care of my three little boys or diving into one (or several!) of my many hobbies. Here’s a small glimpse of the things I dabble in:
            </p>
          </>
        }
        bulletList={
          <BulletList
            items={[
              'Reading',
              'Journaling',
              'Crocheting',
              'Gaming',
              'Embroidering',
              'Cross-stitching',
              'Coloring',
              'Sculpting']}
            borderColor="#D4B3FF"
          />
        }
        topSticker={BOOMBOX_STICKER}
        middleSticker={GAMEBOY_STICKER}
        bottomSticker={COMPUTER_STICKER}
      />
      {/* ── YouTube Section ─────────────────────────────────── */}
      <YTSection />

      {/* ── Socials Section ────────────────────────────────── */}
      <CTASection
        headerHighlightColor="yellow"
        handUnderlineColor="pink"
        note="⋆˙⟡ Reach out if you want to be friends! ˚⟡˖ ࣪"
        middle={
          <SocialIcons />
        }
        title="let's connect!"
        sticker={

          <Sticker imageSrc={BUCKET_HAT} float={true} customClasses="md:w-30 lg:w-40 xl:w-50 rotate-10" />
        }
      />
    </main>
  )
}
