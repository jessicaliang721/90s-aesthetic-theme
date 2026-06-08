import { useState, useEffect } from "react";
import { ContentCard } from "./ContentCard";
import { ImageModal } from "./ImageModal";

export const ScreenshotSection = ({
    title,
    screenshots,
}: {
    title: string;
    screenshots: Record<string, string>;
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const images = Object.entries(screenshots)
        .map(([label, url]) => ({
            label,
            url,
        }));

    // lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow =
            activeIndex !== null ? "hidden" : "auto";
    }, [activeIndex]);

    return (
        <>
<ContentCard title="screenshots 📷" bgColor="#f4ebf8">
    <div
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
        {images.map((img, i) => (
            <div
                key={img.label}
                className="flex flex-col items-center gap-2"
            >
                <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="block w-full transition-transform hover:scale-[1.02] hover:-rotate-1"
                >
                    <div className="w-full h-55 lg:h-65 overflow-hidden rounded-lg border-2 border-ink drop-shadow-md bg-white">
                        <img
                            src={img.url}
                            alt={`${title} ${img.label} screenshot`}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </button>

                <span className="font-handwrite text-lg tracking-wider font-extrabold text-ink/60">
                    {img.label}
                </span>
            </div>
        ))}
    </div>
</ContentCard>

            {/* MODAL */}
            <ImageModal
                images={images}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </>
    );
};