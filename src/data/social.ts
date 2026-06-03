import INSTAGRAM_ICON from '../assets/socials/instagram-icon.png'
import GITHUB_ICON from '../assets/socials/github-icon.png'
import LINKEDIN_ICON from '../assets/socials/linkedin-icon.png'
import YOUTUBE_ICON from '../assets/socials/youtube-icon.png'
import EMAIL_ICON from '../assets/socials/email-icon.png'

export const socials = [
  { label: 'instagram', icon: INSTAGRAM_ICON, href: 'https://instagram.com/cozyhobbytime', highlightColor: 'pink' },
  { label: 'github', icon: GITHUB_ICON, href: 'https://github.com/jessicaliang721', highlightColor: 'yellow' },
  { label: 'linkedin', icon: LINKEDIN_ICON, href: 'https://linkedin.com/in/jessicaliang721', highlightColor: 'green' },
  { label: 'youtube', icon: YOUTUBE_ICON, href: 'https://youtube.com/@cozyhobbytime', highlightColor: 'pink' },
  { label: 'email', icon: EMAIL_ICON, href: 'mailto:cozyhobbytime@gmail.com', highlightColor: 'yellow' },
]

export const getSocial = (label: string) => {
  return socials.find(s => s.label === label)
}