import Link from 'next/link';
import { getSite } from '@/content/store.mjs';
import { Accent } from '@/components/ui';

export const metadata = { title: 'For leaders | Prepare International' };

export default async function LeadersPage() {
  const { leaders } = await getSite();
  const { kingdom, rhythm, custom, topics, closing } = leaders;
  return (
    <>
      <section className="band page-top">
        <div className="container center">
          <p className="eyebrow" data-k="leaders.eyebrow">{leaders.eyebrow}</p>
          <h1 className="display" data-k="leaders.title"><Accent>{leaders.title}</Accent></h1>
          <p className="lede" data-k="leaders.text">{leaders.text}</p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" href={leaders.primary.href} data-k="leaders.primary.label">{leaders.primary.label}</Link>
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal" data-k="leaders.kingdom.eyebrow">{kingdom.eyebrow}</p>
          <h2 className="display reveal" data-k="leaders.kingdom.title"><Accent>{kingdom.title}</Accent></h2>
          <p className="lede reveal" data-k="leaders.kingdom.text">{kingdom.text}</p>
          <p className="lede reveal" data-k="leaders.kingdom.text2">{kingdom.text2}</p>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal" data-k="leaders.rhythm.eyebrow">{rhythm.eyebrow}</p>
          <h2 className="display reveal" data-k="leaders.rhythm.title"><Accent>{rhythm.title}</Accent></h2>
          <div className="cards four">
            {rhythm.steps.map((step, i) => (
              <div key={i} className="panel reveal">
                <b className="num">0{i + 1}</b>
                <h3 data-k={`leaders.rhythm.steps.${i}.title`}>{step.title}</h3>
                <p data-k={`leaders.rhythm.steps.${i}.text`}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt">
        <div className="container center">
          <p className="eyebrow reveal" data-k="leaders.custom.eyebrow">{custom.eyebrow}</p>
          <h2 className="display reveal" data-k="leaders.custom.title"><Accent>{custom.title}</Accent></h2>
          <div className="cards four">
            {custom.items.map((item, i) => (
              <div key={i} className="panel reveal">
                <h3 data-k={`leaders.custom.items.${i}.title`}>{item.title}</h3>
                <p data-k={`leaders.custom.items.${i}.text`}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="note-line reveal" data-k="leaders.custom.note">{custom.note}</p>
        </div>
      </section>

      <section className="band">
        <div className="container center">
          <p className="eyebrow reveal" data-k="leaders.topics.eyebrow">{topics.eyebrow}</p>
          <h2 className="display reveal" data-k="leaders.topics.title"><Accent>{topics.title}</Accent></h2>
          <p className="lede reveal" data-k="leaders.topics.text">{topics.text}</p>
          {/* Native <details>: opens with keyboard and touch, no script. */}
          <div className="topics">
            {topics.items.map((topic, i) => (
              <details key={i} name="topic">
                <summary><span data-k={`leaders.topics.items.${i}.title`}>{topic.title}</span></summary>
                <p data-k={`leaders.topics.items.${i}.text`}>{topic.text}</p>
                <ul>
                  {topic.courses.map((course, j) => (
                    <li key={j}>
                      <b data-k={`leaders.topics.items.${i}.courses.${j}.name`}>{course.name}</b>
                      <span data-k={`leaders.topics.items.${i}.courses.${j}.text`}>{course.text}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt closing">
        <div className="container center">
          <h2 className="display reveal" data-k="leaders.closing.title"><Accent>{closing.title}</Accent></h2>
          <p className="lede reveal" data-k="leaders.closing.text">{closing.text}</p>
          <Link className="btn btn-primary" href={closing.primary.href} data-k="leaders.closing.primary.label">{closing.primary.label}</Link>
        </div>
      </section>
    </>
  );
}
