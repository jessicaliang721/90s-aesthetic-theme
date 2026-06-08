import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

import CALENDAR_ICON from '../assets/icons/calendar-icon.png'

interface ProjectHeroProps {
    project: Project
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
    const { title, screenshots, href, githubHref, description } = project

    return (
        <section className="relative px-6 pt-6 pb-12">

            {/* Back link */}
            <Link
                to="/work"
                className="font-handwrite text-md font-bold text-neon-pink hand-underline hand-underline-pink hand-underline-link inline-block mb-8"
            >
                ← back to all projects
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left */}
                <div className={`space-y-6 relative z-10 -rotate-3 ${(screenshots?.desktop || screenshots?.mobile)
                    ? 'lg:w-2/5'
                    : 'w-full'
                    }`}>

                    {/* Title with dashes */}
                    <div className="flex items-center justify-center gap-2">
                        <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <line x1="10" y1="14" x2="22" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="6" y1="28" x2="22" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="10" y1="42" x2="22" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>

                        <h1 className="text-center font-display text-5xl text-ink leading-tight">
                            {title}
                        </h1>

                        <svg width="28" height="56" viewBox="0 0 28 56" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <line x1="18" y1="14" x2="6" y2="22" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="22" y1="28" x2="6" y2="28" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="18" y1="42" x2="6" y2="34" stroke="#FF2D9B" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </div>

                    {/* Short Description */}
                    {description && (
                        <div className="flex justify-center">
                            <div className="highlight-yellow font-handwrite text-lg font-bold rounded-sm relative text-center tracking-wider">
                                {description}
                            </div>
                        </div>
                    )}

                    {/* Date built */}
                    <div className="flex row justify-center items-center gap-2 text-ink/70 font-handwrite text-md font-bold tracking-wider">
                        <img src={CALENDAR_ICON} alt="Calendar icon" className='w-10' /> Built {project.date}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 flex-wrap justify-center">
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 font-handwrite text-md font-bold px-4 py-2 border-2 tracking-wider border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
                            >
                                live site <span className="text-xs">↗</span>
                            </a>
                        )}
                        {githubHref && (
                            <a
                                href={githubHref}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 font-handwrite text-md font-bold px-4 py-2 border-2 tracking-wider border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                                <span>github repo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Right — device mockups if they exist */}
                {(screenshots?.desktop || screenshots?.mobile) && (
                    <div className="w-full lg:w-3/5 relative flex items-end justify-center">
                        {/* Desktop mockup */}
                        <div className="relative w-full">
                            <div className="bg-white rounded-t-lg border-2 border-b-0 border-ink px-3 py-2 flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-retro-pink border border-ink/20" />
                                <span className="w-2.5 h-2.5 rounded-full bg-neon-yellow border border-ink/20" />
                                <span className="w-2.5 h-2.5 rounded-full bg-retro-green border border-ink/20" />
                                <div className="flex-1 mx-2 h-4 bg-ruled rounded-full" />
                            </div>
                            <div className="border-2 border-ink rounded-b-lg overflow-hidden">
                                {screenshots?.desktop
                                    ? <img
                                        src={screenshots.desktop}
                                        alt={`${title} desktop screenshot`}
                                        className="w-full aspect-[16/9] object-cover object-top"
                                    />
                                    : <div
                                        className="w-full flex items-center justify-center bg-retro-pink/20 max-h-87.5"
                                    >
                                        <span className="font-display text-2xl text-ink/30">{title}</span>
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Mobile mockup */}
                        {screenshots?.mobile && (
                            <div className="hidden md:block absolute -bottom-6 -right-4 w-38 xl:w-44 rotate-3 drop-shadow-lg">
                                {/* phone frame */}
                                <div className="border-2 border-ink rounded-4xl overflow-hidden bg-white aspect-9/19.5">
                                    {/* notch / top bar */}
                                    <div className="bg-ink h-4 flex items-center justify-center">
                                        <div className="w-10 h-1.5 bg-ink/60 rounded-full" />
                                    </div>

                                    {/* screen */}
                                    <div className="w-full h-full">
                                        <img
                                            src={screenshots.mobile}
                                            alt={`${title} mobile screenshot`}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}