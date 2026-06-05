import ProjectCard from './ProjectCard'
import type { Project } from '../types/project'

interface ProjectsGridProps {
    projects: Project[],
    loading?: boolean,
    error?: Error | null
}

export const ProjectsGrid = ({ projects, loading, error }: ProjectsGridProps) => {
    if (loading) return 
    if (error) return <p>failed to load projects</p>
    return (
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-4 lg:px-3">
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        key={project.id}
                        index={index}
                        slug={project.slug}
                        title={project.title}
                        screenshot={project.screenshots?.featured}
                        description={project.description}
                    />
                )

            })}
        </div>
    )
}