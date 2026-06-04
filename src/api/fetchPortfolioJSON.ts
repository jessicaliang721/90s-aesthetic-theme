import { GITHUB_USERNAME } from '../constants/github'

import { githubHeaders } from '../constants/github'

export const fetchPortfolioJSON = async (repoName: string): Promise<any> => {
    try {
        const res = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/portfolio.json`,
            {
                headers: githubHeaders
            }
        )
        if (!res.ok) return null
        return await res.json()
    } catch {
        return null  // not every repo has a portfolio.json, fail silently
    }
}