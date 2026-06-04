import { useLatestVideo } from '../hooks/useLatestVideo'
import { useChannelDetails } from '../hooks/useChannelDetails'
import { socials } from '../data/social'

export const YTSection = () => {
    const { video, loading: latestVideoLoading, error: latestVideoError } = useLatestVideo()
    const { channel, loading: channelLoading, error: channelError } = useChannelDetails()

    const loading = latestVideoLoading || channelLoading
    const error = latestVideoError || channelError


    const channelHref = socials.find(s => s.label === 'youtube')?.href ?? '#'

    return (
        <section
            id="youtube"
            className="p-10 relative drop-shadow-lg layered-paper-bg my-10 md:mb-0"
        >
            {loading && (
                <p className="font-handwrite text-ink/50 text-center py-8">
                    loading latest video...
                </p>
            )}

            {error && (
                <p className="font-handwrite text-neon-pink text-center py-8">
                    couldn't load video right now :(
                </p>
            )}

            {video && (
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Title + description */}
                    <div className="lg:w-1/3 space-y-4">
                        <div className="text-center mb-8">
                            <h2 className="header-highlight header-highlight-pink tracking-wider text-3xl -rotate-1 inline-block hand-underline hand-underline-yellow">
                                my youtube ⏯
                            </h2>
                        </div>

                        <p className="font-mono text-lg tracking-tighter leading-relaxed">{channel?.description}</p>

                        <h3 className="tracking-wider text-xl squiggle squiggle-green inline-block">my latest video</h3>
                        <p className="font-body text-md text-ink/70 leading-relaxed line-clamp-4">
                            {video.description}
                        </p>

                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`}
                            className="text-medium font-handwrite text-(--pink) text- font-bold tracking-wider hand-underline hand-underline-yellow hand-underline-link"
                            target='blank'
                        >
                            view on YouTube →
                        </a>
                    </div>

                    {/* Video embed */}
                    <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg">
                        <div className="relative w-full rounded-lg overflow-hidden drop-shadow-lg"
                            style={{ aspectRatio: '16 / 9' }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>

                        {/* Channel bar */}
                        <div className="flex items-center mt-3 px-1 gap-3">
                            <a href={channelHref} target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-2">
                                    {/* Real avatar if loaded, fallback to initial */}
                                    {channel?.avatar
                                        ? <img
                                            src={channel.avatar}
                                            alt={channel.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        : <div className="w-8 h-8 rounded-full bg-retro-pink flex items-center justify-center">
                                            <span className="font-display text-xs text-ink">
                                                {video.channelTitle.charAt(0)}
                                            </span>
                                        </div>
                                    }
                                    <div>
                                        <p className="font-handwrite text-sm font-bold text-ink">
                                            {channel?.name ?? video.channelTitle}
                                        </p>
                                        {channel?.subscriberCount && (
                                            <p className="font-body text-xs text-ink/50">
                                                {channel.subscriberCount} subscribers
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </a>

                            {/* Subscribe button */}
                            <a
                                href={`${channelHref}?sub_confirmation=1`}
                                target="_blank"
                                rel="noreferrer"
                                className="font-handwrite text-sm font-bold px-4 py-1 rounded-full text-white border-2 border-neon-pink hover:text-neon-pink bg-neon-pink hover:bg-white transition-colors tracking-wider"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>

                </div>
            )}
        </section>
    )
}