import Image from 'next/image';
import Link from 'next/link';
import { getSite } from '@/content/store.mjs';
import { Accent, CountUp } from '@/components/ui';
import { TEAM } from '@/lib/people';

export const metadata = { title: 'About | Prepare International' };

export default async function AboutPage() {
  const { about, closing } = await getSite();
  const { history, how, principles, vision, team } = about;
  return (
    <>
      <section className="band page-top">
        <div className="container center">
          <p className="eyebrow" data-k="about.eyebrow">{about.eyebrow}</p>
          <h1 className="display" data-k="about.title"><Accent>{about.title}</Accent></h1>
          <p className="lede" data-k="about.text">{about.text}</p>
        </div>
      </section>

      <section className="band alt">
        <div className="container">
          <p className="eyebrow reveal" data-k="about.history.eyebrow">{history.eyebrow}</p>
          <h2 className="display reveal" data-k="about.history.title"><Accent>{history.title}</Accent></h2>
          <div className="split top">
            <ol className="timeline">
              {history.steps.map((s, i) => (
                <li key={i} className="reveal">
                  <b data-k={`about.history.steps.${i}.when`}>{s.when}</b>
                  <h3 data-k={`about.history.steps.${i}.title`}>{s.title}</h3>
                  <p data-k={`about.history.steps.${i}.text`}>{s.text}</p>
                </li>
              ))}
            </ol>
            <Image
              src={history.photo.src} alt={history.photo.alt} data-k-img="about.history.photo"
              unoptimized={history.photo.src.startsWith('/img/')}
              width={1559} height={1039} sizes="(max-width: 760px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal" data-k="about.how.eyebrow">{how.eyebrow}</p>
          <h2 className="display reveal" data-k="about.how.title"><Accent>{how.title}</Accent></h2>
          <p className="lede reveal" data-k="about.how.text">{how.text}</p>
          <p className="marks-title reveal" data-k="about.how.marksTitle">{how.marksTitle}</p>
          <ul className="marks">
            {how.marks.map((m, i) => <li key={i} className="reveal" data-k={`about.how.marks.${i}`}>{m}</li>)}
          </ul>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal" data-k="about.principles.eyebrow">{principles.eyebrow}</p>
          <h2 className="display reveal" data-k="about.principles.title"><Accent>{principles.title}</Accent></h2>
          <div className="cards">
            {principles.items.map((item, i) => (
              <div key={i} className="panel reveal">
                <b className="num">0{i + 1}</b>
                <h3 data-k={`about.principles.items.${i}.title`}>{item.title}</h3>
                <p data-k={`about.principles.items.${i}.text`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal" data-k="about.vision.eyebrow">{vision.eyebrow}</p>
          <h2 className="display reveal" data-k="about.vision.title"><Accent>{vision.title}</Accent></h2>
          <div className="cells">
            {vision.items.map((v, i) => (
              <div key={i} className="reveal">
                <b data-k={`about.vision.items.${i}.n`}><CountUp n={v.n} /></b>
                <span data-k={`about.vision.items.${i}.label`}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal" data-k="about.team.eyebrow">{team.eyebrow}</p>
          <h2 className="display reveal" data-k="about.team.title"><Accent>{team.title}</Accent></h2>
          <div className="team">
            {TEAM.map((m) => (
              <div key={m.name} className="reveal">
                {m.image
                  // Remote portraits: the known, deferred <img> warning (see AGENTS.md).
                  ? <img src={m.image} alt={m.name} loading="lazy" />
                  : <div className="blank" aria-hidden="true">{m.name.charAt(0)}</div>}
                <h3>{m.name}</h3>
                <p>{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band closing">
        <div className="container center">
          <h2 className="display reveal" data-k="closing.title"><Accent>{closing.title}</Accent></h2>
          <Link className="btn btn-primary" href={closing.primary.href} data-k="closing.primary.label">{closing.primary.label}</Link>
        </div>
      </section>
    </>
  );
}
