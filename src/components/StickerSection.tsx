import Sticker from "./Sticker"
import HEADPHONES_STICKER from '../assets/doodles-stickers/headphones.png'
import PHONE_STICKER from '../assets/doodles-stickers/pink-cellphone.png'
import CASSETTE_STICKER from '../assets/doodles-stickers/purple-mixtape.png'
import GREEN_STAR_DOODLE from '../assets/doodles-stickers/green-star-doodle.png'
import PINK_STAR_DOODLE from '../assets/doodles-stickers/pink-star-doodle.png'
import PINK_HEART_DOODLE_UNFILLED from '../assets/doodles-stickers/pink-heart-doodle-unfilled.png'
import THREE_LINES_DOODLE from '../assets/doodles-stickers/three-lines-doodle.png'

export default function StickerSection() {
    return (
        <div className="relative w-full h-full">
            {/* ── Stickers ── absolute positioned, won't affect layout */}
            <Sticker imageSrc={HEADPHONES_STICKER} float={true} customClasses="absolute -top-4 w-45 rotate-[8deg]" />
            <Sticker imageSrc={PHONE_STICKER} float={true} customClasses="absolute top-1/3 right-15 w-50 -rotate-6" animationDelay={0.5} />
            <Sticker imageSrc={CASSETTE_STICKER} float={true} customClasses="absolute top-3/4 right-25 w-50 rotate-[4deg]" animationDelay={1} />
            <Sticker imageSrc={GREEN_STAR_DOODLE} customClasses="absolute top-2/5 right-60 w-18 rotate-[4deg]  rotate-[4deg]" animationDelay={1.5} />
            <Sticker imageSrc={PINK_STAR_DOODLE} customClasses="absolute top-1/4 right-30 w-12 rotate-[-10deg]" animationDelay={2} />
            <Sticker imageSrc={THREE_LINES_DOODLE} customClasses="absolute bottom-60 right-25 w-8 rotate-[14deg]" animationDelay={3} />
            <Sticker imageSrc={PINK_HEART_DOODLE_UNFILLED} customClasses="absolute -bottom-3 w-14 right-7 rotate-[10deg]" animationDelay={2.5} />
        </div>
    )
}