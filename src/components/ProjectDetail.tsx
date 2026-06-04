import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import { ProjectHero } from '../components/ProjectHero'
import { ContentCard } from './ContentCard'
import { toHtmlParagraphs } from '../utils/toParagraphs'
import { ScreenshotSection } from './ScreenshotSection'

export default function ProjectDetail() {
    const { slug } = useParams()
    const { projects, loading } = useProjects()
    const project = projects.find(p => p.slug === slug)

    if (loading) return (
        <p className="font-handwrite text-ink/50 text-center py-8">loading...</p>
    )

    if (!project) return (
        <main className="max-w-3xl mx-auto px-6 py-12 text-center">
            <h1 className="font-display text-4xl text-ink mb-4">project not found :(</h1>
            <Link to="/work" className="font-handwrite text-neon-pink hand-underline hand-underline-pink">
                ← back to all projects
            </Link>
        </main>
    )

    const { longDescription, techStack, impact } = project;

    const TECH_ICONS: Record<string, { icon: string; color: string }> = {
        'HTML5': { icon: '🌐', color: '#E34F26' },
        'CSS3': { icon: '🎨', color: '#1572B6' },
        'JavaScript': { icon: '𝙅𝙎', color: '#F7DF1E' },
        'TypeScript': { icon: '𝙏𝙎', color: '#3178C6' },
        'React': { icon: '⚛️', color: '#61DAFB' },
        'Tailwind CSS': { icon: '💨', color: '#06B6D4' },
        'Framer Motion': { icon: '🟣', color: '#BB4FFF' },
        'Next.js': { icon: '▲', color: '#000000' },
        'Netlify': { icon: '🌿', color: '#00C7B7' },
        'GitHub': { icon: '🐙', color: '#181717' },
        'Figma': { icon: '🎭', color: '#F24E1E' },
        'Sass': { icon: '💅', color: '#CC6699' },
        'Node.js': { icon: '🟢', color: '#339933' },
    }

    return (
        <main className="px-6">
            {/* Hero section */}
            <ProjectHero project={project} />

            {/* About project */}
            {longDescription && (
                <ContentCard title="about the project" bgColor="#feefee">
                    <div
                        className="prose prose-sm font-body text-lg text-ink mt-8 whitespace-normal wrap-anywhere max-w-none"
                        dangerouslySetInnerHTML={{ __html: toHtmlParagraphs(longDescription) }}
                    />
                </ContentCard>
            )}

            {/* Impact & Tech Stack */}
            <ContentCard bgColor='#f2f1df'>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Impact */}
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="font-display text-3xl text-ink flex items-center gap-3">
                            impact <span className="text-xl">💻</span>
                        </h2>

                        <ul className="space-y-3">
                            {impact?.map((item, i) => (
                                <li key={i} className="font-mono font-bold text-lg text-ink/80 flex items-start gap-3">
                                    <span className="shrink-0 w-5 h-5 rounded-full border-2 border-retro-green flex items-center justify-center mt-0.5">
                                        <span className="text-retro-green text-md">✓</span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divider — vertical on lg, horizontal on mobile */}
                    <div className="hidden lg:block w-px bg-ink/10 self-stretch" />
                    <div className="block lg:hidden h-px bg-ink/10 w-full" />

                    {/* Tech stack */}
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="font-display text-3xl text-ink flex items-center gap-3">
                            tech stack <span className="font-mono text-xl">&lt;/&gt;</span>
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {techStack?.map((tech) => {
                                const meta = TECH_ICONS[tech]
                                return (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-2 px-3 py-2 border-2 rounded-lg bg-paper"
                                        style={{ borderColor: meta?.color ?? '#FFB3D9' }}
                                    >
                                        <span className="text-base leading-none">{meta?.icon ?? '🔧'}</span>
                                        <span className="font-mono text-lg text-ink">{tech}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </ContentCard>

            {/* Screenshot section */}
            {project.screenshots && Object.keys(project.screenshots).length > 0 && (
                <ScreenshotSection
                    title={project.title}
                    screenshots={project.screenshots}
                />
            )}

        </main >
    )
}
