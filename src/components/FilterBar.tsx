interface FilterBarProps {
    active: string
    onChange: (filter: string) => void
}

export const FilterBar = ({ active, onChange }: FilterBarProps) => {
    const projectFilters = ['all', 'web app', 'website', 'tools']

    return (
        <div
            className="flex items-center justify-center gap-3 px-4 py-1 flex-wrap filter-bar-bg mb-6"
        >
            {projectFilters.map((filter, index) => (
                <div key={filter} className="flex items-center gap-3 shrink-0">
                    {/* Star separator */}
                    {index > 0 && (
                        <span className="text-retro-green text-xs md:text-lg xl:text-xl select-none">★</span>
                    )}

                    <button
                        onClick={() => onChange(filter)}
                        className={`font-handwrite text-sm md:text-md lg:text-lg xl:text-xl font-bold whitespace-nowrap transition-all px-2 py-0.5 md:tracking-wider
    ${active === filter
                                ? 'text-ink filter-active'
                                : 'text-ink/70 hover:text-ink hover:filter-active'
                            }`}
                    >
                        {filter}
                    </button>
                </div>
            ))}
        </div>
    )
}