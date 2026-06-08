import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type ImageModalProps = {
    images: { label: string; url: string }[];
    activeIndex: number | null;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
};

export const ImageModal = ({
    images,
    activeIndex,
    setActiveIndex,
}: ImageModalProps) => {
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const activeImage =
        activeIndex !== null ? images[activeIndex] : null;

    const hasMultipleImages = images.length > 1;

    // Close on ESC + arrow navigation
    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
                return;
            }

            if (!hasMultipleImages) return;

            if (e.key === "ArrowRight") {
                setActiveIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % images.length
                );
            }

            if (e.key === "ArrowLeft") {
                setActiveIndex((prev) =>
                    prev === null
                        ? 0
                        : (prev - 1 + images.length) % images.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () =>
            window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, images.length, hasMultipleImages, setActiveIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!hasMultipleImages) return;
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!hasMultipleImages) return;
        if (touchStartX === null || activeIndex === null) return;

        const diff = e.changedTouches[0].clientX - touchStartX;

        if (diff > 50) {
            setActiveIndex(
                (activeIndex - 1 + images.length) % images.length
            );
        }

        if (diff < -50) {
            setActiveIndex((activeIndex + 1) % images.length);
        }

        setTouchStartX(null);
    };

    return (
        <AnimatePresence>
            {activeImage && activeIndex !== null && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setActiveIndex(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-4 right-4 text-white text-3xl font-bold"
                    >
                        ×
                    </button>

                    {/* Prev */}
                    {hasMultipleImages && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(
                                    (activeIndex - 1 + images.length) %
                                    images.length
                                );
                            }}
                            className="absolute left-4 text-white text-4xl transition-opacity opacity-100 hover:opacity-70"
                        >
                            ‹
                        </button>
                    )}

                    {/* Next */}
                    {hasMultipleImages && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(
                                    (activeIndex + 1) % images.length
                                );
                            }}
                            className="absolute right-4 text-white text-4xl transition-opacity opacity-100 hover:opacity-70"
                        >
                            ›
                        </button>
                    )}

                    {/* Content */}
                    <motion.div
                        className="max-w-[95vw] max-h-[90vh] p-4 flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <p className="text-white/60 text-sm mt-2">
                            {hasMultipleImages
                                ? "Use ← → or swipe to navigate"
                                : "Click outside or press ESC to close"}
                        </p>
                        <img
                            src={activeImage.url}
                            alt={activeImage.label}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-center text-white mt-3 font-handwrite text-xl">
                            {activeImage.label}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};