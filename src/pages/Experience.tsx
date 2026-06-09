import { experience } from '../data/experience'
import PINK_NOTE_PAPER from '../assets/backgrounds/pink-note-paper.png'
import YELLOW_NOTE_PAPER from '../assets/backgrounds/yellow-note-paper.png'
import GREEN_NOTE_PAPER from '../assets/backgrounds/green-note-paper.png'
import PURPLE_NOTE_PAPER from '../assets/backgrounds/purple-note-paper.png'
import MASKING_TAPE from '../assets/doodles-stickers/masking-tape.png'
import BLUE_PAPER from '../assets/backgrounds/blue-paper-bg.png'
import BEADED_TIMELINE from '../assets/beaded-timeline.png'
import YIN_YANG_BEAD from '../assets/yin-yang-bead.png'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

const NOTE_PAPERS = [
  YELLOW_NOTE_PAPER,
  PINK_NOTE_PAPER,
  PURPLE_NOTE_PAPER,
  GREEN_NOTE_PAPER,
  BLUE_PAPER
]

export default function Experience() {
  // flatten all roles with their company info
  const allRoles = experience.flatMap((exp) =>
    exp.roles.map((role) => ({ ...role, company: exp.company, type: exp.type }))
  )

  const navigate = useNavigate()

  // TODO:
  // update masking tape to cute tapes

  return (
    <main className="max-w-6xl mx-auto px-6 pb-6">

      {/* Page header */}
      <div className="mb-12 text-center">
        <h1 className="header-highlight header-highlight-pink tracking-wider hand-underline hand-underline-green text-3xl mb-8 -rotate-3">work experience</h1>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical beaded line */}
        <div
          className="absolute left-24 top-0 bottom-0 w-8 hidden md:block"
          style={{
            backgroundImage: `url(${BEADED_TIMELINE})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />

        <div className="space-y-12">
          {allRoles.map((role, index) => {
            const bg = NOTE_PAPERS[index % NOTE_PAPERS.length]
            const startDate = role.startDate.split(' ')[1] ?? role.startDate
            const endDate = role.endDate === 'Present' ? 'Present' : role.endDate.split(' ')[1] ?? role.endDate

            return (
              <div key={`${role.company}-${role.title}`} className="flex flex-col md:flex-row gap-4 md:gap-2 items-start">

                {/* Date column */}
                <div className="hidden md:w-24 shrink-0 md:flex md:flex-col items-center justify-center md:items-end md:justify-start gap-1 md:pt-6 md:pr-6">
                  <div
                    className="flex md:flex-col items-center justify-center px-3 py-2 drop-shadow-sm -rotate-2 tracking-widest"
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat',
                      minWidth: '100px',
                      minHeight: '100px',
                    }}
                  >
                    <span className="font-handwrite text-lg font-bold text-ink/80 leading-tight">
                      {startDate}
                    </span>

                    {/* Inline dash — mobile only */}
                    <span className="font-handwrite text-ink/80 text-sm mx-1 md:hidden">—</span>

                    {/* Block dash — desktop only */}
                    <span className="font-handwrite text-ink/80 text-sm hidden md:block">—</span>

                    <span className="font-handwrite text-lg font-bold text-ink/80 leading-tight">
                      {endDate}
                    </span>
                  </div>
                </div>

                {/* Yin yang bead on timeline */}
                <div className="hidden md:block w-12 shrink-0 relative pt-6">
                  <img
                    src={YIN_YANG_BEAD}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-6 left-1/4 -translate-x-1/2 w-12 h-12 object-contain z-20 drop-shadow-lg"
                  />
                </div>

                {/* Note card */}
                <div className="flex-1 relative">

                  {/* Tape */}
                  <img
                    src={MASKING_TAPE}
                    alt=""
                    aria-hidden="true"
                    className="absolute -top-4 -right-4 w-35 rotate-14 z-10 pointer-events-none"
                  />

                  <div
                    className="p-10 drop-shadow-md"
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {/* Role title */}
                    <h2 className="font-display text-2xl text-ink mb-1">
                      {role.title}
                    </h2>

                    {/* Company + location */}
                    <p className="font-handwrite font-bold text-lg text-ink/70 mb-4 flex items-center gap-2">
                      <span>{role.company}</span>
                      <span className="text-neon-pink"> ★</span>
                      <span>{role.location}</span>
                      <span className="text-neon-pink md:hidden"> ★</span>
                      <span className='md:hidden'>{startDate} - {endDate} </span>
                    </p>

                    {/* Description */}
                    <p className="font-body text-lg text-ink/80 leading-relaxed mb-4">
                      {role.description}
                    </p>

                    {/* Skills */}
                    {role.skills && role.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {role.skills.map((skill) => (
                          <span className="text-sm px-2 py-0.5 rounded-full border border-ink/40 font-mono ml-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <Button label='view all projects →' onClick={() => navigate('/work')} />
      </div>
    </main>
  )
}