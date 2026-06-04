import { useEffect, useMemo, useState } from 'react'

import { projects as customProjects } from '../data/projects'

import { transformRepo } from '../utils/transformRepo'

import { useGitHubRepos } from './useGitHubRepos'

import { fetchRepoLanguages } from '../api/fetchRepoLanguages'

import type { Project } from '../types/project'
import { fetchPortfolioJSON } from '../api/fetchPortfolioJSON'

export function useProjects() {
  const { repos, loading: reposLoading, error } = useGitHubRepos()
  console.log('repos', repos)

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

          console.log('languages', languages)
          console.log('json', json)

          return transformRepo(repo, languages, json?.longDescription, json?.highlights)
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
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
  }, [githubProjects])

  return {
    projects,
    loading: reposLoading || loadingProjects,
    error,
  }
}