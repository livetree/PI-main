import Image from 'next/image';
import Link from 'next/link';
import { getSite } from '@/content/store.mjs';
import { Accent, CountUp } from '@/components/ui';

// data-k names the entry in src/content/site.mjs an element shows. The on-page
// editor uses it to know what to save; check.mjs fails if one points nowhere.

const Cta = ({ href, label, k, ghost }) => {
  const cls = ghost ? 'btn btn-ghost' : 'btn btn-primary';
  return href.startsWith('http')
    ? <a className={cls} href={href} data-k={k}>{label}</a>
    : <Link className={cls} href={href} data-k={k}>{label}</Link>;
};

// Uploaded photos (/img/…) are already sized by the editor, so they skip the optimizer.
const Photo = ({ photo, k, ...rest }) => (
  <Image src={photo.src} alt={photo.alt} unoptimized={photo.src.startsWith('/img/')} data-k-img={k} {...rest} />
);

export default async function Home() {
  const { hero, vision, today, gift, stories, ways, family, closing } = await getSite();
  return (
    <>
      <section className="hero">
        <Photo photo={hero.photo} k="hero.photo" fill preload sizes="100vw" />
        <div className="container hero-body">
          <p className="eyebrow" data-k="hero.eyebrow">{hero.eyebrow}</p>
          <h1 className="display" data-k="hero.title"><Accent>{hero.title}</Accent></h1>
          <p className="lede" data-k="hero.text">{hero.text}</p>
          <div className="actions">
            <Cta {...hero.primary} k="hero.primary.label" />
            <Cta {...hero.secondary} k="hero.secondary.label" ghost />
          </div>
        </div>
      </section>

      <section className="band" id="vision">
        <div className="container center">
          <p className="eyebrow reveal" data-k="vision.eyebrow">{vision.eyebrow}</p>
          <h2 className="display reveal" data-k="vision.title"><Accent>{vision.title}</Accent></h2>
          <p className="lede reveal" data-k="vision.text">{vision.text}</p>
          <div className="cells steps">
            {vision.steps.map((s, i) => (
              <div key={i} className="reveal">
                <b data-k={`vision.steps.${i}.n`}><CountUp n={s.n} /></b>
                <span data-k={`vision.steps.${i}.label`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal" data-k="today.eyebrow">{today.eyebrow}</p>
          <h2 className="display reveal" data-k="today.title"><Accent>{today.title}</Accent></h2>
          <div className="cards">
            {today.items.map((item, i) => (
              <div key={i} className="panel activity reveal">
                <h3 data-k={`today.items.${i}.title`}>{item.title}</h3>
                <p className="figure">
                  {item.figure
                    ? <b data-k={`today.items.${i}.figure`}>{item.figure}</b>
                    : <b data-k={`today.items.${i}.n`}><CountUp n={item.n} suffix={item.suffix} /></b>}
                  {' '}<span data-k={`today.items.${i}.label`}>{item.label}</span>
                </p>
                <p data-k={`today.items.${i}.text`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal" data-k="gift.eyebrow">{gift.eyebrow}</p>
          <h2 className="display reveal" data-k="gift.title"><Accent>{gift.title}</Accent></h2>
          <div className="cards">
            {gift.items.map((item, i) => (
              <div key={i} className="panel reveal">
                <b className="num">0{i + 1}</b>
                <h3 data-k={`gift.items.${i}.title`}>{item.title}</h3>
                <p data-k={`gift.items.${i}.text`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container">
          <div className="center">
            <p className="eyebrow reveal" data-k="stories.eyebrow">{stories.eyebrow}</p>
            <h2 className="display reveal" data-k="stories.title"><Accent>{stories.title}</Accent></h2>
          </div>
          {stories.items.map((s, i) => (
            <article key={i} className="story reveal">
              <Photo photo={s.photo} k={`stories.items.${i}.photo`} width={720} height={520} sizes="(max-width: 760px) 100vw, 560px" />
              <div>
                <p className="eyebrow" data-k={`stories.items.${i}.place`}>{s.place}</p>
                <h3 className="display" data-k={`stories.items.${i}.title`}><Accent>{s.title}</Accent></h3>
                {s.text && <p data-k={`stories.items.${i}.text`}>{s.text}</p>}
                {s.quote && <blockquote data-k={`stories.items.${i}.quote`}>{s.quote}</blockquote>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="give">
        <div className="container center">
          <p className="eyebrow reveal" data-k="ways.eyebrow">{ways.eyebrow}</p>
          <h2 className="display reveal" data-k="ways.title"><Accent>{ways.title}</Accent></h2>
          <div className="cards">
            {ways.items.map((w, i) => (
              <div key={i} className="panel way reveal">
                <p className="eyebrow" data-k={`ways.items.${i}.when`}>{w.when}</p>
                <h3 data-k={`ways.items.${i}.name`}>{w.name}</h3>
                <p data-k={`ways.items.${i}.text`}>{w.text}</p>
                <Cta href={w.href} label={w.label} k={`ways.items.${i}.label`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container split">
          <Photo className="reveal" photo={family.photo} k="family.photo" width={1920} height={1280} sizes="(max-width: 760px) 100vw, 600px" />
          <div className="reveal">
            <p className="eyebrow" data-k="family.eyebrow">{family.eyebrow}</p>
            <h2 className="display" data-k="family.title"><Accent>{family.title}</Accent></h2>
            <p data-k="family.text">{family.text}</p>
            <Cta {...family.link} k="family.link.label" ghost />
          </div>
        </div>
      </section>

      <section className="band closing">
        <div className="container center">
          <h2 className="display reveal" data-k="closing.title"><Accent>{closing.title}</Accent></h2>
          <Cta {...closing.primary} k="closing.primary.label" />
        </div>
      </section>
    </>
  );
}
