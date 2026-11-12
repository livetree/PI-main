import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/content/site.mjs';
import { Accent, CountUp } from '@/components/ui';

const Cta = ({ href, label, ghost }) => {
  const cls = ghost ? 'btn btn-ghost' : 'btn btn-primary';
  return href.startsWith('http')
    ? <a className={cls} href={href}>{label}</a>
    : <Link className={cls} href={href}>{label}</Link>;
};

export default function Home() {
  const { hero, vision, today, gift, stories, ways, family, closing } = SITE;
  return (
    <>
      <section className="hero">
        <Image src={hero.photo.src} alt={hero.photo.alt} fill preload sizes="100vw" />
        <div className="container hero-body">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display"><Accent>{hero.title}</Accent></h1>
          <p className="lede">{hero.text}</p>
          <div className="actions">
            <Cta {...hero.primary} />
            <Cta {...hero.secondary} ghost />
          </div>
        </div>
      </section>

      <section className="band" id="vision">
        <div className="container center">
          <p className="eyebrow reveal">{vision.eyebrow}</p>
          <h2 className="display reveal"><Accent>{vision.title}</Accent></h2>
          <p className="lede reveal">{vision.text}</p>
          <div className="cells steps">
            {vision.steps.map((s) => (
              <div key={s.label} className="reveal"><b><CountUp n={s.n} /></b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal">{today.eyebrow}</p>
          <h2 className="display reveal"><Accent>{today.title}</Accent></h2>
          <div className="dots reveal" role="img" aria-label={today.movements.caption}>
            {Array.from({ length: today.movements.goal }, (_, i) => (
              <i key={i} className={i < today.movements.now ? 'on' : undefined} />
            ))}
          </div>
          <p className="caption reveal">{today.movements.caption}</p>
          <div className="cells">
            {today.stats.map((s) => (
              <div key={s.label} className="reveal">
                <b>{s.text ?? <CountUp n={s.n} suffix={s.suffix} />}</b><span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal">{gift.eyebrow}</p>
          <h2 className="display reveal"><Accent>{gift.title}</Accent></h2>
          <div className="cards">
            {gift.items.map((item, i) => (
              <div key={item.title} className="panel reveal">
                <b className="num">0{i + 1}</b>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal">{stories.eyebrow}</p>
            <h2 className="display reveal"><Accent>{stories.title}</Accent></h2>
          </div>
          {stories.items.map((s) => (
            <article key={s.place} className="story reveal">
              <Image src={s.photo.src} alt={s.photo.alt} width={720} height={520} sizes="(max-width: 760px) 100vw, 560px" />
              <div>
                <p className="eyebrow">{s.place}</p>
                <h3 className="display"><Accent>{s.title}</Accent></h3>
                {s.text && <p>{s.text}</p>}
                {s.quote && <blockquote>“{s.quote}”</blockquote>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="give">
        <div className="container center">
          <p className="eyebrow reveal">{ways.eyebrow}</p>
          <h2 className="display reveal"><Accent>{ways.title}</Accent></h2>
          <div className="cards">
            {ways.items.map((w) => (
              <div key={w.name} className="panel way reveal">
                <p className="eyebrow">{w.when}</p>
                <h3>{w.name}</h3>
                <p>{w.text}</p>
                <Cta href={w.href} label={w.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container split">
          <Image className="reveal" src={family.photo.src} alt={family.photo.alt} width={1920} height={1280} sizes="(max-width: 760px) 100vw, 600px" />
          <div className="reveal">
            <p className="eyebrow">{family.eyebrow}</p>
            <h2 className="display"><Accent>{family.title}</Accent></h2>
            <p>{family.text}</p>
            <Cta {...family.link} ghost />
          </div>
        </div>
      </section>

      <section className="band closing">
        <div className="container center">
          <h2 className="display reveal"><Accent>{closing.title}</Accent></h2>
          <Cta {...closing.primary} />
        </div>
      </section>
    </>
  );
}
