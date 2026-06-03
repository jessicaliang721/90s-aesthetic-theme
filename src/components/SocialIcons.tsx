import { socials } from '../data/social'
import { SocialIcon } from './SocialIcon'

export const SocialIcons = () => (
    <div className='flex md:flex-2 justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12'>
        {socials.map(({ label, icon, href, highlightColor }) => (
            <SocialIcon
                key={label}
                icon={icon}
                label={label}
                href={href}
                highlightColor={highlightColor}
            />
        ))}
    </div>
)