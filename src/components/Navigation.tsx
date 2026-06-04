import { useState, useEffect } from 'react'

import Logo from './Logo'
import MobileNav from './MobileNav'
import Navbar from './Navbar'
import Sticker from './Sticker'
import GREEN_STAR_STICKER from '../assets/doodles-stickers/green-star-sticker.png'

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false)
    useEffect(() => {
        if (mobileOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        // Clean up on unmount
        return () => document.body.classList.remove('overflow-hidden')
    }, [mobileOpen])

    return (
        <>
            {/* Mobile nav block */}
            <div className={`lg:hidden pt-7 pb-7 ${mobileOpen ? 'fixed top-0 left-0 right-0' : 'relative'} z-50`}>
                <div className="relative flex items-center justify-between">
                    {/* Mobile hamburger button */}
                    <button
                        className="z-50 font-handwrite text-4xl text-ink pl-6"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? '✕' : '☰'}
                    </button>
                    <Logo customClasses="absolute left-1/2 -translate-x-1/2 z-50" onClick={() => setMobileOpen(false)} />
                    <Sticker imageSrc={GREEN_STAR_STICKER} float={true} customClasses="drop-shadow-lg w-15 z-50 pr-3"/>
                </div>

                {/* Mobile nav — hidden on md and up */}
                {mobileOpen && (
                    <div className="fixed inset-0 z-40">
                        <MobileNav onClose={() => setMobileOpen(false)} />
                    </div>
                )}
            </div>

            {/* Desktop navbar — hidden below md */}
            <div className="hidden lg:block">
                <Navbar />
            </div>
        </>
    )
}