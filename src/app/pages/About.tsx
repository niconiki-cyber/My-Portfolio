import { ArrowUpRight } from 'lucide-react'

import { site, skills, stats } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Odoo developer,', 'QA engineer,', 'detail person']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.jpg" alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am a QA engineer and junior Odoo developer. Most of my work sits where a mobile app meets an Odoo backend, which is exactly where things quietly break if nobody is watching.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              That means API testing in Postman with the response codes and payloads validated rather than assumed, swimlane diagrams in draw.io so the flows are written down somewhere other than someone’s head, and test case documents the team can actually rerun.
            </p>
            <p>
              I like specifications that mean something, bug reports that reproduce, and the moment a module stops surprising you. If a feature ships, it should ship with the evidence that it works.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Skills and tools</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-[10px] border border-line px-3 py-1.5 text-[14px] text-fg/80">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{stat.value}</p>
                <p className="mt-2 text-[14px] text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
