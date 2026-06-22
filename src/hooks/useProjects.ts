import { useEffect, useMemo, useState } from 'react'

import { projects as customProjects } from '../data/projects'

import { transformRepo } from '../utils/transformRepo'

import { useGitHubRepos } from './useGitHubRepos'

import { fetchRepoLanguages } from '../api/fetchRepoLanguages'

import type { Project } from '../types/project'
import { fetchPortfolioJSON } from '../api/fetchPortfolioJSON'
import { parseDate } from '../utils/parseDate'

export function useProjects() {
  const { repos, loading: reposLoading, error } = useGitHubRepos()

  const [githubProjects, setGithubProjects] = useState<Project[]>([])
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    if (!repos.length) return

    const loadProjects = async () => {
      setLoadingProjects(true)

      // ALL language requests happen in parallel
      const projects = await Promise.all(
        repos.map(async (repo) => {
          // fetch languages and readme in parallel per repo
          const [languages, json] = await Promise.all([
            fetchRepoLanguages(repo.name),
            fetchPortfolioJSON(repo.name)
          ])

          return transformRepo(repo, languages, json)
        })
      )

      setGithubProjects(projects)
      setLoadingProjects(false)
    }

    loadProjects()
  }, [repos])

  const projects = useMemo(() => {
    return [...customProjects, ...githubProjects].sort(
      (a, b) =>
        parseDate(b.date) - parseDate(a.date)
    )
  }, [githubProjects])

  return {
    projects,
    loading: reposLoading || loadingProjects,
    error,
  }
}