import { GITHUB_USERNAME } from '../constants/github'
import type { GitHubRepo } from '../types/github'
import type { Project } from '../types/project'
import type { PortfolioJSON } from '../types/portfolio'

export function transformRepo(
    repo: GitHubRepo,
    languages: Record<string, number>,
    json?: PortfolioJSON | null,
): Project {
    const topics = repo.topics ?? []

    const lowerTopics = topics.map(t => t.toLowerCase())

    const featured = lowerTopics.includes('featured')

    const categories = topics.filter(
        t => !['portfolio', 'featured'].includes(t.toLowerCase())
    )

    const href = repo.has_pages
        ? `https://${GITHUB_USERNAME}.github.io/${repo.name}`
        : undefined

    const longDescription = json?.longDescription

    const highlights = json?.highlights

    const screenshots = json?.screenshots ?? {}

    return {
        id: repo.id,
        slug: repo.name,
        title: repo.name.replace(/-/g, ' '),
        description: repo.description,
        longDescription: longDescription ?? undefined,
        highlights: highlights ?? undefined,
        githubHref: repo.html_url,
        screenshots: screenshots,
        category: categories[0] ?? 'other',
        featured,
        date: new Date(repo.pushed_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }),
        href,
        techStack: Object.keys(languages)
    }
}