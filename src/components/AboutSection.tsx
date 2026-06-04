import Bio from "./Bio"
import PhotoSection from "./PhotoSection"
import StickerSection from "./StickerSection"
import PHOTO_URL from '../assets/prof-pic.jpg'
import Sticker from "./Sticker"
import GREEN_SMILEY from '../assets/doodles-stickers/green-smiley-sticker.png'
import PINK_HEART from '../assets/doodles-stickers/pink-heart-sticker.png'

interface AboutSectionProps {
    bulletList?: React.ReactNode,
    bioText: React.ReactNode
}

export const AboutSection = ({ bulletList, bioText }: AboutSectionProps) => {
    return (
        <section id="about" className="flex flex-col lg:flex-row gap-8 lg:gap-0 overflow-x-hidden md:overflow-x-visible">
            <div className="flex-1 xl:flex-1 flex justify-center items-center">
                <PhotoSection
                    photoUrl={PHOTO_URL}
                    caption="hi, I'm jessica!"
                    sticker1={
                        <Sticker
                            imageSrc={PINK_HEART}
                            wiggle={true}
                            animationDelay={0}
                            customClasses="absolute top-4 -right-8 rotate-[-10deg] drop-shadow-lg w-24 h-24"
                        />
                    }
                    sticker2={
                        <Sticker
                            imageSrc={GREEN_SMILEY}
                            animationDelay={0.8}
                            wiggle={true}
                            customClasses="absolute -bottom-10 -left-14 rotate-[10deg] drop-shadow-lg w-30 h-30"
                        />
                    }
                    rotation={-10}
                />
            </div>
            <div className="flex-1 xl:flex-2">
                <Bio bulletList={bulletList} bioText={bioText} />
            </div>
            <div className="hidden xl:flex-1 xl:inline-flex relative">
                <StickerSection />
            </div>
        </section>
    )
}