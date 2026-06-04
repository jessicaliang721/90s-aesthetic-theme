type StickerProps = {
    imageSrc: string;
    altText?: string;
    customClasses?: string;
    animationDelay?: number;
    float?: boolean;
    wiggle?: boolean;
};

const Sticker = ({
    imageSrc,
    altText = "",
    customClasses,
    animationDelay = 1,
    float = false,
    wiggle = false
}: StickerProps) => {
    return (
        <img
            aria-hidden="true"
            src={imageSrc}
            alt={altText}
            className={`drop-shadow-lg ${float ? 'sticker-float' : ''} ${wiggle ? 'sticker-wiggle' : ''} ${customClasses}`}
            style={
                animationDelay !== undefined
                    ? { animationDelay: `${animationDelay}s` }
                    : undefined
            }
        />
    )
}

export default Sticker;