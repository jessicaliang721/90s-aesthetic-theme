import Sticker from './Sticker'

import TAPE_SRC from '../assets/doodles-stickers/pink-tape-small.png'
import BG_IMG from '../assets/backgrounds/yellow-scrap-paper.png'

interface PhotoSectionProps {
    bgUrl?: string
    photoUrl: string
    caption: string
    rotation?: number
    sticker1?: React.ReactNode
    sticker2?: React.ReactNode
}

export default function PhotoSection({ bgUrl = BG_IMG, photoUrl, caption, rotation = -10, sticker1, sticker2 }: PhotoSectionProps) {
    return (
        <div
            className='relative w-fit py-8'
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* Yellow paper — rendered first so it sits behind everything */}
            <div className="absolute top-5 -left-5 w-75 h-110 -z-10 drop-shadow-lg" style={{ backgroundImage: `url(${bgUrl})` }} />

            {/* Tape */}
            <Sticker imageSrc={TAPE_SRC} float={false} customClasses="absolute top-2 left-1/2 -translate-x-2/3 z-10 w-55 h-12 object-cover rotate-2" />

            <div className="relative inline-block">
                {/* Polaroid frame */}
                <div className="bg-white p-3 pb-10 shadow-polaroid drop-shadow-lg">
                    <img
                        src={photoUrl}
                        alt="hi, I'm jessica!"
                        className="w-64 h-80 object-cover object-top"
                    />
                    {/* Caption inside polaroid */}
                    <p className="font-handwrite text-center text-ink mt-2 text-2xl font-semibold tracking-wider">
                        {caption}
                    </p>
                </div>

                {/* Sticker slots */}
                {sticker1}
                {sticker2}
            </div>

            <div className=" md:inline-block">
                <span className="absolute top-30 -right-16 text-retro-lilac text-5xl opacity-70 rotate-15">✦</span>
                <span className="absolute text-6xl -bottom-15 right-15 text-neon-yellow opacity-60 rotate-10">♡</span>
                <span className="absolute text-4xl top-60 -left-13 text-neon-pink opacity-60 -rotate-5">☆</span>
            </div>

        </div>
    )
}
