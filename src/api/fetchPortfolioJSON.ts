import { GITHUB_USERNAME } from '../constants/github'

export const fetchPortfolioJSON = async (repoName: string): Promise<any> => {
    const branches = ['main', 'gh-pages']

    try {
        for (const branch of branches) {
            const res = await fetch(
                `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/portfolio.json`,
            )

            if (res.ok) {
                return await res.json()
            }

            // If it's not a 404 (e.g. rate limit, server error), stop trying
            if (res.status !== 404) {
                return null
            }
        }

        return null
    } catch {
        // Not every repo has a portfolio.json, fail silently
        return null
    }
}